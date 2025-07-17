'use client'

import { RootState } from "@/store";
import { AlertCircle, Check, ChevronLeft, ChevronRight, Edit3, FileText, Upload, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDocuments, addDocument, updateDocument } from "@/store/documentsSlice";
import { UploadWizardProps } from "../interface";


const UploadWizardPage = ({
    setShowUploadWizard, 
    currentStep, 
    uploadedFiles, 
    uploadProgress, 
    dragOver, 
    wizardAnimation,
    showSuccess,
    closeWizard,
    uploadSteps,
    getCurrentStepFiles,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleWizardFileUpload,
    setShowSuccess,
    prevStep,
    nextStep,
    finishUpload,
    removeWizardFile,
    documents
}: UploadWizardProps) => {
    return(
        <div className={`flex bg-white rounded-2xl shadow-2xl border border-blue-200 p-0 w-full h-full transition-all duration-300 ease-in-out ${
            wizardAnimation === 'entering' ? 'opacity-0 translate-y-full' :
            wizardAnimation === 'entered' ? 'opacity-100 translate-y-0' :
            wizardAnimation === 'exiting' ? 'opacity-0 translate-y-full' : ''
        }`}>
            <div className="bg-white rounded-2xl w-full h-full p-0">
        
                {/* Success Overlay */}
                {showSuccess && (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50via-blue-50to-purple-50 bg-opacity-95 flex items-center justify-center z-10 rounded-lg backdrop-blur-sm">
                        <div className="text-center max-w-lg mx-auto p-8 relative">
                            {/* Animated Success Icon */}
                            <div className="relative mb-8">
                                <div className="w-28 h-28 gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2l animate-pulse">
                                    <Check className="h-14 text-white animate-bounce" />
                                </div>
                                {/* Ripple effect */}
                                <div className="absolute inset-0 w-28 h-28 bg-green-400 rounded-full mx-auto animate-ping opacity-20"></div>
                                <div className="absolute inset-0 w-28 h-28 bg-green-300 rounded-full mx-auto animate-ping opacity-10" style={{animationDelay: '0.5s'}}></div>
                            </div>
                            
                            {/* Success Message */}
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
                                🎉 Upload Complete!
                            </h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Your documents have been successfully uploaded and are now being reviewed by our team.
                            </p>
                            
                            {/* Progress indicator */}
                            <div className="bg-white rounded-xl p-6 shadow-xl mb-8 border border-gray-100">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-semibold text-gray-700">Next Steps:</span>
                                    <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded-full">Processing</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                                    <div 
                                        className="bg-gradient-to-r from-green-400 to-green-600 rounded-full h-3 animate-pulse transition-all duration-1000" 
                                        style={{width: '60%'}}
                                    ></div>
                                </div>
                                <p className="text-sm text-gray-500">
                                    You'll receive a notification once your documents are verified
                                </p>
                            </div>
                            
                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => {
                                        setShowSuccess(false);
                                        closeWizard();
                                    }}
                                    className="px-8 py-4 gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    Continue to Dashboard
                                </button>
                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-all duration-300"
                                >
                                    Review Documents
                                </button>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                        </div>
                    </div>
                )}
    
                {/* Wizard Header */}
                <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Document Upload Wizard</h2>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">
                            Step {currentStep + 1} of {uploadSteps.length}
                        </span>
                        <button
                            onClick={closeWizard}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                </div>
                
                {/* Progress Steps */}
                <div className="flex items-center justify-center mt-4">
                    <div className="flex items-center space-x-4">
                        {/* Current Step */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 bg-blue-500 border-blue-500 text-white shadow-lg">
                                <span className="text-sm font-bold">{currentStep + 1}</span>
                            </div>
                            <span className="text-xs text-gray-600 mt-1 text-center max-w-20">
                                {uploadSteps[currentStep].title}
                            </span>
                        </div>
                        
                        {/* Arrow */}
                        {currentStep < uploadSteps.length - 1 && (
                            <div className="flex flex-col items-center">
                                <ChevronRight className="h-6 w-6 text-blue-500" />
                                <span className="text-xs text-gray-400 mt-1">Next</span>
                            </div>
                        )}
                        
                        {/* Next Step */}
                        {currentStep < uploadSteps.length - 1 && (
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-gray-100 text-gray-500">
                                    <span className="text-sm font-bold">{currentStep + 2}</span>
                                </div>
                                <span className="text-xs text-gray-600 mt-1 text-center max-w-20">
                                    {uploadSteps[currentStep + 1].title}
                                </span>
                            </div>
                        )}
                    </div>
                    
                    {/* Step Counter - Removed since it's now in the header */}
                </div>
                </div>
    
                {/* Wizard Content */}
                <div className="p-4">
                <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Step {uploadSteps[currentStep].id}: {uploadSteps[currentStep].title}
                    </h4>
                    <p className="text-gray-600">{uploadSteps[currentStep].description}</p>
                    {uploadSteps[currentStep].required && (
                    <div className="flex items-center mt-2 p-2 bg-orange-50 border border-orange-200 rounded-lg">
                        <AlertCircle className="h-4 w-4 mr-2 text-orange-600" />
                        <span className="text-orange-700 font-medium text-sm">Required documents for application</span>
                    </div>
                    )}
                </div>
    
                {/* Document Upload Areas */}
                <div className="mb-6">
                    {uploadSteps[currentStep].documentTypes.length > 1 ? (
                        // Multiple document types in one step (like language tests)
                        <div className="space-y-4">
                            {uploadSteps[currentStep].documentTypes.map((docType:any) => {
                            const fileData = getCurrentStepFiles().find((f:any) => f.type === docType);
                            const hasFile = fileData?.file || fileData?.uploaded; // Check for file OR uploaded status
                            const progress = fileData?.progress || 0;
                            const isDragOver = dragOver === docType;
            
                            return (
                                <div 
                                key={docType} 
                                className={`relative border-2 rounded-xl p-4 transition-all duration-300 ease-in-out ${
                                    isDragOver 
                                    ? 'border-blue-500 bg-blue-50 scale-105' 
                                    : hasFile 
                                        ? 'border-green-200 bg-green-50' 
                                        : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
                                }`}
                                onDragOver={(e) => handleDragOver(e, docType)}
                                onDragLeave={handleDragLeave}
                                onDrop={(e) => handleDrop(e, docType)}
                                >
                                <div className="flex items-center justify-between mb-3">
                                    <h5 className="font-semibold text-gray-900">{docType}</h5>
                                </div>
                                
                                {hasFile ? (
                                    <div className="space-y-3">
                                    <div className="flex items-center space-x-3 p-2 bg-white rounded-lg border">
                                        <div className="p-1 bg-blue-100 rounded-lg">
                                            <FileText className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                            {fileData.file
                                            ? fileData.file.name
                                            : fileData.fileUrl
                                                ? fileData.fileUrl.split('/').pop()
                                                : 'Already uploaded'}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {fileData.file
                                            ? `${(fileData.file.size / 1024 / 1024).toFixed(2)} MB`
                                            : 'Already uploaded'}
                                        </p>
                                        {fileData.uploaded && fileData.fileUrl && (
                                            <a href={fileData.fileUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 underline">View</a>
                                        )}
                                        </div>
                                        {fileData.uploaded && (
                                        <Check className="h-5 w-5 text-green-600" />
                                        )}
                                        <label className="ml-2 cursor-pointer" title="Change file">
                                        <Edit3 className="h-5 w-5 text-gray-500 hover:text-blue-500" />
                                        <input
                                            type="file"
                                            accept=".pdf"
                                            onChange={(e) => handleWizardFileUpload(e, docType)}
                                            className="hidden"
                                        />
                                        </label>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Upload Progress</span>
                                        <span className="text-gray-900 font-medium">{progress}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <div 
                                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out shadow-sm"
                                            style={{ width: `${progress}%` }}
                                        />
                                        </div>
                                        {progress === 100 && (
                                        <div className="flex items-center text-green-600 text-sm">
                                            <Check className="h-4 w-4 mr-1" />
                                            Upload Complete
                                        </div>
                                        )}
                                    </div>
                                    
                                    {/* Status Badge for Multiple Documents */}
                                    {fileData.uploaded && (
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm font-medium text-gray-700">
                                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                                    documents.find((doc:any) => doc.documentType === docType)?.status === 'verified' 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : documents.find((doc:any) => doc.documentType === docType)?.status === 'rejected'
                                                        ? 'bg-red-100 text-red-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                    {documents.find((doc:any) => doc.documentType === docType)?.status || 'pending'}
                                                </span>
                                            </span>
                                        </div>
                                    )}
                                    
                                    </div>
                                ) : (
                                    <label className={`block cursor-pointer transition-all duration-300 ${
                                    isDragOver ? 'scale-105' : 'hover:scale-102'
                                    }`}>
                                    <div className={`border-2 border-dashed rounded-lg p-4 text-center transition-all duration-300 ${
                                        isDragOver 
                                        ? 'border-blue-500 bg-blue-50' 
                                        : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                                    }`}>
                                        <div className="mb-2">
                                        <Upload className={`h-8 w-8 mx-auto transition-colors duration-300 ${
                                            isDragOver ? 'text-blue-500' : 'text-gray-400'
                                        }`} />
                                        </div>
                                        <p className="font-medium text-gray-900 mb-1">
                                        {isDragOver ? 'Drop your file here' : `Upload ${docType}`}
                                        </p>
                                        <p className="text-xs text-gray-500 mb-2">
                                        Drag and drop your file here, or click to browse
                                        </p>
                                        <div className="text-xs text-gray-400 space-y-1">
                                        <p>Supported format: PDF only</p>
                                        <p>Maximum file size: 5MB</p>
                                        </div>
                                        <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={(e) => handleWizardFileUpload(e, docType)}
                                        className="hidden"
                                        />
                                    </div>
                                    </label>
                                )}
                                </div>
                            );
                            })}
                        </div>
                    ) : (
                        // Single document type per step
                        uploadSteps[currentStep].documentTypes.map((docType:any) => {
                        const fileData = getCurrentStepFiles().find((f:any) => f.type === docType);
                        const hasFile = fileData?.file || fileData?.uploaded; // Check for file OR uploaded status
                        const progress = fileData?.progress || 0;
                        const isDragOver = dragOver === docType;
        
                        return (
                            <div 
                            key={docType} 
                            className={`relative border-2 rounded-xl p-6 transition-all duration-300 ease-in-out ${
                                isDragOver 
                                ? 'border-blue-500 bg-blue-50 scale-105' 
                                : hasFile 
                                    ? 'border-green-200 bg-green-50' 
                                    : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
                            }`}
                            onDragOver={(e) => handleDragOver(e, docType)}
                            onDragLeave={handleDragLeave}
                            onDrop={(e) => handleDrop(e, docType)}
                            >
                            <div className="flex items-center justify-between mb-4">
                                <h5 className="text-lg font-semibold text-gray-900">{docType}</h5>
                            </div>
                            
                            {hasFile ? (
                                <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                    <FileText className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                    <p className="text-base font-medium text-gray-900 truncate">
                                        {fileData.file
                                        ? fileData.file.name
                                        : fileData.fileUrl
                                            ? fileData.fileUrl.split('/').pop()
                                            : 'Already uploaded'}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {fileData.file
                                        ? `${(fileData.file.size / 1024 / 1024).toFixed(2)} MB`
                                        : 'Already uploaded'}
                                    </p>
                                    {fileData.uploaded && fileData.fileUrl && (
                                        <a href={fileData.fileUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 underline">View Document</a>
                                    )}
                                    </div>
                                    {fileData.uploaded && (
                                    <Check className="h-6 w-6 text-green-600" />
                                    )}
                                    <label className="ml-2 cursor-pointer" title="Change file">
                                    <Edit3 className="h-6 w-6 text-gray-500 hover:text-blue-500" />
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={(e) => handleWizardFileUpload(e, docType)}
                                        className="hidden"
                                    />
                                    </label>
                                </div>
                                
                                {/* Status Badge */}
                                {fileData.uploaded && (
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-sm font-medium text-gray-700">
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                                documents.find((doc:any) => doc.documentType === docType)?.status === 'verified' 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : documents.find((doc:any) => doc.documentType === docType)?.status === 'rejected'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {documents.find((doc:any) => doc.documentType === docType)?.status || 'pending'}
                                            </span>
                                        </span>
                                    </div>
                                )}
                                
                                <div className="space-y-3">
                                    <div className="flex justify-between text-base">
                                    <span className="text-gray-600 font-medium">Upload Progress</span>
                                    <span className="text-gray-900 font-bold">{progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                    <div 
                                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
                                        style={{ width: `${progress}%` }}
                                    />
                                    </div>
                                    {progress === 100 && (
                                    <div className="flex items-center text-green-600 text-base font-medium">
                                        <Check className="h-5 w-5 mr-2" />
                                        Upload Complete
                                    </div>
                                    )}
                                </div>
                                </div>
                            ) : (
                                <label className={`block cursor-pointer transition-all duration-300 ${
                                isDragOver ? 'scale-105' : 'hover:scale-102'
                                }`}>
                                <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                                    isDragOver 
                                    ? 'border-blue-500' 
                                    : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                                }`}>
                                    <div className="mb-4">
                                    <Upload className={`h-16 w-16 mx-auto transition-colors duration-300 ${
                                        isDragOver ? 'text-blue-500' : 'text-gray-400'
                                    }`} />
                                    </div>
                                    <p className="text-xl font-medium text-gray-900 mb-2">
                                        {isDragOver ? 'Drop your file here' : `Upload ${docType}`}
                                    </p>
                                    <p className="text-base text-gray-500 mb-4">
                                        Drag and drop your file here, or click to browse
                                    </p>
                                    <div className="text-sm text-gray-400 space-y-1">
                                    <p>Supported format: PDF only</p>
                                    <p>Maximum file size: 5MB</p>
                                    </div>
                                    <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={(e) => handleWizardFileUpload(e, docType)}
                                    className="hidden"
                                    />
                                </div>
                                </label>
                            )}
                            </div>
                        );
                        })
                    )}
                </div>
    
                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 py-2 border border-gray-300 rounded-lg text-gray-700 bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                    </button>
                    
                    <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                        Step {currentStep + 1} of {uploadSteps.length}
                    </span>
                    
                    {currentStep === uploadSteps.length - 1 ? (
                        <button
                        onClick={finishUpload}
                        className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                        <Check className="h-4 w-4" />
                        Finish Upload
                        </button>
                    ) : (
                        <button
                        onClick={nextStep}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                        Next
                        <ChevronRight className="h-4 w-4" />
                        </button>
                    )}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default UploadWizardPage;