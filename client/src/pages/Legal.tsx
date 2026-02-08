import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Legal = () => {
  return (
    <section className="min-h-screen bg-black text-white py-24 px-4">
      <Helmet>
        <title>Legal | Klypso</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Legal Information</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-indigo-400">Privacy Policy</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                At Klypso, we value your privacy. This policy outlines how we collect, use, and protect your personal information when you use our website and services.
              </p>
              <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you submit an enquiry form. This includes your name, email address, and project details.
              </p>
              <h3 className="text-xl font-semibold mb-2">Data Usage</h3>
              <p className="text-gray-400 leading-relaxed">
                We use your information to respond to your enquiries, provide our services, and communicate with you about your projects. We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-indigo-400">Terms of Service</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                By accessing and using the Klypso website, you agree to be bound by these Terms of Service.
              </p>
              <h3 className="text-xl font-semibold mb-2">Intellectual Property</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, and software, is the property of Klypso and is protected by copyright laws.
              </p>
              <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
              <p className="text-gray-400 leading-relaxed">
                Klypso shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Legal;
