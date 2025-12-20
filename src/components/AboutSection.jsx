import React, { useEffect, useRef, useState } from 'react';
import { Anchor, Ship, Award, Users } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { oceanToTableImages } from '../mockData';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Fast initial visibility check - use requestIdleCallback for non-critical check
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight + 200;
      if (isInViewport) {
        setIsVisible(true);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0, rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Anchor,
      title: 'Traditional Heritage',
      description: 'Rooted in generations of Koli fishing tradition'
    },
    {
      icon: Ship,
      title: 'Daily Fresh Catch',
      description: 'Fish caught and delivered the same day'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Highest standards of freshness and hygiene'
    },
    {
      icon: Users,
      title: 'Trusted by Thousands',
      description: 'Serving homes and businesses across the city'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-[#E8F4F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-150 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`} style={{ willChange: 'transform, opacity' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            For generations, the Koli community has been the heartbeat of Mumbai's fishing industry. 
            At Koli Catch, we honor this rich heritage by combining traditional fishing wisdom with 
            modern quality standards. Every fish we deliver carries the legacy of our ancestors and 
            the promise of unmatched freshness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-150 ease-out transform hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 5}ms`,
                  willChange: 'transform, opacity'
                }}
              >
                <div className="w-16 h-16 bg-[#FF6600]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-[#FF6600]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start transition-all duration-150 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`} style={{ willChange: 'transform, opacity' }}>
          {/* Image Grid - 2x2 Layout */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {oceanToTableImages.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    index === 0 ? 'h-56' : index === 1 ? 'h-56' : index === 2 ? 'h-56' : 'h-56'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <OptimizedImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    sectionVisible={isVisible}
                    style={{ height: '100%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/60 via-[#003366]/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-[#003366]/5 rounded-2xl -z-10"></div>
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-3xl font-bold text-[#003366] mb-6">From Ocean to Your Table</h3>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Our journey begins before sunrise, when our fishermen set sail into the Arabian Sea. 
                With decades of experience and deep respect for the ocean, they ensure only the finest 
                catch makes it to our facility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Once ashore, each fish undergoes rigorous quality checks and is processed in our 
                state-of-the-art hygienic facility. We maintain the cold chain from catch to delivery, 
                ensuring you receive seafood that's as fresh as it gets.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our expert team carefully inspects every fish for freshness, size, and quality. Only 
                the best specimens are selected, then cleaned and prepared according to your preferences. 
                Whether you need whole fish, fillets, or custom cuts, our skilled butchers handle each 
                order with precision and care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The final step is our temperature-controlled packaging system. Each order is carefully 
                packed with ice and insulated materials to maintain optimal freshness during transit. 
                From the moment we receive your order to when it arrives at your doorstep, we ensure 
                the cold chain is never broken.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
