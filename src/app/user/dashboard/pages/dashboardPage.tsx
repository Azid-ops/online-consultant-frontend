'use client';
import Link from 'next/link';
import { AuthState } from '../interface/interface';
import { 
  User, 
  Mail, 
  Shield, 
  Home, 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle,
  Loader2
} from 'lucide-react';

const DashboardPage = ({user, loading, error}: AuthState) => {
    return(
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                Dashboard
                            </h1>
                            <p className="text-xl text-gray-600">
                                Welcome to your personal dashboard
                            </p>
                        </div>
                        <Link href="/">
                            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full">
                    {loading && (
                        <div className="bg-white rounded-lg shadow-md p-8 text-center">
                            <div className="flex items-center justify-center mb-4">
                                <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Loading your information...
                            </h3>
                            <p className="text-gray-600">
                                Please wait while we fetch your account details.
                            </p>
                        </div>
                    )}
                    
                    {error && (
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="flex items-center mb-4">
                                <AlertCircle className="h-8 w-8 text-red-500 mr-3" />
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Authentication Required
                                </h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                You need to sign in to access your dashboard and view your information.
                            </p>
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                                <p className="text-sm text-red-700">
                                    <strong>Error:</strong> {error.message}
                                </p>
                            </div>
                            <Link href="/">
                                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                                    Go to Login
                                </button>
                            </Link>
                        </div>
                    )}
                    
                    {user && (
                        <div className="space-y-6">
                            {/* Welcome Section */}
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md p-8 text-white">
                                <div className="flex items-center mb-4">
                                    <div className="bg-white/20 rounded-full p-3 mr-4">
                                        <User className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">
                                            Welcome back, {user.email}!
                                        </h2>
                                        <p className="text-blue-100">
                                            You are successfully authenticated and ready to explore universities.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* User Info Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Email Card */}
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-100 rounded-full p-2 mr-3">
                                            <Mail className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Email Address
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-2">Your registered email</p>
                                    <p className="text-gray-900 font-medium">{user?.username}</p>
                                </div>

                                {/* User ID Card */}
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-green-100 rounded-full p-2 mr-3">
                                            <Shield className="h-5 w-5 text-green-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            User ID
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-2">Your unique identifier</p>
                                    <p className="text-gray-900 font-medium font-mono text-sm">
                                        {user?.userId}
                                    </p>
                                </div>

                                {/* Verification Status */}
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-green-100 rounded-full p-2 mr-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Verification Status
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-2">Email verification</p>
                                    <div className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        <span className="text-green-600 font-medium">Verified</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Quick Actions
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Link href="/user/universties">
                                        <button className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center justify-center">
                                            <Home className="h-5 w-5 mr-2" />
                                            Browse Universities
                                        </button>
                                    </Link>
                                    <Link href="/">
                                        <button className="w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center">
                                            <ArrowLeft className="h-5 w-5 mr-2" />
                                            Back to Homepage
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Account Stats */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Account Overview
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">1</div>
                                        <div className="text-sm text-gray-600">Active Account</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600">✓</div>
                                        <div className="text-sm text-gray-600">Email Verified</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600">∞</div>
                                        <div className="text-sm text-gray-600">Universities Access</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-orange-600">24/7</div>
                                        <div className="text-sm text-gray-600">Support Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;