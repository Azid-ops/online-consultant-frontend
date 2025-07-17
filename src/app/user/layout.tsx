'use client';

import Sidebar from "./sidebar/sidebar";
import { useSelector } from 'react-redux';

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    // Get user data from Redux store with correct state structure
    const user = useSelector((state: any) => state?.user || null);

    return (
        <div className="flex bg-gray-50 h-screen">
            <Sidebar user={user} />
            <div 
                key="stable-scroll-container"
                className="flex-1 overflow-y-auto"
                style={{ 
                    scrollBehavior: 'auto',
                    height: '100vh'
                }}
            >
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
} 