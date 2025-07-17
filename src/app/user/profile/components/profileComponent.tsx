'use client'

import { useState } from "react";
import ProfilePage from "../pages/ProfilePage";
import { ProfileData } from "../profileUpload/interface";

const ProfileComponent = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading, setLoading] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData>({ totalAttempts: 0 });
  
    // Document upload wizard state
    const [mainStep, setMainStep] = useState(0); // 0 = Profile, 1 = Documents

    // Calculate form completion percentage
    const calculateFormCompletion = (profile: ProfileData): number => {
        const requiredFields = [
        'dob',
        'educationLevel', 
        'ieltsBands',
        'idCard'
        ];
        
        const optionalFields = [
        'imageLink'
        ];

        let completedRequired = 0;
        let completedOptional = 0;

        // Check required fields
        requiredFields.forEach(field => {
        const value = profile[field as keyof ProfileData];
        if (value !== undefined && value !== null && value !== '') {
            completedRequired++;
        }
        });

        // Check optional fields (weighted less) - consider both Redux and local imageUrl
        optionalFields.forEach(field => {
        const value = profile[field as keyof ProfileData];
        // For imageLink, also check if there's a local imageUrl (from S3 upload)
        if (field === 'imageLink') {
            if (value !== undefined && value !== null && value !== '') {
            completedOptional++;
            }
        } else {
            if (value !== undefined && value !== null && value !== '') {
            completedOptional++;
            }
        }
        });

        // Calculate percentage: 80% for required fields, 20% for optional
        const requiredPercentage = (completedRequired / requiredFields.length) * 0.8;
        const optionalPercentage = (completedOptional / optionalFields.length) * 0.2;
        
        return Math.round((requiredPercentage + optionalPercentage) * 100);
    };

    const formCompletion = calculateFormCompletion(profileData);

    return(
        <ProfilePage 
            profileData={profileData} 
            setProfileData={setProfileData} 
            mainStep={mainStep} 
            setMainStep={setMainStep} 
            formCompletion={formCompletion}
            loading={loading}
        />
    )
}

export default ProfileComponent;