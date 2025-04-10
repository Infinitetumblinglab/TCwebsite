import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal = ({ isOpen, onClose }: EmailModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              Join Our Waitlist
            </h2>
            <p className="text-gray-600 mb-6">
              Leave your email to be among the first to try our product. We'll notify you the moment it launches!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="inline-block p-2 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 mb-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              Thank you!
            </h3>
            <p className="text-gray-600">
              We'll be in touch soon with exciting updates about our launch.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailModal;