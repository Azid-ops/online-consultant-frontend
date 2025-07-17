export interface ProfileData {
    id?: number;
    signupId?: number;
    imageLink?: string;
    dob?: string;
    idCard?: string;
    totalAttempts: number;
    ieltsBands?: number;
    educationLevel?: string;
    createdAt?: Date;
    updatedAt?: Date;
    resumeUrl?: string;
    body?: any;
    status?: number;
    statusText?: string;
}
  
export interface ProfileUploadPageProps {
    isEditing: boolean;
    setIsEditing: (editing: boolean) => void;
    imagePreview: string | null;
    handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => Promise<void>;
    profile: ProfileData;
    setProfile: (field: string, value: any) => void;
    educationLevels: string[];
    handleIdCardChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    mainStep: number;
    setMainStep: (step: number) => void;
    reduxUser: any;
    loading: boolean;
    uploadProfileData: () => void;
    syncProfileData: () => void;
    formCompletion: number;
    imageUploading: boolean;
} 