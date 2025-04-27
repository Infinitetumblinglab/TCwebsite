import React from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 p-[1px] rounded-2xl max-w-md w-full mx-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">Feel free to reach out to us at:</p>
            <p className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-6">
              contact@tealcanoe.com
            </p>
            <p className="text-gray-600">
              We are here to help and will respond to your inquiry as soon as possible!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;