import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
        Terms of Service
      </h1>
      
      <div className="prose prose-gray max-w-none">
        <div className="mb-8">
          <p className="mb-6">
            We are Teal Canoe Holdings Limited ("Company," "we," "us," "our"), a company registered in Hong Kong.
            We operate the website http://www.tealcanoe.com (the "Site"), as well as any other related products 
            and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          </p>

          <p className="mb-6">
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on 
            behalf of an entity ("you"), and Teal Canoe Holdings Limited, concerning your access to and use of 
            the Services. You agree that by accessing the Services, you have read, understood, and agreed to be 
            bound by all of these Legal Terms.
          </p>

          <p className="mb-6">
            IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING 
            THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Our Services</h2>
          <p className="mb-4">
            The information provided when using the Services is not intended for distribution to or use by any 
            person or entity in any jurisdiction or country where such distribution or use would be contrary to 
            law or regulation or which would subject us to any registration requirement within such jurisdiction 
            or country.
          </p>
          <p>
            The Services are not tailored to comply with industry-specific regulations (Health Insurance 
            Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), 
            etc.), so if your interactions would be subjected to such laws, you may not use the Services.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
          <h3 className="text-xl font-semibold mb-2">Our intellectual property</h3>
          <p className="mb-4">
            We are the owner or the licensee of all intellectual property rights in our Services, including 
            all source code, databases, functionality, software, website designs, audio, video, text, 
            photographs, and graphics in the Services (collectively, the "Content"), as well as the 
            trademarks, service marks, and logos contained therein (the "Marks").
          </p>
          <p>
            The Content and Marks are provided in or through the Services "AS IS" for your personal, 
            non-commercial use or internal business purpose only.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Representations</h2>
          <p>By using the Services, you represent and warrant that:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>You have the legal capacity and you agree to comply with these Legal Terms</li>
            <li>You are not under the age of 13</li>
            <li>You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services</li>
            <li>You will not access the Services through automated or non-human means</li>
            <li>You will not use the Services for any illegal or unauthorized purpose</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Subscriptions</h2>
          <h3 className="text-xl font-semibold mb-2">Billing and Renewal</h3>
          <p className="mb-4">
            Your subscription will continue and automatically renew unless canceled. You consent to our 
            charging your payment method on a recurring basis without requiring your prior approval for 
            each recurring charge, until such time as you cancel the applicable order.
          </p>
          <h3 className="text-xl font-semibold mb-2">Cancellation</h3>
          <p>
            You can cancel your subscription at any time by logging into your account. Your cancellation 
            will take effect at the end of the current paid term.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Prohibited Activities</h2>
          <p className="mb-4">
            You may not access or use the Services for any purpose other than that for which we make 
            the Services available.
          </p>
          <p>As a user of the Services, you agree not to:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Systematically retrieve data or other content from the Services</li>
            <li>Trick, defraud, or mislead us and other users</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features</li>
            <li>Make improper use of our support services</li>
            <li>Use the Services in a manner inconsistent with any applicable laws or regulations</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
          <p>
            These Legal Terms and your use of the Services are governed by and construed in accordance 
            with the laws of the State of California applicable to agreements made and to be entirely 
            performed within the State of California, without regard to its conflict of law principles.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Services or to receive further information 
            regarding use of the Services, please contact us at: contact@tealcanoe.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;