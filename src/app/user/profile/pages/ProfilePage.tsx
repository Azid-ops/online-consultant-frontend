'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { 
  User, 
  Camera, 
  Calendar, 
  GraduationCap, 
  Award, 
  Save, 
  Edit3,
  Upload,
  X,
  Clock,
  ChevronRight,
  ChevronLeft,
  Check,
  FileText,
  AlertCircle
} from 'lucide-react';
import ProfileUpload from '../profileUpload/components/profileUpload';
import DocumentsUpload from '../documentsUpload/components/documentsUpload';
import { ProfileData } from '../interface';

const ProfilePage = ({profileData, setProfileData, mainStep, setMainStep, formCompletion, loading}: ProfileData) => {
  // Stepper UI with dynamic progress
  const Stepper = () => (
    <div className="flex items-center justify-center mb-8 min-h-[80px]">
      <div className="flex items-center gap-0 md:gap-4">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-500 ease-in-out relative z-10
            ${mainStep === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-400 border-blue-500 text-white shadow-xl scale-110' : 'bg-gray-100 border-gray-300 text-gray-400'}
          `}>
            <User className={`h-6 w-6 ${mainStep === 0 ? 'text-white' : 'text-gray-400'}`} />
            {mainStep === 0 && formCompletion === 100 && (
              <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                <Check className="h-3 w-3" />
              </div>
            )}
          </div>
          <span className={`mt-2 text-xs font-semibold tracking-wide uppercase ${mainStep === 0 ? 'text-blue-600' : 'text-gray-400'}`}>Profile Info</span>
          {mainStep === 0 && (
            <span className={`text-xs mt-1 font-medium transition-colors duration-300 ${
              formCompletion === 100 ? 'text-green-600' : 
              formCompletion >= 75 ? 'text-blue-600' : 
              formCompletion >= 50 ? 'text-yellow-600' : 
              'text-gray-500'
            }`}>
              {formCompletion}% Complete
            </span>
          )}
        </div>
        <div className="relative w-16 md:w-24 h-1 mx-2">
          <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
          <div 
            className={`absolute inset-0 rounded-full transition-all duration-700 ease-in-out
              ${mainStep === 1 ? 'bg-gradient-to-r from-blue-400 to-green-400' : 
                formCompletion === 100 ? 'bg-gradient-to-r from-blue-400 to-green-400' :
                'bg-blue-400'}`}
            style={{ 
              width: mainStep === 1 
                ? '100%' 
                : mainStep === 0 
                  ? `${formCompletion}%` 
                  : '0%' 
            }}
          />
          {mainStep === 0 && formCompletion > 0 && formCompletion < 100 && (
            <div className="absolute -top-1 right-0 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          )}
        </div>
        <div className="flex flex-col items-center">
          <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-500 ease-in-out relative z-10
            ${mainStep === 1 ? 'bg-gradient-to-br from-green-500 to-green-400 border-green-500 text-white shadow-xl scale-110' : 'bg-gray-100 border-gray-300 text-gray-400'}
          `}>
            <Upload className={`h-6 w-6 ${mainStep === 1 ? 'text-white' : 'text-gray-400'}`} />
          </div>
          <span className={`mt-2 text-xs font-semibold tracking-wide uppercase ${mainStep === 1 ? 'text-green-600' : 'text-gray-400'}`}>Upload Documents</span>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-6">
      <Stepper />
      {
        mainStep === 0 ? (
          <ProfileUpload 
            mainStep={mainStep} 
            setMainStep={setMainStep} 
            onProfileDataChange={setProfileData}
            formCompletion={formCompletion}
          />
        ) : (
            <DocumentsUpload />
        )
      }
    </div>
  );
};

export default ProfilePage;