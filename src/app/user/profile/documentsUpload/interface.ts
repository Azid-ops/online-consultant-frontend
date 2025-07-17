export interface DocumentsUploadPageProps {
    showUploadWizard: boolean;
    openWizard: () => void;
    documents: any;
    removeDocumentHandler: (documentId: number) => void;
    setShowUploadWizard: (showUploadWizard: boolean) => void;
}
