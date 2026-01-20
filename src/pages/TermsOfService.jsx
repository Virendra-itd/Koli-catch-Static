import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Scale, UserCheck, ShoppingCart, Truck, XCircle, CreditCard, Users, Gift, Copyright, AlertTriangle, Shield, MapPin, Mail, Phone, ArrowUp, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const TermsOfService = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainSections = [
    {
      id: 1,
      title: 'About Koli Catch',
      icon: FileText,
      content: [
        'Koli Catch is operated by Sea to Plate ("Koli Catch", "we", "our", "us"), engaged in sourcing and delivering fresh fish and seafood to customers through its digital platforms.',
        'Registered Address: Flat No. 58A, Ground Floor, Kohinoor Industrial Complex, Sector PNL-1, Taloja MIDC, Raigad, Maharashtra – 410208, India',
        'Contact: info@kolicatch.io | +91 96993 52316'
      ]
    },
    {
      id: 2,
      title: 'Acceptance of Terms',
      icon: Scale,
      content: [
        'By accessing, browsing, registering, or placing an order on the Koli Catch website or mobile application ("Platform"), you agree to comply with and be bound by these Terms & Conditions, Privacy Policy, and all applicable policies displayed on the Platform.',
        'If you do not agree with these Terms, please refrain from using the Platform.'
      ]
    },
    {
      id: 3,
      title: 'Eligibility',
      icon: UserCheck,
      content: [
        'You confirm that:',
        '• You are 18 years or older',
        '• You are legally competent to enter into a binding contract under Indian law'
      ]
    },
    {
      id: 4,
      title: 'Account Registration & Communication',
      icon: Mail,
      content: [
        'To place an order, users may need to provide personal information such as name, mobile number, email address, and delivery address.',
        'By registering or placing an order, you consent to receive:',
        '• Order-related communications',
        '• OTP messages',
        '• Delivery updates',
        '• Promotional messages (you may opt out anytime)',
        'Koli Catch respects user privacy and handles data as per its Privacy Policy.'
      ]
    },
    {
      id: 5,
      title: 'Products & Pricing',
      icon: ShoppingCart,
      content: [
        '• All prices are listed in Indian Rupees (INR)',
        '• GST is applied as per applicable laws and shown on the invoice',
        '• Product images are for reference only',
        '• Due to the nature of fresh seafood, slight variations in weight and appearance may occur',
        '• Final billing is based on the actual delivered weight.'
      ]
    },
    {
      id: 6,
      title: 'Orders & Availability',
      icon: AlertTriangle,
      content: [
        '• Orders are subject to product availability',
        '• Koli Catch reserves the right to limit quantities or cancel orders due to stock issues, quality concerns, or operational reasons',
        '• If a product becomes unavailable after order acceptance, the customer will be eligible for a full refund'
      ]
    },
    {
      id: 7,
      title: 'Delivery & Time Slots',
      icon: Truck,
      content: [
        '• Delivery is available only in serviceable pincodes',
        '• Delivery is currently offered in: Morning Slot and Evening Slot',
        '• Delivery charges, if applicable, are clearly shown at checkout',
        '• Free delivery may be offered under specific promotions or minimum order value',
        '• Delivery timelines are indicative and may vary due to traffic, weather, or operational conditions.'
      ]
    },
    {
      id: 8,
      title: 'Cancellation Policy',
      icon: XCircle,
      content: [
        '• Orders cannot be cancelled once accepted',
        '• Cancellation is permitted only before order acceptance',
        '• If an accepted order cannot be fulfilled due to product unavailability, a full refund will be issued'
      ]
    }
  ];

  const additionalSections = [
    {
      id: 9,
      title: 'Refunds',
      content: [
        'Refunds will be processed in the following cases:',
        '• Product unavailability after acceptance',
        '• Quality or freshness issues (reported within 24 hours of delivery)',
        'Refunds will be credited to the original payment method within standard banking timelines.'
      ]
    },
    {
      id: 10,
      title: 'Payments',
      content: [
        '• Online payments are supported via secure payment gateways',
        '• Cash on Delivery (COD) is not available currently and will be introduced soon',
        '• Koli Catch is not responsible for payment failures caused by third-party payment providers.'
      ]
    },
    {
      id: 11,
      title: 'Associates & Delivery Partners',
      content: [
        'Deliveries may be fulfilled by:',
        '• In-house associates',
        '• Third-party delivery partners',
        'Koli Catch ensures quality handling standards irrespective of delivery mode.'
      ]
    },
    {
      id: 12,
      title: 'Offers & Promotions',
      content: [
        '• Offers are subject to specific terms mentioned on the Platform',
        '• Promotions may be modified or discontinued without prior notice',
        '• Offers cannot be combined unless stated otherwise'
      ]
    },
    {
      id: 13,
      title: 'Intellectual Property',
      content: [
        'All content on the Platform including logos, designs, text, images, and software is the intellectual property of Koli Catch or its licensors and is protected under applicable laws.',
        'Unauthorized use is strictly prohibited.'
      ]
    },
    {
      id: 14,
      title: 'Disclaimer',
      content: [
        'Products and services are provided on an "as-is" and "as-available" basis.',
        'Koli Catch does not guarantee uninterrupted or error-free operation of the Platform.'
      ]
    },
    {
      id: 15,
      title: 'Limitation of Liability',
      content: [
        'To the maximum extent permitted by law:',
        '• Koli Catch\'s liability shall not exceed the total value of the order in dispute',
        '• Koli Catch shall not be liable for indirect or consequential damages'
      ]
    },
    {
      id: 16,
      title: 'Force Majeure',
      content: [
        'Koli Catch shall not be liable for delays or failure in performance due to events beyond its reasonable control including natural disasters, strikes, pandemics, or government actions.'
      ]
    },
    {
      id: 17,
      title: 'Governing Law & Jurisdiction',
      content: [
        'These Terms shall be governed by the laws of India.',
        'All disputes shall be subject to the exclusive jurisdiction of courts in Maharashtra.'
      ]
    },
    {
      id: 18,
      title: 'Contact & Grievance Redressal',
      content: [
        'For queries, complaints, or support:',
        'Email: info@kolicatch.io',
        'Phone: +91 96993 52316',
        'We aim to respond within 48 business hours.'
      ]
    }
  ];

  return (
    <div className="terms-of-service-page min-h-screen bg-gradient-to-b from-[#f8f8fb] via-white to-[#f8f8fb]">
      <Header />
      
      {/* Breadcrumb */}
      <section className="bg-gradient-to-r from-[#003366] to-[#004d99] py-8 border-b border-[#003366]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0">Terms & Conditions</h2>
            <nav className="flex items-center space-x-2 text-white/80">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={16} />
              <span className="text-white">Terms & Conditions</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6600] to-[#ff8533] rounded-2xl mb-6 shadow-lg">
              <FileText className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
              Terms & <span className="text-[#FF6600]">Conditions</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Koli Catch Terms & Conditions for Fresh Fish & Seafood Orders
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: <span className="text-[#FF6600] font-semibold">January 16, 2026</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Sections with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {mainSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card
                  key={section.id}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#FF6600]/50 bg-white"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <CardHeader className="bg-gradient-to-r from-[#003366] to-[#004d99] text-white rounded-t-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                        <Icon className="text-white" size={24} />
                      </div>
                      <CardTitle className="text-xl font-bold">
                        {section.id}. {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 leading-relaxed">
                          <span className="text-[#FF6600] mr-3 mt-1.5 flex-shrink-0">•</span>
                          <span className="text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSections.map((section, index) => (
              <Card
                key={section.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border hover:border-[#FF6600]/30 bg-white"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${(mainSections.length + index) * 0.1}s both`
                }}
              >
                <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-white">
                  <CardTitle className="text-lg font-bold text-[#003366]">
                    {section.id}. {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5">
                  <ul className="space-y-2">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="text-[#FF6600] mr-2 mt-1.5 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Card - Special Styling */}
          <Card className="mt-12 bg-gradient-to-br from-[#fff5f0] to-white border-2 border-[#FF6600]/30 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[#FF6600] to-[#ff8533] text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center space-x-3">
                <Shield size={28} />
                <span>Contact & Grievance Redressal</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#003366] text-lg mb-4">For queries, complaints, or support:</h4>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                  <div>
                    <a
                      href="mailto:info@kolicatch.io"
                      className="text-[#FF6600] hover:text-[#003366] transition-colors flex items-center mb-2"
                    >
                      <Mail className="mr-2" size={20} />
                      info@kolicatch.io
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+919699352316"
                      className="text-[#FF6600] hover:text-[#003366] transition-colors flex items-center mb-2"
                    >
                      <Phone className="mr-2" size={20} />
                      +91 96993 52316
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">⏱ We aim to respond within 48 business hours.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Notice Card */}
          <Card className="mt-6 bg-gradient-to-br from-[#fff5f0] to-[#ffe6d9] border-2 border-[#FF6600]/40">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Scale className="text-[#FF6600] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-[#003366] mb-2">⚖️ Legal Notice</h4>
                  <p className="text-gray-700 text-sm">
                    This is a computer-generated electronic record under the Information Technology Act, 2000 and does not require a physical signature.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#FF6600] to-[#ff8533] text-white p-4 rounded-full shadow-2xl hover:shadow-[#FF6600]/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;

