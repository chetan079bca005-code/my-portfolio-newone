import { motion } from 'framer-motion';
import { Heart, Code, Github, Linkedin, Mail, ArrowUp, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-void border-t border-cyan/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="font-orbitron text-2xl font-bold tracking-wider mb-2">
              <span className="text-cyan">CK</span>
              <span className="text-fog text-sm ml-1">//</span>
              <span className="text-mist text-sm ml-1">PROTOCOL</span>
            </div>
            <p className="text-fog/50 font-monoTech text-sm">
              © 2025 Chetan Koirala. All systems operational.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-fog/70 hover:text-cyan transition-colors font-monoTech text-sm tracking-wider"
                >
                  {item.toUpperCase()}
                </a>
              )
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/chetan079bca005-code"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center text-fog hover:text-cyan hover:bg-cyan/20 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/np/ChetanKoirala"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center text-fog hover:text-cyan hover:bg-cyan/20 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:koiralachetan16@gmail.com"
              className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center text-fog hover:text-cyan hover:bg-cyan/20 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-ash" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-fog/50 text-sm"
          >
            <span>Built with</span>
            <Code size={14} className="text-cyan" />
            <span>and</span>
            <Heart size={14} className="text-danger" />
            <span>in Kathmandu, Nepal</span>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-fog/50 hover:text-cyan transition-colors text-sm font-monoTech"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp size={14} />
          </motion.button>
        </div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-4 glass px-6 py-2 rounded-full border border-cyan/10">
            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
            <span className="font-monoTech text-xs text-fog/50">
              SYSTEM STATUS: ALL PROTOCOLS ACTIVE
            </span>
            <span className="text-fog/30">|</span>
            <span className="font-monoTech text-xs text-cyan">
              UPTIME: 99.9%
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
