import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, MapPin, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// Type assertion for FontAwesome icons
const FacebookIcon = FaFacebookF as React.ComponentType<{ className?: string }>;
const InstagramIcon = FaInstagram as React.ComponentType<{ className?: string }>;
const YoutubeIcon = FaYoutube as React.ComponentType<{ className?: string }>;
const PinterestIcon = FaPinterestP as React.ComponentType<{ className?: string }>;
const TwitterIcon = FaTwitter as React.ComponentType<{ className?: string }>;
const LinkedinIcon = FaLinkedinIn as React.ComponentType<{ className?: string }>;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>Punjabi Colony, Julana, Haryana 126101</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <FacebookIcon className="h-4 w-4 text-gray-600 hover:text-myura-green-600 cursor-pointer" />
                <InstagramIcon className="h-4 w-4 text-gray-600 hover:text-myura-green-600 cursor-pointer" />
                <YoutubeIcon className="h-4 w-4 text-gray-600 hover:text-myura-green-600 cursor-pointer" />
                <PinterestIcon className="h-4 w-4 text-gray-600 hover:text-myura-green-600 cursor-pointer" />
                <TwitterIcon className="h-4 w-4 text-gray-600 hover:text-myura-green-600 cursor-pointer" />
                <LinkedinIcon className="h-4 w-4 text-gray-600 hover:text-myura-green-600 cursor-pointer" />
                <Mail className="h-4 w-4 text-gray-600 hover:text-myura-green-600 cursor-pointer" />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-myura-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-myura-green-400 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">MYURA</h1>
                <p className="text-sm text-myura-green-600">Wellness That Radiates From Within</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-myura-green-600' : 'text-gray-700 hover:text-myura-green-600'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-myura-green-600' : 'text-gray-700 hover:text-myura-green-600'
                }`}
              >
                About
              </Link>
              <Link
                to="/product"
                className={`text-sm font-medium transition-colors ${
                  isActive('/product') ? 'text-myura-green-600' : 'text-gray-700 hover:text-myura-green-600'
                }`}
              >
                Product
              </Link>
              <Link
                to="/blog"
                className={`text-sm font-medium transition-colors ${
                  isActive('/blog') ? 'text-myura-green-600' : 'text-gray-700 hover:text-myura-green-600'
                }`}
              >
                Blog & News
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-myura-green-600' : 'text-gray-700 hover:text-myura-green-600'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Search and User Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-64 px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-myura-green-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-6 w-6 text-gray-600 hover:text-myura-green-600 cursor-pointer" />
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-myura-green-600 cursor-pointer" />
                  <span className="absolute -top-2 -right-2 bg-myura-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-myura-green-600 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-myura-green-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-myura-green-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/product"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-myura-green-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-myura-green-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog & News
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-myura-green-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

