import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ChatWidget = () => {
    // Replace with your actual WhatsApp phone number
    const phoneNumber = "1234567890"; 
    const message = encodeURIComponent("Hello Klypso, I'm interested in your services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-colors group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} className="fill-current" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap ml-0 group-hover:ml-2 text-sm font-semibold">
                Chat with us
            </span>
        </motion.a>
    );
};

export default ChatWidget;
