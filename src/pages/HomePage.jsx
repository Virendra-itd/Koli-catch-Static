import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FishVarietiesSection from '../components/FishVarietiesSection';
import BusinessModelSection from '../components/BusinessModelSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { fishVarieties } from '../mockData';
import { preloadImages } from '../utils/imagePreloader';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Preload all fish images immediately on page load
    const allFishImages = fishVarieties.map(fish => fish.image);
    const businessImages = ['/images/business/fish-9.jpeg', '/images/business/fish-10.jpeg'];
    const aboutImages = ['/images/about/fish-on-table.png'];
    
    // Preload all images after a short delay to not block initial render
    setTimeout(() => {
      preloadImages([...allFishImages, ...businessImages, ...aboutImages]);
    }, 100);
  }, []);

  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      // Wait for page to render, then scroll
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
      }, 300);
    }
  }, [location.state]);

  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <AboutSection />
      <FishVarietiesSection />
      <BusinessModelSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
