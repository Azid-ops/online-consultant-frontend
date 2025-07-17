'use client'

import { useEffect, useState } from "react";
import { removeDocument, setDocuments } from "@/store/documentsSlice";
import DocumentsUploadPage from "../pages/documentsUploadPage";
import Services from "@/services/profile/services";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const DocumentsUpload = () => {
    const [showUploadWizard, setShowUploadWizard] = useState(false);
    const documents = useSelector((state: RootState) => state.documents.documents);
    const dispatch = useDispatch();

    const fetchDocuments = async () => {
        try {
        const response:any = await Services.getDocuments();
        if (response.status === 200) {
            dispatch(setDocuments(response.body.data));
        } else if (response.status === 401) {
            console.error('Authentication error:', response.body.error);
            // Don't show alert for auth errors, just log them
        } else {
            console.error('Failed to fetch documents:', response.status, response.body.error);
        }
        } catch (error) {
        console.error('Error fetching documents:', error);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, []);

    const openWizard = () => {
        setShowUploadWizard(true);
    };

    const removeDocumentHandler = (documentId: number) => {
        dispatch(removeDocument(documentId));
    };

    return(
        <DocumentsUploadPage 
            showUploadWizard={showUploadWizard} 
            openWizard={openWizard} 
            documents={documents} 
            removeDocumentHandler={removeDocumentHandler} 
            setShowUploadWizard={setShowUploadWizard}
        />
    )
}

export default DocumentsUpload;
