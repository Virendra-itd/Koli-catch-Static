import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, Users, Mail, Phone, MapPin, ArrowUp, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const PrivacyPolicy = () => {
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

  const sections = [
    {
      id: 1,
      title: 'Introduction',
      icon: Shield,
      content: [
        'Koli Catch is operated by Sea to Plate ("Company", "Koli Catch", "we", "our", "us").',
        'We are committed to protecting the privacy and security of personal information shared by users ("you", "your") while accessing or using our website, mobile application, or services (collectively, the "Platform").',
        'This Privacy Policy explains how we collect, use, store, share, and protect your information.',
        'By using our Platform, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of the Platform.'
      ]
    },
    {
      id: 2,
      title: 'Changes to This Policy',
      icon: FileText,
      content: [
        'We reserve the right to modify this Privacy Policy at any time without prior notice to ensure compliance with applicable laws or operational changes.',
        'Updated versions will be posted on this page. Continued use of the Platform constitutes acceptance of the revised policy.'
      ]
    },
    {
      id: 3,
      title: 'Information We Collect',
      icon: Eye,
      content: [
        'A. Information You Provide Directly: Name, Mobile number, Email address, Delivery address and pincode, Order details and preferences',
        'B. Transaction & Payment Information: Payments are processed through secure third-party payment gateways. We do not store card, UPI, or banking details on our servers.',
        'C. Customer Support & Feedback: Communication records, Feedback/reviews, Call recordings',
        'D. Usage & Device Information: IP address, Device type/OS/browser, App usage behavior, Date & time of access',
        'E. Cookies & Tracking Technologies: To improve user experience, analyze traffic patterns, and enable secure login sessions.'
      ]
    },
    {
      id: 4,
      title: 'How We Use Your Information',
      icon: Lock,
      content: [
        'Account creation and authentication (OTP-based login)',
        'Processing orders and deliveries',
        'Customer support and grievance handling',
        'Sending order updates, service notifications, and promotional messages',
        'Improving platform performance and user experience',
        'Compliance with legal and regulatory obligations'
      ]
    },
    {
      id: 5,
      title: 'Marketing & Communication',
      icon: Mail,
      content: [
        'By using our Platform, you consent to receive SMS, WhatsApp, email, or app notifications related to orders and services.',
        'Promotional communications (you may opt out anytime).',
        'This consent applies even if your number is registered under NDNC/DND.'
      ]
    },
    {
      id: 6,
      title: 'Sharing of Information',
      icon: Users,
      content: [
        'We do not sell or rent your personal data.',
        'We may share limited information with:',
        '• Service Providers: Delivery partners, Payment gateway providers, Communication providers, Cloud and analytics service providers',
        '• Legal & Regulatory Authorities: Information may be disclosed if required by law, court order, or government authority.',
        '• Business Transfers: In case of merger, acquisition, or restructuring, user data may be transferred as part of business assets with appropriate safeguards.'
      ]
    }
  ];

  const additionalSections = [
    {
      id: 7,
      title: 'Data Security',
      content: [
        'We implement reasonable security practices including:',
        '• Secure servers and access controls',
        '• Limited access to personal data on a need-to-know basis',
        '• Regular monitoring and system updates',
        'However, no online system is completely secure, and we cannot guarantee absolute protection.'
      ]
    },
    {
      id: 8,
      title: 'Data Retention',
      content: [
        'We retain personal information only as long as necessary to:',
        '• Provide services',
        '• Comply with legal obligations',
        '• Resolve disputes',
        'Once data is no longer required, it is securely deleted or anonymized.'
      ]
    },
    {
      id: 9,
      title: 'Your Rights',
      content: [
        'You have the right to:',
        '• Access your personal data',
        '• Request correction or deletion',
        '• Withdraw consent for marketing communications',
        'Requests can be sent to: info@kolicatch.io',
        'Note: Withdrawing consent may limit access to certain services.'
      ]
    },
    {
      id: 10,
      title: "Children's Privacy",
      content: [
        'Our Platform is intended for users 18 years and above.',
        'We do not knowingly collect data from minors. If such data is identified, it will be deleted immediately.'
      ]
    },
    {
      id: 11,
      title: 'Third-Party Links',
      content: [
        'Our Platform may contain links to third-party websites or services.',
        'We are not responsible for their privacy practices and encourage you to review their policies.'
      ]
    },
    {
      id: 12,
      title: 'Grievance Redressal',
      content: [
        'If you have concerns regarding your data or this Privacy Policy, contact:',
        'Grievance Officer – Koli Catch',
        'Operated by Sea to Plate'
      ]
    },
    {
      id: 13,
      title: 'Governing Law',
      content: [
        'This Privacy Policy is governed by the laws of India, including:',
        '• Information Technology Act, 2000',
        '• IT (Reasonable Security Practices & Sensitive Personal Data) Rules, 2011',
        'All disputes shall be subject to the jurisdiction of courts in Maharashtra.'
      ]
    }
  ];

  return (
    <div className="privacy-policy-page min-h-screen bg-gradient-to-b from-[#f8f8fb] via-white to-[#f8f8fb]">
      <Header />
      
      {/* Breadcrumb */}
      <section className="bg-gradient-to-r from-[#003366] to-[#004d99] py-8 border-b border-[#003366]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0">Privacy Policy</h2>
            <nav className="flex items-center space-x-2 text-white/80">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={16} />
              <span className="text-white">Privacy Policy</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6600] to-[#ff8533] rounded-2xl mb-6 shadow-lg">
              <Shield className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
              Privacy <span className="text-[#FF6600]">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Koli Catch Privacy Policy for Data Collection and Protection
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
            {sections.map((section, index) => {
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
                  animation: `fadeInUp 0.6s ease-out ${(sections.length + index) * 0.1}s both`
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

          {/* Grievance Officer Card - Special Styling */}
          <Card className="mt-12 bg-gradient-to-br from-[#fff5f0] to-white border-2 border-[#FF6600]/30 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[#FF6600] to-[#ff8533] text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center space-x-3">
                <MapPin size={28} />
                <span>Grievance Officer Contact</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#003366] text-lg mb-2">Grievance Officer – Koli Catch</h4>
                  <p className="text-gray-700 mb-4">Operated by Sea to Plate</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                  <div>
                    <p className="font-semibold text-[#003366] mb-2 flex items-center">
                      <MapPin className="mr-2 text-[#FF6600]" size={20} />
                      Address:
                    </p>
                    <p className="text-gray-700 ml-7">Flat No. 58A, Ground Floor,</p>
                    <p className="text-gray-700 ml-7">Kohinoor Industrial Complex,</p>
                    <p className="text-gray-700 ml-7">Sector PNL-1, Taloja MIDC,</p>
                    <p className="text-gray-700 ml-7">Raigad, Maharashtra – 410208, India</p>
                  </div>
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
                  <p className="text-sm text-gray-600 mt-4">⏱ Response Time: Within 48 business hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Notice Card */}
          <Card className="mt-6 bg-gradient-to-br from-[#fff5f0] to-[#ffe6d9] border-2 border-[#FF6600]/40">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <FileText className="text-[#FF6600] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-[#003366] mb-2">📄 Legal Notice</h4>
                  <p className="text-gray-700 text-sm">
                    This document is an electronic record under the Information Technology Act, 2000 and does not require physical or digital signatures.
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

export default PrivacyPolicy;
