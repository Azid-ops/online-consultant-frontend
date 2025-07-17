'use client'

import { useSelector, useDispatch } from "react-redux";
import ProfileUploadPage from "../pages/profileUploadPage"
import { useState, useEffect } from "react";
import { RootState } from "@/store";
import { ProfileData } from "../interface";
import Services from "@/services/profile/services";
import { setProfileRedux } from "@/store/profileSlice";

interface ProfileUploadProps {
  mainStep: number;
  setMainStep: (step: number) => void;
  onProfileDataChange?: (profile: ProfileData) => void;
  formCompletion: number;
}

const ProfileUpload = ({ mainStep, setMainStep, onProfileDataChange,formCompletion }: ProfileUploadProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageUploading, setImageUploading] = useState(false);
    const reduxUser = useSelector((state: RootState) => state.user);
    const reduxProfile = useSelector((state: RootState) => state.profile);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const dispatch = useDispatch();

    // Use Redux profile as the source of truth
    const profileData: ProfileData = reduxProfile || {
      id: undefined,
      signupId: undefined,
      imageLink: '',
      dob: '',
      idCard: '',
      totalAttempts: 0,
      ieltsBands: undefined,
      educationLevel: '',
      createdAt: undefined,
      updatedAt: undefined,
      resumeUrl: ''
    };

    // Notify parent component when profile data changes
    useEffect(() => {
      if (onProfileDataChange) {
        // Include imageUrl in the profile data for progress calculation
        const profileWithImage = {
          ...profileData,
          imageLink: imageUrl || profileData.imageLink
        };
        onProfileDataChange(profileWithImage);
      }
    }, [profileData, imageUrl, onProfileDataChange]);

    // Clear imagePreview when editing is cancelled
    useEffect(() => {
      if (!isEditing) {
        setImagePreview(null);
        setImageUrl(null);
      }
    }, [isEditing]);

    useEffect(() => {
      if (!reduxProfile && reduxUser.email) {
        fetchProfileData();
      }
    }, [reduxProfile, reduxUser.email, dispatch]);

    const fetchProfileData = async () => {
      try {
        const response = await Services.getProfileData(reduxUser.email || '');
        if (response && response.body && response.body.data) {
          dispatch(setProfileRedux(response.body.data));
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    const syncProfileData = async () => {
      try {
        await fetchProfileData();
      } catch (error) {
        console.error('Error syncing profile data:', error);
      }
    }

    // Update profile in Redux
    const updateProfile = (field: string, value: any) => {
      const updatedProfile = { ...profileData, [field]: value };
      dispatch(setProfileRedux(updatedProfile));
    };

    const educationLevels = [
      'High School',
      'Associate Degree',
      'Bachelor\'s Degree',
      'Master\'s Degree',
      'Doctorate',
      'Other'
    ];

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          setImageUploading(true);
          
          // Show preview immediately
          const reader = new FileReader();
          reader.onload = (e) => {
            const previewUrl = e.target?.result as string;
            setImagePreview(previewUrl);
          };
          reader.readAsDataURL(file);
          
          try {
            // Upload to S3
            const uploadedUrl = await uploadProfileImage(file);
            if (uploadedUrl) {
              setImagePreview(uploadedUrl);
              setImageUrl(uploadedUrl);
            }
          } catch (error) {
            console.error('Error uploading image:', error);
          } finally {
            setImageUploading(false);
          }
        }
    };

    const uploadProfileImage = async (image: File) => {
      try {
        // Validate file type - only images allowed
        if (!image.type.startsWith('image/')) {
          alert('Please upload only image files (JPG, PNG, etc.).');
          return;
        }
    
        // Validate file size (5MB limit)
        if (image.size > 5 * 1024 * 1024) {
          alert('File size must be less than 5MB.');
          return;
        }
    
        // Get user email
        const userEmail = reduxUser.email || '';
        if (!userEmail) {
          alert('User email not found. Please try again.');
          return;
        }
    
        // Create file name with email/profile/image structure
        const fileExtension = image.name.split('.').pop();
        const fileName = `profile.${fileExtension}`;
        const fileKey = `${userEmail}/profile/${fileName}`;
    
        // 1. Get signed URL from backend
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL}/s3/upload-url?fileName=${encodeURIComponent(fileKey)}&fileType=${encodeURIComponent(image.type)}&userEmail=${encodeURIComponent(userEmail)}`,
          { method: 'GET' }
        );
        
        if (!res.ok) {
          throw new Error('Failed to get upload URL');
        }
        
        const { uploadUrl, fileUrl, fileKey: returnedFileKey } = await res.json();
    
        // 2. Upload file to S3
        const uploadRes = await fetch(uploadUrl, {
          method: 'PUT',
          headers: { 'Content-Type': image.type },
          body: image,
        });
    
        if (!uploadRes.ok) {
          throw new Error('Failed to upload image to S3');
        }
    
        // 3. Update profile with the uploaded image URL
        setImageUrl(fileUrl);
        return fileUrl;
        
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image. Please try again.');
        return null;
      }
    };

    const handleSave = async () => {
        try {
          setLoading(true);
          const { dob, educationLevel, idCard, ieltsBands } = profileData;
          const profileDataToSend = {
            user_email: reduxUser.email,
            dob: dob,
            education_level: educationLevel,
            id_card: idCard,
            ielts_bands: ieltsBands,
            image_link: imageUrl || profileData.imageLink, // Use uploaded image URL if available
          };

          await Services.postProfileData(profileDataToSend);
          
          // Update Redux with the new profile data including the image URL
          const updatedProfile = {
            ...profileData,
            imageLink: imageUrl || profileData.imageLink,
          };
          dispatch(setProfileRedux(updatedProfile));
          
          setIsEditing(false);
        } catch (error) {
          console.error('Error saving profile:', error);
        } finally {
          setLoading(false);
        }
    };

    const formatIdCard = (value: string) => {
        // Remove all non-alphanumeric characters
        const cleaned = value.replace(/[^a-zA-Z0-9]/g, '');
        
        // Format as xxxxx-xxxxxxx-x
        if (cleaned.length <= 5) {
            return cleaned;
        } else if (cleaned.length <= 12) {
            return `${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
        } else {
            return `${cleaned.slice(0, 5)}-${cleaned.slice(5, 12)}-${cleaned.slice(12, 13)}`;
        }
    };

    const handleIdCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const withoutDashes = input.replace(/-/g, '');
        const formatted = formatIdCard(withoutDashes);
        updateProfile('idCard', formatted);
    };

    const uploadProfileData = () => {
      setMainStep(1);
    }

    return(
        <ProfileUploadPage 
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            imagePreview={imagePreview}
            handleImageUpload={handleImageUpload}
            handleSave={handleSave}
            profile={profileData}
            setProfile={updateProfile}
            educationLevels={educationLevels}
            handleIdCardChange={handleIdCardChange}
            mainStep={mainStep}
            setMainStep={setMainStep}
            reduxUser={reduxUser}
            loading={loading}
            uploadProfileData={uploadProfileData}
            syncProfileData={syncProfileData}
            formCompletion={formCompletion}
            imageUploading={imageUploading}
        />
    )
}

export default ProfileUpload;
