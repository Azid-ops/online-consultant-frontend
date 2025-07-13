'use client';
import Link from 'next/link';
import { AuthState } from '../interface/interface';

const DashboardPage = ({user, loading, error}: AuthState) => {

    return(
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
            <h3>Welcome, {user?.username}!</h3>
            <p>You are successfully authenticated.</p>
            <p>Email: {user?.username}</p>
            <p>User ID: {user?.userId}</p>
            <p>Email Verified: Yes</p>
          </div>
        )}
        
        <Link href="/">
          <button style={{ marginTop: 24 }}>Back to Main Page</button>
        </Link>
      </main>
    )
}

export default DashboardPage;