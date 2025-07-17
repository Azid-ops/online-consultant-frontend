'use client'

import { addDocument } from "@/store/documentsSlice";
import UploadWizardPage from "../pages/uploadWizardPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface ProfileData {
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
    resumeUrl?: string; // Added for resume upload
}

interface UploadStep {
    id: number;
    title: string;
    description: string;
    documentTypes: string[];
    required: boolean;
}


const UploadWizard = ({ setShowUploadWizard }: { setShowUploadWizard: (show: boolean) => void }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: { file: File | null; fileUrl: string; fileKey: string; uploaded: boolean } }>({});
    const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
    const [dragOver, setDragOver] = useState<string | null>(null);
    const [wizardAnimation, setWizardAnimation] = useState<'entering' | 'entered' | 'exiting'>('entered'); // Changed to 'entered' by default
    const [showSuccess, setShowSuccess] = useState(false);
    const [profile, setProfile] = useState<ProfileData>({
        totalAttempts: 0
    });
    const reduxUser = useSelector((state: RootState) => state.user);
    const documents = useSelector((state: RootState) => state.documents.documents);
    const dispatch = useDispatch();
    const [hasInitialized, setHasInitialized] = useState(false);

    // Fetch existing documents when component mounts
    useEffect(() => {
        if (reduxUser.email && !hasInitialized) {
            setHasInitialized(true);
            // Populate uploadedFiles from Redux documents state
            populateUploadedFilesFromRedux();
        }
    }, [reduxUser.email, hasInitialized, documents]);

    // Function to populate uploadedFiles from Redux documents
    const populateUploadedFilesFromRedux = () => {
        if (documents && documents.length > 0) {
            const existingFiles: { [key: string]: { file: File | null; fileUrl: string; fileKey: string; uploaded: boolean } } = {}
            documents.forEach((doc: any) => {
                const documentType = doc.documentType;
                
                existingFiles[documentType] = {
                    file: null, // We dont have the actual File object, just the URL
                    fileUrl: doc.filePath,
                    fileKey: doc.filePath, // Use filePath as fileKey for existing documents
                    uploaded: true
                };
                
                // Set progress to 100 for existing documents
                setUploadProgress(prev => ({ ...prev, [documentType]: 100 }));
            });
            
            setUploadedFiles(existingFiles);
        }
    };

    // Utility function to get JWT token
    const getAuthToken = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return null;
        }
        return token;
    };

    // Ref to track if documents have been processed
    const closeWizard = () => {
        setShowUploadWizard(false);
        setWizardAnimation('exiting');

        setTimeout(() => {
            setWizardAnimation('entering');
            setCurrentStep(0);
            setUploadedFiles({});
            setUploadProgress({});
            setDragOver(null);
        }, 300);
    };

    const uploadSteps: UploadStep[] = [
    {
        id: 1,
        title: "Academic Transcript",
        description: "Upload your academic transcript",
        documentTypes: ['Academic Transcript'],
        required: true
    },
    {
        id: 2,
        title: "Degree Certificate",
        description: "Upload your degree certificate",
        documentTypes: ['Degree Certificate'],
        required: true
    },
    {
        id: 3,
        title: "Language Proficiency Tests",
        description: "Upload at least one language test result (IELTS, TOEFL, or PTE) - You can upload multiple if you have them",
        documentTypes: ['IELTS Certificate', 'TOEFL Certificate', 'PTE Certificate'],
        required: true
    },
    {
        id: 4,
        title: "Passport",
        description: "Upload your passport",
        documentTypes: ['Passport'],
        required: true
    },
    {
        id: 5,
        title: "National ID",
        description: "Upload your national ID",
        documentTypes: ['National ID'],
        required: true
    },
    {
        id: 6,
        title: "Birth Certificate",
        description: "Upload your birth certificate",
        documentTypes: ['Birth Certificate'],
        required: true
    },
    {
        id: 7,
        title: "Financial Statement",
        description: "Upload your financial statement",
        documentTypes: ['Financial Statement'],
        required: true
    },
    {
        id: 8,
        title: "Letter of Recommendation",
        description: "Upload your letter of recommendation",
        documentTypes: ['Letter of Recommendation'],
        required: true
    },
    {
        id: 9,
        title: "Statement of Purpose",
        description: "Upload your statement of purpose",
        documentTypes: ['Statement of Purpose'],
        required: true
    },
    {
        id: 10,
        title: "CV/Resume",
        description: "Upload your CV or resume",
        documentTypes: ['CV/Resume'],
        required: true
    }
    ];

    const getCurrentStepFiles = () => {
        const currentStepData = uploadSteps[currentStep];
        const files = currentStepData.documentTypes.map(type => ({
          type,
          file: uploadedFiles[type]?.file,
          fileUrl: uploadedFiles[type]?.fileUrl,
          uploaded: uploadedFiles[type]?.uploaded,
          progress: uploadProgress[type] || 0
        }));
        return files;
    };

    const handleDragOver = (e: React.DragEvent, documentType: string) => {
        e.preventDefault();
        setDragOver(documentType);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(null);
    };

    const handleDrop = (e: React.DragEvent, documentType: string) => {
        e.preventDefault();
        setDragOver(null);
    
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            handleFileUpload(files[0], documentType);
        }
    };

    const handleFileUpload = async (file: File, documentType: string) => {
        // Check if user is logged in
        if (!reduxUser.email) {
            alert('Please log in first before uploading documents.');
            return;
        }

        // Validate file type - only PDF allowed
        if (file.type !== 'application/pdf') {
          alert('Please upload only PDF files.');
          return;
        }
    
        // Validate file size (5MB limit)
        if (file.size > 5 * 1024 * 1024) {
          alert('File size must be less than 5MB.');
          return;
        }
    
        setUploadProgress(prev => ({ ...prev, [documentType]: 10 }));
    
        try {
          // Check if token exists
          const token = getAuthToken();
          if (!token) {
            alert('Authentication token not found. Please log in again.');
            return;
          }

          // 1. Get signed URL from backend using new secure endpoint
          const uploadUrlResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/documents/upload-url`, {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` // Use the token we just checked
            },
            body: JSON.stringify({
              documentType,
              fileName: file.name,
              fileType: file.type
            })
          });

          if (!uploadUrlResponse.ok) {
            const errorText = await uploadUrlResponse.text();
            console.error('Upload URL response error:', uploadUrlResponse.status, errorText);
            throw new Error(`Failed to get upload URL: ${uploadUrlResponse.status} - ${errorText}`);
          }

          const uploadUrlData = await uploadUrlResponse.json();
          const { uploadUrl, fileUrl, fileKey } = uploadUrlData.data;
    
          // 2. Upload file to S3
          const uploadRes = await fetch(uploadUrl, {
            method: 'PUT',
            headers: { 'Content-Type': file.type },
            body: file,
          });
    
          if (!uploadRes.ok) {
            throw new Error('Failed to upload image to S3');
          }
    
          setUploadProgress(prev => ({ ...prev, [documentType]: 50 }));
    
          // 3. Save document metadata to backend using new secure endpoint
          const saveDocumentResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/documents/save`, {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` // Use the same token
            },
            body: JSON.stringify({
              documentType,
              filePath: fileUrl,
              status: 'pending',
              isVerified: false
            }),
          });

          if (!saveDocumentResponse.ok) {
            throw new Error('Failed to save document metadata');
          }

          const savedDocument = await saveDocumentResponse.json();
    
          setUploadProgress(prev => ({ ...prev, [documentType]: 100}));

          //4 Save file info in uploadedFiles
          setUploadedFiles(prev => ({
            ...prev,
            [documentType]: {
              file,
              fileUrl,
              fileKey,
              uploaded: true,
            },
          }));

          // 5dd document to Redux store
          dispatch(addDocument(savedDocument.data));

    
        } catch (error) {
          console.error('Error uploading document:', error);
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
          alert(`Failed to upload document: ${errorMessage}`);
          setUploadProgress(prev => ({ ...prev, [documentType]: 0 }));
        }
    };

    const removeWizardFile = (documentType: string) => {
    setUploadedFiles(prev => {
        const newFiles = { ...prev };
        delete newFiles[documentType];
        return newFiles;
    });
    setUploadProgress(prev => {
        const newProgress = { ...prev };
        delete newProgress[documentType];
        return newProgress;
    });
    };

    const handleWizardFileUpload = (event: React.ChangeEvent<HTMLInputElement>, documentType: string) => {
        const file = event.target.files?.[0];
        if (file) {
            handleFileUpload(file, documentType);
        }
    };

    const finishUpload = async () => {
        try {
          // Check if token exists
          const token = getAuthToken();
          if (!token) {
            alert('Authentication token not found. Please log in again.');
            return;
          }

          // Show success notification
          setShowSuccess(true);
          
          // Close wizard after showing success for 3 seconds
          setTimeout(() => {
            setShowSuccess(false);
            closeWizard();
          }, 3000);
        } catch (error) {
          console.error('Error finishing upload:', error);
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
          alert(`Error: ${errorMessage}`);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const nextStep = () => {
        // Check if current step is language tests and validate that at least one is uploaded
        if (currentStep === 2) { // Language tests step (index 2)
            const languageTests = ['IELTS Certificate', 'TOEFL Certificate', 'PTE Certificate'];
            const hasAnyLanguageTest = languageTests.some(test => uploadedFiles[test]?.uploaded);
            
            if (!hasAnyLanguageTest) {
                alert('Please upload at least one language test result (IELTS, TOEFL, or PTE) before proceeding.');
                return;
            }
        }
        
        if (currentStep < uploadSteps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };
    return(
        <UploadWizardPage setShowUploadWizard={setShowUploadWizard}
            currentStep={currentStep}
            uploadedFiles={uploadedFiles}
            uploadProgress={uploadProgress}
            dragOver={dragOver}
            wizardAnimation={wizardAnimation}
            showSuccess={showSuccess}
            closeWizard={closeWizard}
            uploadSteps={uploadSteps}
            getCurrentStepFiles={getCurrentStepFiles}
            handleDragOver={handleDragOver}
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
            handleWizardFileUpload={handleWizardFileUpload}
            setShowSuccess={setShowSuccess}
            prevStep={prevStep}
            nextStep={nextStep}
            finishUpload={finishUpload}
            removeWizardFile={removeWizardFile}
            documents={documents}
        />
    )
}

export default UploadWizard;
