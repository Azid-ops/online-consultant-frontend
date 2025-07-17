export interface UploadWizardProps {
    setShowUploadWizard: (showUploadWizard: boolean) => void;
    currentStep: number;
    uploadedFiles: any;
    uploadProgress: any;
    dragOver: string | null;
    wizardAnimation: string;
    showSuccess: boolean;
    closeWizard: () => void;
    uploadSteps: any;
    getCurrentStepFiles: () => any;
    handleDragOver: (e: React.DragEvent<HTMLDivElement>, documentType: string) => void;
    handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDrop: (e: React.DragEvent<HTMLDivElement>, documentType: string) => void;
    handleWizardFileUpload: (e: React.ChangeEvent<HTMLInputElement>, documentType: string) => void;
    setShowSuccess: (showSuccess: boolean) => void;
    prevStep: () => void;
    nextStep: () => void;
    finishUpload: () => void;
    removeWizardFile: (documentType: string) => void;
    documents: any;
}
