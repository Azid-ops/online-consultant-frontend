'use client';

const FooterPage = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Online Consultant System</h3>
                        <p className="text-gray-400 text-sm">
                            Your trusted partner for international education guidance and support.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">Services</h4>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li>University Applications</li>
                            <li>Visa Assistance</li>
                            <li>Career Counseling</li>
                            <li>Test Preparation</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">Support</h4>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>Live Chat</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">Connect</h4>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 Online Consultant System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default FooterPage;
