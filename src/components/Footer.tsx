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
    <footer className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-gray-800 overflow-hidden">
      {/* Soft Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8fafc' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Soft gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 via-transparent to-blue-100/20"></div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Brand Section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col items-start space-y-4">
                {/* MYURA Logo - Responsive styling */}
                <img 
                  src="/Logo-02.png" 
                  alt="MYURA Logo" 
                  className="w-36 sm:w-40 lg:w-44 h-auto object-contain filter drop-shadow-md brightness-0"
                />
              </div>

              <p className="text-gray-600 leading-relaxed text-sm font-medium text-left tracking-wide">
                Ayurvedic wellness made simple. Myura offers honest, natural supplements for daily vitality, balance, and better living—no shortcuts, just nature.
              </p>

              {/* Responsive Social Icons */}
              <div className="flex justify-start gap-3 overflow-x-auto sm:overflow-visible">
                {[
                  { Icon: FacebookIcon, color: 'from-blue-600 to-blue-700', hover: 'hover:from-blue-500 hover:to-blue-600' },
                  { Icon: InstagramIcon, color: 'from-pink-600 to-purple-700', hover: 'hover:from-pink-500 hover:to-purple-600' },
                  { Icon: YoutubeIcon, color: 'from-red-600 to-red-700', hover: 'hover:from-red-500 hover:to-red-600' },
                  { Icon: PinterestIcon, color: 'from-red-700 to-pink-700', hover: 'hover:from-red-600 hover:to-pink-600' },
                  { Icon: TwitterIcon, color: 'from-sky-500 to-blue-600', hover: 'hover:from-sky-400 hover:to-blue-500' },
                  { Icon: LinkedinIcon, color: 'from-blue-700 to-blue-800', hover: 'hover:from-blue-600 hover:to-blue-700' },
                  { Icon: MailIcon, color: 'from-slate-600 to-slate-700', hover: 'hover:from-slate-500 hover:to-slate-600' }
                ].map(({ Icon, color, hover }, index) => (
                  <div
                    key={index}
                    className={`w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br ${color} ${hover} rounded-lg sm:rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl group backdrop-blur-sm border border-white/10`}
                  >
                    <Icon className="h-2 w-2 sm:h-3 sm:w-3 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 mb-6 relative text-left tracking-tight">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { to: '/faqs', label: 'FAQs' },
                  { to: '/disclaimer', label: 'Disclaimer' },
                  { to: '/privacy-policy', label: 'Privacy Policy' },
                  { to: '/brand-directory', label: 'Brand Directory' },
                  { to: '/returns-policy', label: 'Returns Policy' },
                  { to: '/terms-conditions', label: 'Terms & Conditions' }
                ].map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="text-gray-600 hover:text-gray-800 transition-all duration-300 hover:translate-x-2 flex items-center group text-sm font-semibold justify-start tracking-wide"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Account Links */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 mb-6 relative text-left tracking-tight">
                My Account
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { to: '/cart', label: 'Shopping Cart' },
                  { to: '/checkout', label: 'Checkout' },
                  { to: '/my-account', label: 'My Account' },
                  { to: '/order-tracking', label: 'Order Tracking' },
                  { to: '/wishlist', label: 'Wishlist' },
                  { to: '/order-history', label: 'Order History' }
                ].map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="text-gray-600 hover:text-gray-800 transition-all duration-300 hover:translate-x-2 flex items-center group text-sm font-semibold justify-start tracking-wide"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 mb-6 relative text-left tracking-tight">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
              </h3>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-md sm:rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-lg">
                    <Phone className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Phone</p>
                    <a 
                      href="tel:+919133001177" 
                      className="text-gray-800 font-bold text-sm hover:text-pink-500 transition-colors duration-300 block tracking-wide"
                    >
                      +91 9133 001 177
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md sm:rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-lg">
                    <Mail className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Email</p>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=care@myurawellness.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 font-bold text-sm hover:text-pink-500 transition-colors duration-300 block break-all tracking-wide"
                    >
                      care@myurawellness.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-md sm:rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-lg">
                    <MapPin className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Address</p>
                    <a 
                      href="https://maps.app.goo.gl/N2uqs2bSe4VwZbRN6?g_st=ipc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 font-bold text-sm hover:text-pink-500 transition-colors duration-300 block leading-tight tracking-wide"
                    >
                      Plot No. 15C, IT Park, Sector 22, Panchkula, Haryana, 134109
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-300 bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-900 text-sm sm:text-base text-center lg:text-left font-semibold">
                © {new Date().getFullYear()} <span className="text-black font-bold">Myura Wellness</span> is a brand of <span className="text-blue-800 font-bold">JAC Nutrition Pvt. Ltd.</span> All rights reserved.
              </div>
              
              {/* Payment Methods */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <span className="text-gray-800 text-xs sm:text-sm font-bold">We Accept:</span>
                <div className="flex items-center gap-1 sm:gap-2 justify-center overflow-x-auto sm:overflow-visible">
                  {['VISA', 'Mastercard', 'American Express', 'PayPal'].map((method, index) => (
                    <div 
                      key={method} 
                      className="px-2 sm:px-3 py-1 bg-white rounded-md sm:rounded-lg text-black text-xs sm:text-sm font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-300 hover:border-blue-400"
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

