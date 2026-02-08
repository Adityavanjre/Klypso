import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, CreditCard, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Order = () => {
    const [selectedPlan, setSelectedPlan] = useState('standard');
    const [showQRCode, setShowQRCode] = useState(false);

    const upiId = "adityavanjre280-4@okaxis";
    // Constructing a UPI link. 
    // Note: This link format works on mobile devices with UPI apps installed.
    // Generating a QR code URL using a public API for display.
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=${upiId}&pn=Klypso&cu=INR`;

    const plans = [
        {
            id: 'basic',
            name: 'Basic Website',
            price: '₹25,000',
            features: ['Responsive 5-Page Site', 'Contact Form', 'Basic SEO', '1 Month Support']
        },
        {
            id: 'standard',
            name: 'Business Growth',
            price: '₹50,000',
            features: ['Dynamic Website (10 Pages)', 'CMS Integration', 'Advanced SEO', 'Social Media Setup', '3 Months Support'],
            popular: true
        },
        {
            id: 'premium',
            name: 'E-Commerce / App',
            price: '₹1,00,000+',
            features: ['Full E-Commerce / Mobile App', 'Payment Gateway', 'Custom Admin Panel', '6 Months Support', 'Performance Optimization']
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
            <Helmet>
                <title>Order Services | Klypso Payment</title>
                <meta name="description" content="Place your order for Klypso's premium digital services. Secure payment via UPI available." />
            </Helmet>

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 mb-6">
                        Start Your Journey
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Select a package that suits your needs and make a secure payment to kickstart your project instantly.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative bg-white/5 border ${selectedPlan === plan.id ? 'border-green-500 ring-1 ring-green-500/50' : 'border-white/10'} rounded-2xl p-8 cursor-pointer transition-all hover:border-green-500/50`}
                            onClick={() => setSelectedPlan(plan.id)}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                                    POPULAR
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-3xl font-bold text-green-400 mb-6">{plan.price}</div>
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-300">
                                        <CheckCircle size={16} className="text-green-500 mr-2 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-3 rounded-lg font-bold transition-all ${selectedPlan === plan.id ? 'bg-green-500 text-black' : 'bg-white/10 hover:bg-white/20'}`}
                            >
                                {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Payment Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-4xl mx-auto bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center">
                                <CreditCard className="mr-3 text-green-400" /> Payment Details
                            </h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                You are about to pay for the <strong>{plans.find(p => p.id === selectedPlan)?.name}</strong> package.
                                Please scan the QR code using any UPI app (Google Pay, PhonePe, Paytm, etc.).
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-black/50 rounded-lg border border-white/5">
                                    <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">UPI ID</div>
                                    <div className="font-mono text-lg text-green-400 select-all">{upiId}</div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <ShieldCheck size={16} className="text-green-500" />
                                    Secure Payment via Axis Bank UPI
                                </div>
                            </div>

                            <button
                                onClick={() => setShowQRCode(!showQRCode)}
                                className="w-full btn-primary py-4 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 border-none"
                            >
                                {showQRCode ? 'Hide QR Code' : 'Show Payment QR Code'}
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-2xl relative">
                            {showQRCode ? (
                                <>
                                    <img
                                        src={qrCodeUrl}
                                        alt="UPI QR Code"
                                        className="w-48 h-48 md:w-64 md:h-64 object-contain"
                                    />
                                    <div className="mt-4 text-black font-bold text-center">
                                        Scan to Pay
                                    </div>
                                    <div className="mt-1 text-gray-500 text-xs">
                                        Accepts GPay, PhonePe, Paytm, etc.
                                    </div>
                                </>
                            ) : (
                                <div className="w-full h-64 flex flex-col items-center justify-center text-gray-400">
                                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                                        <CreditCard className="text-gray-400" />
                                    </div>
                                    <p>Click "Show Payment QR Code" to reveal</p>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                <div className="text-center mt-12 text-gray-500 text-sm">
                    After payment, please send a screenshot to <a href="mailto:adityavanjre280@gmail.com" className="text-green-400 hover:underline">adityavanjre280@gmail.com</a> along with your requirements.
                </div>
            </div>
        </div>
    );
};

export default Order;
