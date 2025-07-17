'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { type AuthUser } from 'aws-amplify/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '../../../../store/userSlice';
import '../../../../components/amplify-hosted-config';
import DashboardPage from '../pages/dashboardPage';
import { fetchAuthSession, fetchUserAttributes } from 'aws-amplify/auth';
import { RootState } from '../../../../store';

const Dashboard = () => {
    const searchParams = useSearchParams();
    const dispatch = useDispatch();
    const reduxUser = useSelector((state: RootState) => state.user);
    const [user, setUserState] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      async function checkSessionAndFetchUser() {
        try {
          setLoading(true);
          const session = await fetchAuthSession();
          if (session.tokens?.idToken) {
            console.log("Session found:", session.tokens.idToken);
            localStorage.setItem('token', session.tokens.idToken.toString());
            
            // User is authenticated, fetch user attributes
            const attributes = await fetchUserAttributes();
            dispatch(setUser({
              email: attributes.email || '',
              isVerified: String(attributes.email_verified) === 'true'
            }));
            setUserState({
              userId: attributes.sub || '',
              username: attributes.email || '',
              signInDetails: {
                loginId: attributes.email || '',
                authFlowType: 'USER_SRP_AUTH'
              }
            });
            setError(null);
          } else {
            // Clear token if no session
            localStorage.removeItem('token');
            dispatch(clearUser());
            setUserState(null);
          }
        } catch (err) {
          // Clear token on error
          localStorage.removeItem('token');
          dispatch(clearUser());
          setUserState(null);
        } finally {
          setLoading(false);
        }
      }
      checkSessionAndFetchUser();
    }, []);

    useEffect(() => {
      async function handleAuthAndFetchUser() {
        try {
          setLoading(true);
          
          // Check if we have OAuth callback parameters
          const code = searchParams.get('code');
          const error = searchParams.get('error');
          
          if (error) {
            console.error('OAuth error:', error);
            setError(new Error(`Authentication failed: ${error}`));
            setLoading(false);
            return;
          }
          
          if (code) {
            try {
              const tokenResponse = await fetch(`https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN?.replace('https://', '')}/oauth2/token`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                  grant_type: 'authorization_code',
                  client_id: process.env.NEXT_PUBLIC_USER_CLIENT_ID!,
                  code: code,
                  redirect_uri: `${process.env.NEXT_PUBLIC_REDIRECT_URL}`,
                }),
              });
              
              if (tokenResponse.ok) {
                const tokens = await tokenResponse.json();
                console.log("Tokens:", tokens);
                // Store JWT token in localStorage for API calls
                if (tokens.id_token) {
                  localStorage.setItem('token', tokens.id_token);
                }
                
                const userInfoResponse = await fetch(`https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN?.replace('https://', '')}/oauth2/userInfo`, {
                  headers: {
                    'Authorization': `Bearer ${tokens.access_token}`,
                  },
                });
                
                if (userInfoResponse.ok) {
                  const userInfo = await userInfoResponse.json();
                  const mockUser: AuthUser = {
                    userId: userInfo.sub,
                    username: userInfo.email,
                    signInDetails: {
                      loginId: userInfo.email,
                      authFlowType: 'USER_SRP_AUTH'
                    }
                  };
                  setUserState(mockUser);
                  // Dispatch to Redux
                  dispatch(setUser({ email: userInfo.email, isVerified: userInfo.email_verified === 'true' || userInfo.email_verified === true }));
                  setLoading(false);
                  return;
                } else {
                  console.error('User info fetch failed:', await userInfoResponse.text());
                }
              } else {
                console.error('Token exchange failed:', await tokenResponse.text());
              }
            } catch (tokenError) {
              console.error('Token exchange error:', tokenError);
            }
          }
        } catch (err) {
          console.log("Error in auth flow:", err);
          setError(err as Error);
        } finally {
          setLoading(false);
        }
      }
      
      handleAuthAndFetchUser();
    }, []);

    // Periodically check Cognito session every 60 seconds
    useEffect(() => {
      const interval = setInterval(async () => {
        try {
          const session = await fetchAuthSession();
          if (session.tokens?.idToken) {
            // Update JWT token in localStorage
            localStorage.setItem('token', session.tokens.idToken.toString());
            
            const attributes = await fetchUserAttributes();
            dispatch(setUser({
              email: attributes.email || '',
              isVerified: String(attributes.email_verified) === 'true'
            }));
          } else {
            // Clear token if no session
            localStorage.removeItem('token');
            dispatch(clearUser());
          }
        } catch {
          // Clear token on error
          localStorage.removeItem('token');
          dispatch(clearUser());
        }
      }, 60000); // 60 seconds
      return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <DashboardPage 
            user={reduxUser && reduxUser.email ? {
                email: reduxUser.email,
                username: reduxUser.email,
                userId: '',
                isVerified: reduxUser.isVerified
            } : null}
            loading={loading}
            error={error}
        />
    )
}

export default Dashboard;
