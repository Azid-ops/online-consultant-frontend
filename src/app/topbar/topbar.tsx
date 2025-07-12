'use client';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Topbar() {
  const user = useSelector((state: RootState) => state.user);

  const COGNITO_DOMAIN = process.env.NEXT_PUBLIC_COGNITO_DOMAIN?.replace('https://', '');
  const CLIENT_ID = process.env.NEXT_PUBLIC_USER_CLIENT_ID;
  const REDIRECT_URI = `${process.env.NEXT_PUBLIC_APP_URL}${process.env.NEXT_PUBLIC_REDIRECT_URL}`;
  const RESPONSE_TYPE = process.env.NEXT_PUBLIC_RESPONSE_TYPE;
  const SCOPE = 'openid email phone';

  if (!COGNITO_DOMAIN || !CLIENT_ID || !REDIRECT_URI || !RESPONSE_TYPE || !SCOPE) {
    throw new Error("Missing environment variables");
  }

  const loginUrl = `https://${COGNITO_DOMAIN}/login?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPE)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
  const logoutUrl = `https://${COGNITO_DOMAIN}/logout?client_id=${CLIENT_ID}&logout_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + (process.env.NEXT_PUBLIC_LOGOUT_URL || '/'))}`;

  return (
    <header
      style={{
        width: '100%',
        background: '#fff',
        color: '#22223b',
        padding: '0.75rem 2rem',
        boxShadow: '0 2px 8px rgba(60, 60, 130, 0.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #ececec',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span
          style={{
            fontWeight: 700,
            fontSize: 26,
            color: '#6366f1',
            marginRight: 6,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#6366f1"/><text x="12" y="17" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold" fontFamily="sans-serif">OC</text></svg>
        </span>
        <Link
          href="/"
          style={{
            color: '#22223b',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: 1,
            fontFamily: 'inherit',
          }}
        >
          Online Consultant
        </Link>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
        {user.email ? (
          <a
            href={logoutUrl}
            style={{
              color: '#fff',
              background: '#6366f1',
              border: 'none',
              borderRadius: 6,
              padding: '0.35rem 1.2rem',
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
              cursor: 'pointer',
              marginLeft: 8,
            }}
          >
            Logout
          </a>
        ) : (
          <>
            <Link
              href="/about"
              style={{
                color: '#22223b',
                background: 'none',
                border: 'none',
                fontWeight: 500,
                fontSize: 15,
                textDecoration: 'none',
                cursor: 'pointer',
                padding: '0.3rem 0.8rem',
                borderRadius: 5,
                transition: 'background 0.2s',
              }}
            >
              About
            </Link>
            <Link
              href="/contact"
              style={{
                color: '#22223b',
                background: 'none',
                border: 'none',
                fontWeight: 500,
                fontSize: 15,
                textDecoration: 'none',
                cursor: 'pointer',
                padding: '0.3rem 0.8rem',
                borderRadius: 5,
                transition: 'background 0.2s',
              }}
            >
              Contact
            </Link>
            <a
              href={loginUrl}
              style={{
                color: '#6366f1',
                background: 'none',
                border: '1.5px solid #6366f1',
                borderRadius: 6,
                padding: '0.35rem 1.2rem',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
                cursor: 'pointer',
                marginLeft: 8,
              }}
            >
              Sign In
            </a>
          </>
        )}
      </nav>
    </header>
  );
}
