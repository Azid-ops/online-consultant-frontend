'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { type AuthUser } from 'aws-amplify/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/userSlice';
import '../../../components/amplify-hosted-config';
import DashboardPage from '../pages/dashboardPage';

const Dashboard = () => {
    const searchParams = useSearchParams();
    const dispatch = useDispatch();
    const [user, setUserState] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
  
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
                  redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}${process.env.NEXT_PUBLIC_REDIRECT_URL}`,
                }),
              });
              
              if (tokenResponse.ok) {
                const tokens = await tokenResponse.json();
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
    }, [searchParams, dispatch]);
    return (
        <DashboardPage 
            user={user ? {
                email: user.username,
                username: user.username,
                userId: user.userId,
                isVerified: true
            } : null} 
            loading={loading} 
            error={error} 
        />
    )
}

export default Dashboard;
