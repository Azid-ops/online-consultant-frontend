'use client'

import { ChevronRightIcon } from "@/components/ui/icons/ChevronRightIcon";
import { SaveIcon } from "@/components/ui/icons/SaveIcon";
import { AwardIcon } from "@/components/ui/icons/AwardIcon";
import { CameraIcon } from "@/components/ui/icons/CameraIcon";
import { Edit3Icon } from "@/components/ui/icons/Edit3Icon";
import { GraduationCapIcon } from "@/components/ui/icons/GraduationCapIcon";
import { UserIcon } from "@/components/ui/icons/UserIcon";
import { XIcon } from "@/components/ui/icons/XIcon";

import { ProfileUploadPageProps, ProfileData } from "../interface";
import { RefreshCwIcon } from "lucide-react";

const ProfileUploadPage = (
  {
    isEditing,
    setIsEditing,
    imagePreview,
    handleImageUpload,
    handleSave,
    profile,
    setProfile,
    educationLevels,
    handleIdCardChange,
    mainStep,
    setMainStep,
    reduxUser,
    loading,
    uploadProfileData,
    syncProfileData,
    formCompletion,
    imageUploading
  }: ProfileUploadPageProps
) => {
    return(
        <div>
            {mainStep === 0 && (
              <div className="space-y-6">
              {/* Header with Edit Profile button, fixed height to prevent layout shift */}
              <div className="flex items-center justify-between mb-6 min-h-[72px]">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">Profile</h1>
                  <p className="text-xl text-gray-600">Manage your personal information and preferences</p>
                </div>
                <div className="flex gap-2">
                <button
                  className="group flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  onClick={syncProfileData}
                >
                  <RefreshCwIcon className="h-4 w-4 transition-transform duration-500 group-hover:animate-spin" />
                  Sync Data
                </button>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {isEditing ? <XIcon className="h-4 w-4" /> : <Edit3Icon className="h-4 w-4" />}
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>
              </div>
              {/* Profile Picture Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  Profile Picture
                </h2>
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      {imageUploading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        </div>
                      ) : imagePreview ? (
                        <img 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                          src={imagePreview}
                          onError={(e) => {
                            console.error("Image failed to load:", e);
                          }}
                        />
                      ) : profile?.imageLink ? (
                        <img 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                          src={profile.imageLink}
                          onError={(e) => {
                            console.error("Image failed to load:", e);
                          }}
                        />
                      ) : (
                        <UserIcon className="h-12 w-12 text-gray-400" />
                      )}
                    </div>
                    {isEditing && !imageUploading && (
                      <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full cursor-pointer hover:bg-blue-600">
                        <CameraIcon className="h-4 w-4" />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{reduxUser?.email}</h3>
                    <p className="text-sm text-gray-500">Student</p>
                    {profile.id && (
                      <p className="text-xs text-gray-400">
                        Last Updated: {profile.updatedAt ? new Date(profile.updatedAt).toLocaleString(undefined, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        }) : 'N/A'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* Personal Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={profile?.dob || ''}
                      onChange={(e) => {
                        const currentDate = new Date();
                        const selectedDate = new Date(e.target.value);
                        if (selectedDate > currentDate) {
                          alert('Date of birth cannot be in the future');
                          return;
                        } 
                        else {
                          const age = currentDate.getFullYear() - selectedDate.getFullYear();
                          if (age < 18) {
                            alert('You must be at least 18 years old to use this service');
                            return;
                          }
                          setProfile('dob', e.target.value)
                        }
                      }}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Application Attempts
                    </label>
                    <div className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 font-medium">
                      {profile?.totalAttempts || 0}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      This value can only be modified by administrators
                    </p>
                  </div>
                </div>
              </div>
              {/* Education Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <GraduationCapIcon className="h-5 w-5 mr-2" />
                  Education Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Education Level
                    </label>
                    <select
                      value={profile?.educationLevel || ''}
                      onChange={(e) => setProfile('educationLevel', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                    >
                      <option value="">Select Education Level</option>
                      {educationLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      IELTS Bands
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      max="9"
                      value={profile?.ieltsBands || ''}
                      onChange={(e) => setProfile('ieltsBands', parseFloat(e.target.value) || undefined)}
                      disabled={!isEditing}
                      placeholder="e.g., 7.5"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                </div>
              </div>
              {/* ID Card Number */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AwardIcon className="h-5 w-5 mr-2" />
                  ID Card Number
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ID Card / Passport Number
                    </label>
                    <input
                      type="text"
                      value={profile?.idCard || ''}
                      onChange={handleIdCardChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 font-mono text-lg tracking-wider focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 transition-all duration-200"
                      placeholder="XXXXX-XXXXXXX-X"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Format: XXXXX-XXXXXXX-X (letters and numbers only)
                    </p>
                  </div>
                </div>
              </div>
              {/* Save/Next Button */}
              <div className="flex justify-end">
                {isEditing ? (
                  <button
                    onClick={formCompletion === 100 ? handleSave : () => {}}
                    disabled={loading || formCompletion !== 100}
                    className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
                  >
                    <SaveIcon className="h-4 w-4" />
                    {loading ? 'Saving...' : formCompletion === 100 ? 'Save Changes' : 'Complete Profile First'}
                  </button>
                ) : (
                  <button
                    onClick={uploadProfileData}
                    disabled={!profile?.id}
                    className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                  >
                    {formCompletion === 100 ? 'Continue to Next Step' : 'Complete Profile First'}
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            )}
        </div>
    )
}

export default ProfileUploadPage;
