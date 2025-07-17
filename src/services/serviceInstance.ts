import axios from "axios";
import { Response } from "./profile/interface";

const getAuthToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }
    return token;
};

const serviceInstance = {
    get: async (url: string, email?:string): Promise<Response> => {
        try {
            const token = getAuthToken();
            if (!token) {
                return {
                    status: 401,
                    body: { error: 'No authentication token found. Please log in again.' },
                    message: 'Unauthorized'
                };
            }
            
            const response = await axios.get(url, {params: {email}, headers: {Authorization: `Bearer ${token}`}});
            return {
                status: response.status,
                body: response.data,
                message: response.statusText
            };
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                body: { error: error.message || 'An error occurred' },
                message: error.response?.statusText || 'Internal Server Error'
            };
        }
    },

    post: async (url:string, body:any): Promise<Response> => {
        try {
            const token = getAuthToken();
            if (!token) {
                return {
                    status: 401,
                    body: { error: 'No authentication token found. Please log in again.' },
                    message: 'Unauthorized'
                };
            }
            
            const response = await axios.post(url, body, {headers: {Authorization: `Bearer ${token}`}});
            return {
                status: response.status,
                body: response.data,
                message: response.statusText
            };
        } catch (error: any) {
            return {
                status: error.response?.status || 500,
                body: { error: error.message || 'An error occurred' },
                message: error.response?.statusText || 'Internal Server Error'
            };
        }
    }
}

export default serviceInstance;
