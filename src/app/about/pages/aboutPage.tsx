'use client'

import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            About Our
                            <span className="text-blue-600 block">Mission</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            We&apos;re revolutionizing international education by connecting students directly with universities worldwide, eliminating barriers and reducing costs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Founded in 2020, our platform was born from a simple observation: international students were paying thousands of dollars to consultants for services they could handle themselves with the right tools and guidance.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                We saw an opportunity to democratize access to global education by creating a direct bridge between students and universities, eliminating the middleman while providing better transparency and control.
                            </p>
                            <p className="text-lg text-gray-600">
                                Today, we&apos;ve helped over 10,000 students save millions in consultant fees while achieving their dreams of studying abroad.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-lg">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">2020</div>
                                <div className="text-lg text-gray-700 mb-4">Founded</div>
                                <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
                                <div className="text-lg text-gray-700 mb-4">Students Helped</div>
                                <div className="text-4xl font-bold text-purple-600 mb-2">$25M+</div>
                                <div className="text-lg text-gray-700">Fees Saved</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Mission & Vision
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our commitment to transforming international education
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
                            <p className="text-gray-600 text-center">
                                To democratize access to international education by providing students with direct, transparent, and cost-effective pathways to universities worldwide, eliminating unnecessary intermediaries and reducing financial barriers.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
                            <p className="text-gray-600 text-center">
                                To become the world&apos;s leading platform for direct university applications, where every student has equal access to global educational opportunities regardless of their financial background or geographical location.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
                            <p className="text-gray-600">Complete visibility into the application process and costs</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
                            <p className="text-gray-600">Making international education accessible to all students</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                            <p className="text-gray-600">Continuously improving our platform and services</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Student-First</h3>
                            <p className="text-gray-600">Every decision we make prioritizes student success</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The passionate individuals behind our mission to transform international education
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg text-center shadow-md">
                            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-blue-600 font-bold text-2xl">S</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Chen</h3>
                            <p className="text-blue-600 font-medium mb-2">CEO & Founder</p>
                            <p className="text-gray-600 text-sm">
                                Former international student who experienced the challenges of applying abroad firsthand. Passionate about making education accessible to all.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg text-center shadow-md">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-green-600 font-bold text-2xl">M</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Rodriguez</h3>
                            <p className="text-green-600 font-medium mb-2">CTO</p>
                            <p className="text-gray-600 text-sm">
                                Technology leader with 15+ years experience in edtech. Built scalable platforms that have served millions of students worldwide.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg text-center shadow-md">
                            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-purple-600 font-bold text-2xl">A</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aisha Patel</h3>
                            <p className="text-purple-600 font-medium mb-2">Head of Partnerships</p>
                            <p className="text-gray-600 text-sm">
                                Former university admissions officer with deep understanding of international student recruitment and university partnerships.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg text-center shadow-md">
                            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-orange-600 font-bold text-2xl">D</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">David Kim</h3>
                            <p className="text-orange-600 font-medium mb-2">Head of Student Success</p>
                            <p className="text-gray-600 text-sm">
                                Education consultant turned platform advocate. Dedicated to ensuring every student has the support they need to succeed.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg text-center shadow-md">
                            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-red-600 font-bold text-2xl">L</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lisa Thompson</h3>
                            <p className="text-red-600 font-medium mb-2">Head of Marketing</p>
                            <p className="text-gray-600 text-sm">
                                Marketing expert with a passion for education. Believes in the power of storytelling to inspire and connect with students globally.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg text-center shadow-md">
                            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-indigo-600 font-bold text-2xl">J</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">James Wilson</h3>
                            <p className="text-indigo-600 font-medium mb-2">Head of Operations</p>
                            <p className="text-gray-600 text-sm">
                                Operations specialist focused on creating seamless experiences for both students and university partners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Achievements
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Milestones that demonstrate our impact on international education
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                            <div className="text-lg text-gray-700 mb-2">Partner Universities</div>
                            <div className="text-sm text-gray-500">Across 50+ countries</div>
                        </div>
                        
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
                            <div className="text-lg text-gray-700 mb-2">Students Helped</div>
                            <div className="text-sm text-gray-500">Successful applications</div>
                        </div>
                        
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">$25M+</div>
                            <div className="text-lg text-gray-700 mb-2">Fees Saved</div>
                            <div className="text-sm text-gray-500">By eliminating consultants</div>
                        </div>
                        
                        <div className="text-center">
                            <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
                            <div className="text-lg text-gray-700 mb-2">Satisfaction Rate</div>
                            <div className="text-sm text-gray-500">Student recommendations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Join Our Mission
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Be part of the revolution in international education. Apply directly to universities and save thousands in consultant fees.
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

export default AboutPage;