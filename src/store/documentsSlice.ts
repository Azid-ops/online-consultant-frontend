import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DocumentData {
    id?: number;
    profileId?: number;
    documentType: string;
    filePath: string;
    status: string;
    isVerified: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

interface DocumentsState {
    documents: DocumentData[];
    loading: boolean;
    error: string | null;
}

const initialState: DocumentsState = {
    documents: [],
    loading: false,
    error: null
};

const documentsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
        setDocuments: (state, action: PayloadAction<DocumentData[]>) => {
            state.documents = action.payload;
            state.loading = false;
            state.error = null;
        },
        addDocument: (state, action: PayloadAction<DocumentData>) => {
            // Check if document already exists and update it, otherwise add new
            const existingIndex = state.documents.findIndex(doc => doc.documentType === action.payload.documentType);
            if (existingIndex !== -1) {
                state.documents[existingIndex] = action.payload;
            } else {
                state.documents.push(action.payload);
            }
        },
        updateDocument: (state, action: PayloadAction<{ id: number; updates: Partial<DocumentData> }>) => {
            const index = state.documents.findIndex(doc => doc.id === action.payload.id);
            if (index !== -1) {
                state.documents[index] = { ...state.documents[index], ...action.payload.updates };
            }
        },
        removeDocument: (state, action: PayloadAction<number>) => {
            state.documents = state.documents.filter(doc => doc.id !== action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearDocuments: (state) => {
            state.documents = [];
            state.loading = false;
            state.error = null;
        }
    }
});

export const { 
    setDocuments, 
    addDocument, 
    updateDocument, 
    removeDocument, 
    setLoading, 
    setError, 
    clearDocuments 
} = documentsSlice.actions;

export default documentsSlice.reducer; 