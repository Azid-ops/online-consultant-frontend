export interface User {
    email: string;
    username: string;
    userId: string;
    isVerified: boolean;
}


export interface AuthState {
    user: User | null;
    loading: boolean;
    error: err | null;
}

export interface err {
    message: string;
}
