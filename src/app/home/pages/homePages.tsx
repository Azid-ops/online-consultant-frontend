'use client';

import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Direct Access to
                            <span className="text-blue-600 block">Global Universities</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Connect directly with universities worldwide. Apply, track, and manage your international education journey without intermediaries.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/dashboard">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                                    Start Application
                                </button>
                            </Link>
                            <Link href="#services">
                                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                                    Explore Universities
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
                            <div className="text-gray-600">Universities</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
                            <div className="text-gray-600">Countries</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10,000+</div>
                            <div className="text-gray-600">Applications</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24/7</div>
                            <div className="text-gray-600">Access</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Direct University Access?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Skip the middleman and connect directly with universities worldwide
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300 bg-white">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Communication</h3>
                            <p className="text-gray-600">Connect directly with university admissions teams</p>
                        </div>
                        
                        <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300 bg-white">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
                            <p className="text-gray-600">Save money by eliminating consultant fees</p>
                        </div>
                        
                        <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300 bg-white">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Updates</h3>
                            <p className="text-gray-600">Track your application status instantly</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Platform Features
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Everything you need to apply directly to universities worldwide
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">University Directory</h3>
                            <p className="text-gray-600 text-sm">Browse and compare universities worldwide</p>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Portal</h3>
                            <p className="text-gray-600 text-sm">Submit applications directly to universities</p>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Status Tracking</h3>
                            <p className="text-gray-600 text-sm">Monitor your application progress in real-time</p>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Messaging</h3>
                            <p className="text-gray-600 text-sm">Communicate directly with university staff</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Simple steps to apply directly to your dream university
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Profile</h3>
                            <p className="text-gray-600">Set up your account and academic profile</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Universities</h3>
                            <p className="text-gray-600">Browse and select your preferred institutions</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply Directly</h3>
                            <p className="text-gray-600">Submit applications through our platform</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                4
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Progress</h3>
                            <p className="text-gray-600">Monitor your application status in real-time</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Universities Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Featured Universities
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Top universities from around the world available on our platform
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-blue-600 font-bold text-lg">U</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">University of Toronto</h3>
                            <p className="text-gray-600 text-sm mb-3">Canada</p>
                            <div className="text-xs text-gray-500">
                                QS Ranking: #21 | Acceptance Rate: 43%
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-green-600 font-bold text-lg">I</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Imperial College London</h3>
                            <p className="text-gray-600 text-sm mb-3">United Kingdom</p>
                            <div className="text-xs text-gray-500">
                                QS Ranking: #6 | Acceptance Rate: 14%
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-purple-600 font-bold text-lg">M</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">University of Melbourne</h3>
                            <p className="text-gray-600 text-sm mb-3">Australia</p>
                            <div className="text-xs text-gray-500">
                                QS Ranking: #14 | Acceptance Rate: 70%
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-orange-600 font-bold text-lg">S</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Stanford University</h3>
                            <p className="text-gray-600 text-sm mb-3">United States</p>
                            <div className="text-xs text-gray-500">
                                QS Ranking: #3 | Acceptance Rate: 4%
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Timeline Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Application Timeline
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Typical timeline for international university applications
                        </p>
                    </div>
                    
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
                        <div className="space-y-8">
                            <div className="flex items-center">
                                <div className="hidden md:block w-1/2 pr-8 text-right">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Research & Planning</h3>
                                    <p className="text-gray-600">Research universities, programs, and requirements</p>
                                    <p className="text-sm text-gray-500 mt-2">Months 1-2</p>
                                </div>
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 mx-auto md:mx-0">
                                    1
                                </div>
                                <div className="md:hidden w-full pl-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Research & Planning</h3>
                                    <p className="text-gray-600">Research universities, programs, and requirements</p>
                                    <p className="text-sm text-gray-500 mt-2">Months 1-2</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="md:hidden w-full pr-8 text-right">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Preparation</h3>
                                    <p className="text-gray-600">Prepare transcripts, test scores, and essays</p>
                                    <p className="text-sm text-gray-500 mt-2">Months 2-3</p>
                                </div>
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 mx-auto md:ml-auto">
                                    2
                                </div>
                                <div className="hidden md:block w-1/2 pl-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Preparation</h3>
                                    <p className="text-gray-600">Prepare transcripts, test scores, and essays</p>
                                    <p className="text-sm text-gray-500 mt-2">Months 2-3</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="hidden md:block w-1/2 pr-8 text-right">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Submission</h3>
                                    <p className="text-gray-600">Submit applications through our platform</p>
                                    <p className="text-sm text-gray-500 mt-2">Months 3-4</p>
                                </div>
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 mx-auto md:mx-0">
                                    3
                                </div>
                                <div className="md:hidden w-full pl-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Submission</h3>
                                    <p className="text-gray-600">Submit applications through our platform</p>
                                    <p className="text-sm text-gray-500 mt-2">Months 3-4</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="md:hidden w-full pr-8 text-right">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Decision & Visa</h3>
                                    <p className="text-gray-600">Receive decisions and apply for student visa</p>
                                    <p className="text-sm text-gray-500 mt-2">Months 5-6</p>
                                </div>
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 mx-auto md:ml-auto">
                                    4
                                </div>
                                <div className="hidden md:block w-1/2 pl-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Decision & Visa</h3>
                                    <p className="text-gray-600">Receive decisions and apply for student visa</p>
                                    <p className="text-sm text-gray-500 mt-2">Months 5-6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Metrics Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Platform Success Metrics
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            See how our platform is helping students achieve their dreams
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Success Rate</h3>
                            <p className="text-gray-600">Students who get accepted to at least one university</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">$2,500</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Average Savings</h3>
                            <p className="text-gray-600">Money saved by avoiding consultant fees</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">3.2</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Average Applications</h3>
                            <p className="text-gray-600">Applications submitted per student</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg text-center">
                            <div className="text-4xl font-bold text-orange-600 mb-2">15 Days</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Average Response Time</h3>
                            <p className="text-gray-600">Time to get response from universities</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg text-center">
                            <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Satisfaction</h3>
                            <p className="text-gray-600">Students who recommend our platform</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-lg text-center">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Platform Availability</h3>
                            <p className="text-gray-600">Access your applications anytime, anywhere</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Direct Applications?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Compare the benefits of applying directly vs. using consultants
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">Direct Applications</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">No consultant fees</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Direct communication with universities</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Full control over your application</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Real-time application tracking</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">24/7 platform access</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">Traditional Consultants</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-gray-700">High consultant fees ($2,000-$5,000)</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-gray-700">Limited communication with universities</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-gray-700">No control over application process</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-gray-700">Delayed status updates</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-gray-700">Limited availability and support</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Student Success Stories
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Students who achieved their dreams through direct university applications
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-blue-600 font-semibold">S</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                                    <p className="text-sm text-gray-600">University of Toronto</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                &quot;Applied directly through the platform. The direct communication with the university made everything so much easier!&quot;
                            </p>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-green-600 font-semibold">M</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                                    <p className="text-sm text-gray-600">Imperial College London</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                &quot;Saved thousands by applying directly. The real-time tracking kept me updated throughout the process.&quot;
                            </p>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-purple-600 font-semibold">A</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Aisha Patel</h4>
                                    <p className="text-sm text-gray-600">University of Melbourne</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                &quot;The direct messaging feature helped me get quick answers from the admissions team. Highly recommended!&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get answers to common questions about direct university applications
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                How is this different from using a consultant?
                            </h3>
                            <p className="text-gray-600">
                                You apply directly to universities without paying consultant fees. You have full control over your application and direct communication with universities.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                How long does the application process take?
                            </h3>
                            <p className="text-gray-600">
                                The timeline varies by university and program, but typically takes 3-6 months from start to finish.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                What countries do you work with?
                            </h3>
                            <p className="text-gray-600">
                                We work with universities in over 50 countries including the US, UK, Canada, Australia, and many more.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Is there a fee to use the platform?
                            </h3>
                            <p className="text-gray-600">
                                Our platform is free to use. You only pay the standard university application fees, saving you money on consultant costs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Apply Directly?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of students who saved money and time by applying directly to universities
                    </p>
                    <Link href="/dashboard">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                            Start Your Application
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default HomePage;
