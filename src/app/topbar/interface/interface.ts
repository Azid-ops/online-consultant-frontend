export interface TopbarProps {
    loginUrl: string;
    logoutUrl: string;
    user: User | null;
}

export interface User {
    email: string;
    username: string;
    userId: string;
    isVerified: boolean;
}