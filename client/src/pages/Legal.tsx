import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, FileText, RefreshCcw, CreditCard, ChevronRight } from 'lucide-react';

const Legal = () => {
  const [activeTab, setActiveTab] = useState('terms');

  const tabs = [
    { id: 'terms', label: 'Terms of Service', icon: FileText },
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'refund', label: 'Refund & Cancellation', icon: RefreshCcw },
    { id: 'payment', label: 'Payment Policy', icon: CreditCard },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'terms':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Terms of Service</h2>
            <div className="prose prose-invert max-w-none text-gray-300">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h3>
              <p>
                By accessing and using the Klypso website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Services</h3>
              <p>
                Klypso provides digital services including but not limited to Web Development, App Development, Digital Marketing, and SEO. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Intellectual Property</h3>
              <p>
                <strong>Client Ownership:</strong> Upon full payment, the client is granted rights to the final deliverables as specified in the project agreement.
                <br />
                <strong>Klypso Ownership:</strong> We retain the right to showcase completed projects in our portfolio unless a Non-Disclosure Agreement (NDA) is signed. Underlying reusable code libraries and tools remain the property of Klypso.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Client Obligations</h3>
              <p>
                You agree to provide all necessary assets, content, and feedback in a timely manner. Delays in providing these materials may result in project timeline extensions.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Limitation of Liability</h3>
              <p>
                Klypso shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services or deliverables.
              </p>
            </div>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Privacy Policy</h2>
            <div className="prose prose-invert max-w-none text-gray-300">
              <p>Your privacy is important to us. This policy explains how we handle your data.</p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and company details provided via forms.</li>
                <li><strong>Project Data:</strong> Requirements, specifications, and files shared for project execution.</li>
                <li><strong>Usage Data:</strong> Anonymous analytics data to improve website performance.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. How We Use Your Data</h3>
              <p>
                We use your data solely for:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Communicating regarding your project enquiries.</li>
                <li>Processing payments and invoicing.</li>
                <li>Delivering agreed-upon services.</li>
                <li>Improving our service offerings.</li>
              </ul>
              <p className="mt-4">We <strong>never</strong> sell your personal data to third parties.</p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>
          </div>
        );
      case 'refund':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Refund & Cancellation Policy</h2>
            <div className="prose prose-invert max-w-none text-gray-300">
              <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Advance Payments</h3>
              <p>
                Advance payments (booking fees) are generally <strong>non-refundable</strong> as they reserve time and resources for your project.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Cancellation by Client</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>If you cancel within 24 hours of booking and <strong>before</strong> work has commenced, a 80% refund may be considered (deducting processing fees).</li>
                <li>Once the project has started (design, research, or development phase), no refunds will be issued for the paid amount.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Project Termination</h3>
              <p>
                If Klypso is unable to complete the project due to unforeseen circumstances on our end, a full refund of the unutilized amount will be processed.
              </p>
            </div>
          </div>
        );
      case 'payment':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Payment Policy</h2>
            <div className="prose prose-invert max-w-none text-gray-300">
              <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Payment Structure</h3>
              <p>Standard projects typically follow this payment schedule:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Advance / Booking:</strong> 30-50% upfront to start the project.</li>
                <li><strong>Milestone 1:</strong> 30% upon approval of design/prototype.</li>
                <li><strong>Final:</strong> Remaining balance before final deployment and handover.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Accepted Methods</h3>
              <p>
                We accept payments via UPI (Google Pay, PhonePe, Paytm), Bank Transfer (NEFT/IMPS), and major Credit/Debit Cards (via payment gateway if applicable).
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Late Payments</h3>
              <p>
                Invoices not paid within 7 days of the due date may incur a late fee of 5%. Work may be paused until outstanding dues are cleared.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
      <Helmet>
        <title>Legal Center | Klypso</title>
        <meta name="description" content="Terms of Service, Privacy Policy, Refund Policy, and Payment Information for Klypso." />
      </Helmet>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Center</h1>
          <p className="text-gray-400">Everything you need to know about our policies and agreements.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${activeTab === tab.id
                      ? 'bg-green-600 text-white shadow-lg shadow-green-900/20'
                      : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    <span className="font-medium text-sm">{tab.label}</span>
                  </div>
                  {activeTab === tab.id && <ChevronRight size={16} />}
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="md:col-span-3 bg-zinc-900/50 border border-white/5 rounded-3xl p-8 md:p-12 min-h-[600px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
