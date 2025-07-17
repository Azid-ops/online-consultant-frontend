'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import TopbarPage from '../pages/topbarPage';
import { clearUser } from '../../../store/userSlice';

const TopbarComponent = () => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const COGNITO_DOMAIN = process.env.NEXT_PUBLIC_COGNITO_DOMAIN?.replace('https://', '');
    const CLIENT_ID = process.env.NEXT_PUBLIC_USER_CLIENT_ID;
    const REDIRECT_URI = `${process.env.NEXT_PUBLIC_REDIRECT_URL}`;
    const RESPONSE_TYPE = process.env.NEXT_PUBLIC_RESPONSE_TYPE;
    const SCOPE = 'openid email phone';
  
    if (!COGNITO_DOMAIN || !CLIENT_ID || !REDIRECT_URI || !RESPONSE_TYPE || !SCOPE) {
      throw new Error("Missing environment variables");
    }
  
    const loginUrl = `https://${COGNITO_DOMAIN}/login?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPE)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
    const logoutUrl = `https://${COGNITO_DOMAIN}/logout?client_id=${CLIENT_ID}&logout_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_LOGOUT_URL || '')}`;

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(clearUser());
        window.location.href = logoutUrl;
    };
  
    return(
        <TopbarPage 
            loginUrl={loginUrl} 
            logoutUrl={logoutUrl} 
            user={user.email ? {
                email: user.email,
                username: user.email,
                userId: user.email, // Using email as userId since Redux doesn't store userId
                isVerified: user.isVerified
            } : null}
            onLogout={handleLogout}
        />
    )
}

export default TopbarComponent;
