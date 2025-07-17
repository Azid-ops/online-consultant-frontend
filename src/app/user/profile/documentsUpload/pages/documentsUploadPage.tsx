'use client'

import { Upload, Award, ChevronLeft } from "lucide-react";
import UploadWizard from "../../uploadWizard/components/uploadWizard";
import { DocumentsUploadPageProps } from "../interface";

const DocumentsUploadPage = ({showUploadWizard, openWizard, documents, removeDocumentHandler, setShowUploadWizard}: DocumentsUploadPageProps) => {
    return(
        !showUploadWizard ? (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload Documents
              </h2>
              {!showUploadWizard && (
                <button
                  onClick={openWizard}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Start Upload Wizard
                </button>
              )}
            </div>
          </div>
          {/* Document List */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Uploaded Documents
            </h2>
            <div className="space-y-4">
              {documents.length === 0 ? (
                <p className="text-sm text-gray-500">No documents uploaded yet.</p>
              ) : (
                documents.map((doc: any) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-medium text-gray-900">{doc.documentType}</p>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          doc.status === 'verified'
                            ? 'bg-green-100 text-green-800'
                            : doc.status === 'rejected'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {doc.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Verified: {doc.isVerified ? 'Yes' : 'No'}</span>
                        <span>Uploaded: {new Date(doc.createdAt!).toLocaleDateString()}</span>
                      </div>
                      {doc.filePath && (
                        <a
                          href={doc.filePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 underline hover:text-blue-800 mt-1 inline-block"
                        >
                          View Document
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => removeDocumentHandler(doc.id!)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md text-xs hover:bg-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
          {/* Back Button */}
          <div className="flex justify-start">
            <button
              className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>
          </div>
      </div>):(
        <UploadWizard setShowUploadWizard={setShowUploadWizard}/>
      )
    )
}

export default DocumentsUploadPage;
