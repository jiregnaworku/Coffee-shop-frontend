import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

interface FooterProps {
  goToHome?: () => void;
  goToAbout?: () => void;
  goToContact?: () => void;
}

const Footer: React.FC<FooterProps> = ({ goToHome, goToAbout, goToContact }) => {
  return (
    <footer className="bg-coffee-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Coffee Shop</h3>
              <p className="text-orange-100 leading-relaxed mb-6">
                Crafting exceptional coffee experiences since 2020. Every cup tells a story of passion and dedication.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-coffee-accent transition-colors duration-300">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-coffee-accent transition-colors duration-300">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-coffee-accent transition-colors duration-300">
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={goToHome}
                    className="text-orange-100 hover:text-coffee-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Our Menu
                  </button>
                </li>
                <li>
                  <button
                    onClick={goToAbout}
                    className="text-orange-100 hover:text-coffee-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={goToContact}
                    className="text-orange-100 hover:text-coffee-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-coffee-accent mt-1 flex-shrink-0" />
                  <span className="text-orange-100">123 Coffee Street<br />Brewtown, BC V1A 2B3</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-coffee-accent flex-shrink-0" />
                  <span className="text-orange-100">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-coffee-accent flex-shrink-0" />
                  <span className="text-orange-100">hello@coffeeshop.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaClock className="text-coffee-accent flex-shrink-0" />
                  <span className="text-orange-100">Mon-Fri: 7AM-8PM<br />Sat-Sun: 8AM-9PM</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-orange-100 mb-4">
                Subscribe to get special offers, free giveaways, and delicious coffee updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-coffee-accent"
                />
                <button className="bg-coffee-accent hover:bg-coffee-cherry text-white px-4 py-2 rounded-r-md transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Coffee Shop. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-coffee-accent transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-coffee-accent transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-coffee-accent transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
