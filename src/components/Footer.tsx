import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Mail as MailIcon } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// Type assertion for FontAwesome icons
const FacebookIcon = FaFacebookF as React.ComponentType<{ className?: string }>;
const InstagramIcon = FaInstagram as React.ComponentType<{ className?: string }>;
const YoutubeIcon = FaYoutube as React.ComponentType<{ className?: string }>;
const PinterestIcon = FaPinterestP as React.ComponentType<{ className?: string }>;
const TwitterIcon = FaTwitter as React.ComponentType<{ className?: string }>;
const LinkedinIcon = FaLinkedinIn as React.ComponentType<{ className?: string }>;

const Footer: React.FC = () => {
  return (
    <footer className="bg-myura-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-myura-green-800 font-bold text-sm">M</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-myura-green-400 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">MYURA</h3>
                <p className="text-sm text-myura-green-200">Wellness That Radiates From Within</p>
              </div>
            </div>

            <p className="text-sm text-myura-green-200 leading-relaxed">
              Ayurvedic wellness made simple. Myura offers honest, natural supplements for daily vitality, balance, and better living—no shortcuts, just nature.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <FacebookIcon className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                <InstagramIcon className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <YoutubeIcon className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
                <PinterestIcon className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <TwitterIcon className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                <LinkedinIcon className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <MailIcon className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Our Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Links</h3>
            <ul className="space-y-2">
              <li><Link to="/faqs" className="text-sm text-myura-green-200 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-myura-green-200 hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-myura-green-200 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/brand-directory" className="text-sm text-myura-green-200 hover:text-white transition-colors">Brand Directory</Link></li>
              <li><Link to="/returns-policy" className="text-sm text-myura-green-200 hover:text-white transition-colors">Returns Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-sm text-myura-green-200 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Accounts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accounts</h3>
            <ul className="space-y-2">
              <li><Link to="/cart" className="text-sm text-myura-green-200 hover:text-white transition-colors">Cart</Link></li>
              <li><Link to="/checkout" className="text-sm text-myura-green-200 hover:text-white transition-colors">Checkout</Link></li>
              <li><Link to="/my-account" className="text-sm text-myura-green-200 hover:text-white transition-colors">My Account</Link></li>
              <li><Link to="/order-tracking" className="text-sm text-myura-green-200 hover:text-white transition-colors">Order Tracking</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-myura-green-200" />
                <span className="text-sm text-myura-green-200">+91 9133 001 177</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-myura-green-200" />
                <span className="text-sm text-myura-green-200">care@myurawellness.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-myura-green-200" />
                <span className="text-sm text-myura-green-200">Punjabi Colony, Julana, Haryana 126101</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-myura-green-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-myura-green-200 mb-2 sm:mb-0">
              © {new Date().getFullYear()} Myura Wellness. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-white text-sm font-semibold">VISA</div>
              <div className="text-white text-sm font-semibold">Mastercard</div>
              <div className="text-white text-sm font-semibold">PayPal</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

