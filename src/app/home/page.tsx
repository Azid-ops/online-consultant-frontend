'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getCurrentUser, type AuthUser } from 'aws-amplify/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import '../../components/amplify-hosted-config';

export default function HomePage() {
  const router = useRouter();
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
                redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/home`,
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
    <main style={{ maxWidth: 600, margin: '40px auto', padding: 24 }}>
      <h1>Home</h1>
      <p>Welcome to your home page! Here you can see your AWS Cognito user info.</p>
      
      {loading && <div>Loading user info...</div>}
      
      {error && (
        <div>
          <p>Not signed in. Please sign in to see your information.</p>
          <p style={{ color: 'red', fontSize: '12px' }}>Error: {error.message}</p>
          <Link href="/">
            <button style={{ marginTop: 12 }}>Go to Login</button>
          </Link>
        </div>
      )}
      
      {user && (
        <div>
          <h3>Welcome, {user.username}!</h3>
          <p>You are successfully authenticated.</p>
          <p>Email: {user.username}</p>
          <p>User ID: {user.userId}</p>
          <p>Email Verified: Yes</p>
        </div>
      )}
      
      <Link href="/">
        <button style={{ marginTop: 24 }}>Back to Main Page</button>
      </Link>
    </main>
  );
}
