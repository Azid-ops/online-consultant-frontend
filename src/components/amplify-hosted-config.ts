'use client';
import { Amplify } from 'aws-amplify';

const domain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN?.replace('https://', '');

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: process.env.NEXT_PUBLIC_USER_CLIENT_ID!,
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID!,
      loginWith: {
        username: process.env.NEXT_PUBLIC_COGNITO_USERNAME === "true",
        email: process.env.NEXT_PUBLIC_COGNITO_EMAIL === "true",
        phone: process.env.NEXT_PUBLIC_COGNITO_PHONE === "true",
        oauth: {
          domain: domain!,
          scopes: ['openid', 'email', 'phone'],
          redirectSignIn: [process.env.NEXT_PUBLIC_APP_URL! + '/home'],
          redirectSignOut: [process.env.NEXT_PUBLIC_APP_URL! + process.env.NEXT_PUBLIC_LOGOUT_URL!],
          responseType: 'code',
        }
      }
    }
  }
});