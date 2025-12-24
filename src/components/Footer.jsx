import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { COLORS } from "../styles/theme";

const Footer = () => {
  return (
    <footer className="bg-[#0f1f3a] text-gray-300 pt-16 pb-10 px-6 sm:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-10">
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">DevLucci</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting modern digital experiences that inspire connection,
            innovation, and growth. We build with purpose — design with heart.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#06B6D4] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#06B6D4] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#06B6D4] transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-[#06B6D4] transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#06B6D4] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>UI/UX Design</li>
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>Web Applications</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Get in Touch</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#FBBF24]" />
              <a
                href="mailto:contact@devlucci.com"
                className="hover:text-[#06B6D4] transition-colors"
              >
                contact@devlucci.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#FBBF24]" />
              +265 999 566 1361
            </li>
            <li className="flex gap-4 mt-4">
              <a href="https://facebook.com" className="hover:text-[#06B6D4]">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-[#06B6D4]">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-[#06B6D4]">
                <Linkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} DevLucci. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link
            to="/privacy-policy"
            className="hover:text-[#06B6D4] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-[#06B6D4] transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
