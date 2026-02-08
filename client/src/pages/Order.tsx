import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, CreditCard, ChevronRight, ChevronLeft, Link as LinkIcon, AlertCircle } from 'lucide-react';
import axios from 'axios';

const Order = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Website Development & Integration',
        projectType: 'New Project',
        budget: '$1k - $5k',
        timeline: '1-2 months',
        message: '',
        referenceLinks: '', // simple string for now, could be comma separated
    });

    const upiId = "adityavanjre280-4@okaxis";
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=${upiId}&pn=Klypso&cu=INR`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (step === 1) {
            if (!formData.name || !formData.email || !formData.message) {
                setError('Please fill in all required fields.');
                return;
            }
        }
        setError('');
        setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    const handleSubmitRequirements = async () => {
        setLoading(true);
        setError('');
        try {
            // Send enquire data to backend to save as a lead/enquiry first
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            // Format reference links to array if needed
            const payload = {
                ...formData,
                referenceLinks: formData.referenceLinks.split(',').map(link => link.trim()).filter(link => link)
            };

            await axios.post('http://localhost:5000/api/enquiries', payload, config);

            // Move to payment step only after successful submission
            setStep(3);
        } catch (err) {
            console.error(err);
            setError('Failed to submit requirements. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const renderStep1_Requirements = () => (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="your@email.com"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="+91..."
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Service Type *</label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-black text-white border border-white/10 rounded-lg p-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none"
                    >
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="SEO & Content Strategy">SEO & Content Strategy</option>
                        <option value="Professional Photography">Professional Photography</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                    <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                        <option value="New Project">New Project</option>
                        <option value="Redesign">Redesign Existing</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Consultation">Consultation</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Estimated Budget</label>
                    <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                        <option value="< $1k">Less than ₹50k</option>
                        <option value="$1k - $5k">₹50k - ₹2L</option>
                        <option value="$5k - $10k">₹2L - ₹5L</option>
                        <option value="> $10k">More than ₹5L</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Timeline Expectations</label>
                <div className="flex gap-4 flex-wrap">
                    {['ASAP', '1-2 months', '3-6 months', 'Flexible'].map(opt => (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: opt })}
                            className={`px-4 py-2 rounded-full border text-sm transition-all ${formData.timeline === opt ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-white/20 text-gray-400 hover:border-white/40'}`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Project Details & Requirements *</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Describe your vision, features needed, and any specific goals..."
                ></textarea>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Reference Links (Optional)</label>
                <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-3">
                    <LinkIcon size={18} className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        name="referenceLinks"
                        value={formData.referenceLinks}
                        onChange={handleChange}
                        className="w-full bg-transparent text-white focus:outline-none"
                        placeholder="e.g., example.com, dribbble.com/shot..."
                    />
                </div>
                <p className="text-xs text-gray-500 mt-1">Separate multiple links with commas.</p>
            </div>

            <div className="flex justify-end pt-4">
                <button
                    onClick={nextStep}
                    className="btn-primary px-8 py-3 flex items-center gap-2"
                >
                    Review Requirements <ChevronRight size={18} />
                </button>
            </div>
        </motion.div>
    );

    const [agreed, setAgreed] = useState(false);

    const renderStep2_Review = () => (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-indigo-300">
                    <CheckCircle className="mr-2" size={20} /> Requirement Summary
                </h3>
                <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div><span className="text-gray-400">Name:</span> <div>{formData.name}</div></div>
                    <div><span className="text-gray-400">Email:</span> <div>{formData.email}</div></div>
                    <div><span className="text-gray-400">Service:</span> <div>{formData.service}</div></div>
                    <div><span className="text-gray-400">Project Type:</span> <div>{formData.projectType}</div></div>
                    <div><span className="text-gray-400">Budget:</span> <div>{formData.budget}</div></div>
                    <div><span className="text-gray-400">Timeline:</span> <div>{formData.timeline}</div></div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-gray-400 text-sm">Project Description:</span>
                    <p className="mt-1 text-gray-300 italic">"{formData.message}"</p>
                </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 flex gap-4 items-start">
                <AlertCircle className="text-yellow-500 shrink-0 mt-0.5" size={20} />
                <div>
                    <h4 className="font-bold text-yellow-500 mb-1">Process Note</h4>
                    <p className="text-sm text-gray-300">
                        We recommend submitting your requirements first. Our team will review them and provide a detailed quote and estimation within 24 hours. However, if you are ready to kickstart immediately, you can proceed to pay a booking advance.
                    </p>
                </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-800 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-sm text-gray-400">
                        I agree to the <a href="/legal" target="_blank" className="text-indigo-400 hover:text-indigo-300 underline">Terms of Service</a> and <a href="/legal" target="_blank" className="text-indigo-400 hover:text-indigo-300 underline">Privacy Policy</a>. I understand that advance payments are subject to the Refund Policy.
                    </span>
                </label>
            </div>

            <div className="flex justify-between pt-4">
                <button
                    onClick={prevStep}
                    className="text-gray-400 hover:text-white px-6 py-3 flex items-center gap-2"
                >
                    <ChevronLeft size={18} /> Edit
                </button>
                <button
                    onClick={handleSubmitRequirements}
                    disabled={loading || !agreed}
                    className={`btn-primary px-8 py-3 flex items-center gap-2 ${(!agreed || loading) ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {loading ? 'Submitting...' : 'Submit & Continue to Payment'}
                    {!loading && <CreditCard size={18} />}
                </button>
            </div>
        </motion.div>
    );

    const renderStep3_Payment = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
        >
            <div className="mb-8">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-2">Requirements Received!</h2>
                <p className="text-gray-400">We have received your project details. You can now proceed with an advance payment to lock your slot.</p>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-2xl p-6 text-black shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500" />

                <h3 className="font-bold text-lg mb-6 flex justify-center items-center gap-2">
                    <CreditCard size={20} /> Secure Advance Payment
                </h3>

                {showQRCode ? (
                    <div className="space-y-4">
                        <div className="bg-gray-100 p-4 rounded-xl">
                            <img
                                src={qrCodeUrl}
                                alt="UPI QR Code"
                                className="w-48 h-48 mx-auto object-contain mix-blend-multiply"
                            />
                        </div>
                        <p className="text-sm font-medium text-gray-600">Scan via GPay, PhonePe, Paytm</p>
                        <p className="font-mono bg-gray-100 py-2 px-4 rounded text-sm select-all cursor-pointer border border-gray-200" title="Click to copy">
                            {upiId}
                        </p>
                        <button
                            onClick={() => setShowQRCode(false)}
                            className="text-sm text-indigo-600 font-medium hover:underline"
                        >
                            Back
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                            <div className="text-sm text-gray-500">Advance Amount</div>
                            <div className="text-3xl font-bold text-indigo-900">₹25,000</div>
                        </div>
                        <button
                            onClick={() => setShowQRCode(true)}
                            className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors flex justify-center items-center gap-2"
                        >
                            Pay Now <ArrowRight size={18} />
                        </button>
                        <p className="text-xs text-center text-gray-400 mt-4">
                            Your payment is secure. We will start the estimation process immediately.
                        </p>
                    </div>
                )}
            </div>

            <div className="mt-8 text-gray-500 text-sm">
                <LinkIcon size={14} className="inline mr-1" />
                A confirmation email will be sent to {formData.email}
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
            <Helmet>
                <title>Start Project | Klypso</title>
                <meta name="description" content="Tell us about your project requirements and get started with Klypso." />
            </Helmet>

            <div className="container mx-auto max-w-4xl">
                {/* Progress Steps */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-4">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? 'bg-indigo-600 text-white' : 'bg-white/10 text-gray-500'}`}>
                                    {s}
                                </div>
                                {s < 3 && <div className={`w-12 h-1 bg-white/10 mx-2 ${step > s ? 'bg-indigo-600' : ''}`} />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        {step === 1 && "Project Details"}
                        {step === 2 && "Review & Confirm"}
                        {step === 3 && "Secure Payment"}
                    </h1>
                    <p className="text-gray-400">
                        {step === 1 && "Help us understand your vision better."}
                        {step === 2 && "Ensure everything is correct before proceeding."}
                        {step === 3 && "Complete the initial booking to start."}
                    </p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl mb-6 text-center">
                        {error}
                    </div>
                )}

                <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 md:p-12 mb-12">
                    <AnimatePresence mode="wait">
                        {step === 1 && renderStep1_Requirements()}
                        {step === 2 && renderStep2_Review()}
                        {step === 3 && renderStep3_Payment()}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Order;
