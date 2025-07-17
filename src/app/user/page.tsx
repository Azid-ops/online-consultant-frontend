'use client';

import Dashboard from "./dashboard/components/dashboard";
import UserLayout from "./layout";

const UserPage = () => {
    return (
        <UserLayout>
            <Dashboard />
        </UserLayout>
    )
}

export default UserPage;