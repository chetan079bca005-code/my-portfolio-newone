import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/9779849756660"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/20 cursor-pointer group hover:bg-[#128C7E] transition-colors duration-300"
        >
            <MessageCircle className="w-8 h-8 text-white" />

            {/* Ripple Effect */}
            <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" />

            {/* Tooltip */}
            <div className="absolute right-full mr-4 bg-void/90 text-cyan px-3 py-1 rounded border border-cyan/30 text-xs font-monoTech whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                INITIATE CHAT
            </div>
        </motion.a>
    );
}
