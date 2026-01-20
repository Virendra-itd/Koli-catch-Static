import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../mockData';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // We're already on home page, just scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  };

  const goToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 cursor-pointer" onClick={goToHome}>
              <img
                src="/images/logos/logo-dark.png"
                alt="Koli Catch Logo"
                className="h-16 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.parentElement.querySelector('.logo-fallback');
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="text-3xl font-bold text-white logo-fallback" style={{display: 'none'}}>
                Koli Catch
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Bringing the finest catch from the Arabian Sea to your table. 
              Rooted in tradition, committed to quality.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#FF6600] rounded-full flex items-center justify-center hover:bg-[#FF6600]/80 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#FF6600] rounded-full flex items-center justify-center hover:bg-[#FF6600]/80 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#FF6600] rounded-full flex items-center justify-center hover:bg-[#FF6600]/80 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('varieties')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Our Fish
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('business')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#FF6600] mt-1 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-white/80 hover:text-white transition-colors duration-300">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#FF6600] mt-1 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-white/80 hover:text-white transition-colors duration-300">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#FF6600] mt-1 flex-shrink-0" />
                <span className="text-white/80">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Koli Catch. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-white/60 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
