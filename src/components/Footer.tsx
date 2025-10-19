import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

interface FooterProps {
  // Props no longer needed since Quick Links use anchor tags
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="relative bg-[#4B2E05] text-[#F9EEDB] overflow-hidden">
      {/* Subtle Coffee Bean Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z' fill='%23C8A97E'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4B2E05] via-[#3D2400] to-[#2D1A00]" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-5 lg:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {/* About Section */}
            <div className="sm:col-span-2 lg:col-span-1 order-1">
              <div className="space-y-2">
                <h3 className="text-lg font-serif font-bold text-[#C8A97E] tracking-wide">
                  Jiro Coffee
                </h3>
                <p className="text-[#F9EEDB]/80 leading-relaxed text-xs max-w-xs">
                  Crafting exceptional coffee experiences since 2020. Every cup
                  tells a story of passion, tradition, and Ethiopian heritage.
                </p>
                <div className="flex space-x-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61551666763445"
                    className="group p-1.5 bg-[#F9EEDB]/10 hover:bg-[#C8A97E] hover:text-[#4B2E05] rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <FaFacebook className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.instagram.com/jirocoffee.et/"
                    className="group p-1.5 bg-[#F9EEDB]/10 hover:bg-[#C8A97E] hover:text-[#4B2E05] rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <FaInstagram className="w-3 h-3" />
                  </a>
                  <a
                    href="https://twitter.com/jirocoffee.et"
                    className="group p-1.5 bg-[#F9EEDB]/10 hover:bg-[#C8A97E] hover:text-[#4B2E05] rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <FaTwitter className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="order-2 lg:order-2">
              <h4 className="text-sm font-serif font-semibold text-[#C8A97E] mb-2 relative">
                Quick Links
                <div className="absolute -bottom-1 left-0 w-6 h-0.5 bg-[#C8A97E] rounded-full" />
              </h4>
              <nav className="space-y-1.5">
                {[
                  { label: "Our Menu", href: "#menu-section" },
                  { label: "About Us", href: "#about-section" },
                  { label: "Contact", href: "#contact-section" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="group flex items-center text-[#F9EEDB]/80 hover:text-[#C8A97E] transition-all duration-300 text-xs hover:translate-x-1"
                  >
                    <span className="w-1 h-1 bg-[#C8A97E] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="order-3 lg:order-3">
              <h4 className="text-sm font-serif font-semibold text-[#C8A97E] mb-2 relative">
                Contact Info
                <div className="absolute -bottom-1 left-0 w-6 h-0.5 bg-[#C8A97E] rounded-full" />
              </h4>
              <div className="space-y-1.5">
                <FooterItem
                  icon={<FaMapMarkerAlt />}
                  text={
                    <>
                      Nekemt, Bord, National Hospital Street
                      <br /> Nekemt, East Wollega
                    </>
                  }
                />
                <FooterItem icon={<FaPhone />} text="(+251) 918-348-141" />
                <FooterItem icon={<FaEnvelope />} text="hello@Jirocoffee.com" />
                <FooterItem
                  icon={<FaClock />}
                  text={
                    <>
                      Mon–Fri: 7:00 AM – 8:00 PM <br /> Sat–Sun: 8:00 AM – 9:00
                      PM
                    </>
                  }
                />
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="col-span-1 order-4 lg:order-4">
              <h4 className="text-sm font-serif font-semibold text-[#C8A97E] mb-2 relative">
                Newsletter
                <div className="absolute -bottom-1 left-0 w-6 h-0.5 bg-[#C8A97E] rounded-full" />
              </h4>
              <p className="text-[#F9EEDB]/80 mb-2 text-xs leading-relaxed">
                Subscribe to get special offers, free giveaways, and delicious
                coffee updates.
              </p>
              <div className="space-y-2">
                <div className="group flex bg-[#F9EEDB]/10 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#C8A97E]/40 transition-all duration-300 hover:bg-[#F9EEDB]/15 min-h-[36px] w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 px-2 sm:px-3 py-2 bg-transparent text-[#F9EEDB] placeholder-[#F9EEDB]/60 focus:outline-none text-xs transition-colors duration-300 group-hover:placeholder-[#F9EEDB]/80"
                  />
                  <button className="relative bg-gradient-to-r from-[#C8A97E] to-[#B89968] hover:from-[#D4B896] hover:to-[#C8A97E] text-[#4B2E05] font-semibold px-2 sm:px-3 py-2 text-xs transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#C8A97E]/25 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C8A97E]/60 focus:ring-offset-2 focus:ring-offset-[#4B2E05] overflow-hidden flex-shrink-0 whitespace-nowrap">
                    <span className="relative z-10 flex items-center gap-1">
                      <span className="hidden sm:inline">Join</span>
                      <span className="sm:hidden">→</span>
                      <svg className="w-2 h-2 sm:w-3 sm:h-3 transition-transform duration-300 group-hover:translate-x-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  </button>
                </div>
                <p className="text-[#F9EEDB]/60 text-xs">
                  Join 2,000+ coffee lovers getting our weekly updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C8A97E]/20 bg-[#2D1A00]/50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0 text-center sm:text-left">
              <p className="text-[#F9EEDB]/60 text-xs">
                © {new Date().getFullYear()} Jiro Coffee. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (text, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-[#F9EEDB]/60 hover:text-[#C8A97E] transition-colors duration-300 text-xs"
                    >
                      {text}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable item for Contact Info
const FooterItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) => (
  <div className="flex items-start space-x-2 group">
    <div className="p-1.5 bg-[#F9EEDB]/10 rounded-full group-hover:bg-[#C8A97E]/20 transition-colors duration-300 flex-shrink-0">
      <div className="text-[#C8A97E] w-3 h-3">{icon}</div>
    </div>
    <div className="text-[#F9EEDB]/80 text-xs leading-relaxed">{text}</div>
  </div>
);

export default Footer;
