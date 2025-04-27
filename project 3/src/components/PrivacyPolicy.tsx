import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-purple-50 pb-20">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 p-6 z-50">
        <button
          onClick={() => navigate('/')}
          className="bg-white/80 backdrop-blur-sm text-gray-600 px-6 py-2 rounded-full hover:shadow-lg transition duration-300 flex items-center group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          <span className="ml-2">Back to Home</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="mb-6">
            We value your ("User," "You," or "Your") privacy and recognize the sensitivity of your personal information. 
            We are committed to protecting your personal information and using it only as appropriate to provide you with 
            the best possible service, products, and opportunities, as described in this Privacy Policy.
          </p>

          <p className="mb-6">
            This Privacy Policy explains the online information practices of Teal Canoe Holdings Limited 
            (collectively, "Company," "Teal Canoe," "we," "us," or "our") which hosts the website of 
            http://www.tealcanoe.com/. We think it is important to explain what information We collect, 
            what We do with it and to describe the rights you will have with respect to the data.
          </p>

          <p className="mb-6">The controller of your personal information is Teal Canoe.</p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">I. What Information We Collect and How It Is Used</h2>
            <p className="mb-4">
              We may collect and hold personal information related to you that is necessary for the purpose 
              of conducting our business, including (without limitation) to deliver products, services or 
              information, improve our services to offer better experience, and to fulfill our regulatory 
              obligations.
            </p>
            <h3 className="text-xl font-semibold mb-2">Cookies</h3>
            <p>
              Cookies are small files which, when placed on your device, enable the Platform to provide 
              certain features and functionality. We and our service providers use cookies to automatically 
              collect information, measure and analyze which pages you click on, improve our services.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">II. How Information Is Used</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-2">Purpose</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>To provide support and to respond to your requests and enquiries</li>
                <li>To respond to law enforcement organization, or other government officials</li>
                <li>The day to day running and management of the business</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">III. Data Retention</h2>
            <p>
              We retain your personal information for as long as it is necessary and relevant for our business. 
              The criteria used to determine the retention periods include: (i) how long the personal information 
              is needed to provide the services and operate the business; (ii) the type of personal information 
              collected; and (iii) whether we are subject to a legal, contractual or similar obligation.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">IV. Data Rights</h2>
            <p>
              You have the right (subject to certain limitations) to:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Request access to personal information we hold about you</li>
              <li>The correction of your personal information when incorrect, out of date or incomplete</li>
              <li>Request that we delete your personal information</li>
              <li>Opt-out of any marketing communications</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">V. Security</h2>
            <p>
              We maintain security standards and procedures designed to prevent unauthorized access to your data 
              by anyone. However, no information security defenses are impenetrable, and we cannot guarantee 
              the security of our applications, servers or databases.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">VI. Children's Privacy</h2>
            <p>
              We do not knowingly collect personal information from children under the age of 16, and in the 
              event that we learn that a child under the age of 16 has provided information on the Application, 
              we will delete that information as soon as possible.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">VII. Changes</h2>
            <p>
              This Privacy Policy sets out our current policies and demonstrates our commitment to your privacy. 
              We may change our Privacy Policy at any time in the future. Whenever we make changes to this 
              Privacy Policy, we will post the updated Privacy Policy at this link.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">VIII. Contact Us</h2>
            <p>
              If you have any queries regarding privacy issues or if you wish to exercise your data rights as 
              described above, email us @ contact@tealcanoe.com
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-4 text-gray-600 text-sm">
            <span>&copy; 2025 Teal Canoe Holdings Limited. All rights reserved.</span>
            <span className="text-gray-300">|</span>
            <Link to="/privacy-policy" className="hover:text-teal-600 transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/terms-of-service" className="hover:text-teal-600 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;