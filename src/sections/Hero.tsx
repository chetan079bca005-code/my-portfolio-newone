import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Send } from 'lucide-react';
import GlitchText from '../components/GlitchText';

const titles = ['Full Stack Developer', 'Ghost in the Machine', 'Code Phantom'];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayTitle, setDisplayTitle] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let charIndex = isTyping ? 0 : currentTitle.length;

    const typeInterval = setInterval(() => {
      if (isTyping) {
        if (charIndex <= currentTitle.length) {
          setDisplayTitle(currentTitle.slice(0, charIndex));
          charIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsTyping(false);
          }, 2000);
        }
      } else {
        if (charIndex >= 0) {
          setDisplayTitle(currentTitle.slice(0, charIndex));
          charIndex--;
        } else {
          setIsTyping(true);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          clearInterval(typeInterval);
        }
      }
    }, isTyping ? 80 : 40);

    return () => clearInterval(typeInterval);
  }, [currentTitleIndex, isTyping]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void to-smoke z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-monoTech text-cyan/70 text-sm tracking-[0.3em]"
            >
              /// PROTOCOL: INITIATE
            </motion.div>

            {/* Main Name */}
            <div className="space-y-2">
              <GlitchText
                text="CHETAN"
                as="h1"
                className="font-orbitron text-5xl sm:text-6xl lg:text-7xl font-bold text-mist tracking-wider"
                glitchIntensity="high"
              />
              <GlitchText
                text="KOIRALA"
                as="h1"
                className="font-orbitron text-5xl sm:text-6xl lg:text-7xl font-bold text-mist tracking-wider"
                glitchIntensity="high"
              />
            </div>

            {/* Typing Title */}
            <div className="h-8 flex items-center">
              <span className="text-cyan font-monoTech text-lg mr-2">&gt;</span>
              <span
                ref={titleRef}
                className="text-fog font-rajdhani text-xl tracking-wide cursor-blink"
              >
                {displayTitle}
              </span>
            </div>

            {/* Location & Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap items-center gap-4 text-fog font-monoTech text-sm"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                Kathmandu, Nepal
              </span>
              <span className="text-ash">|</span>
              <a
                href="tel:+9779849756660"
                className="flex items-center gap-2 hover:text-cyan transition-colors"
              >
                <Phone size={14} />
                +977-9849756660
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={scrollToContact}
                className="btn-cyan flex items-center gap-2 group"
              >
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                INITIATE CONTACT
              </button>
              <a
                href="https://linkedin.com/np/ChetanKoirala"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red flex items-center gap-2 group"
              >
                <Linkedin size={16} />
                ACCESS PROFILE
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex items-center gap-6 pt-4"
            >
              <a
                href="mailto:koiralachetan16@gmail.com"
                className="text-fog hover:text-cyan transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/np/ChetanKoirala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fog hover:text-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="tel:+9779849756660"
                className="text-fog hover:text-cyan transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Ghost Silhouette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Hexagonal Frame */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 border-2 border-cyan/30 rounded-full animate-spin-slow" 
                  style={{ animationDuration: '20s' }}
                />
                
                {/* Inner rotating ring */}
                <div 
                  className="absolute inset-4 border border-danger/30 rounded-full"
                  style={{ animation: 'spin 15s linear infinite reverse' }}
                />

                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="scan-line" />
                </div>

                {/* Ghost Image */}
                <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-b from-cyan/10 to-danger/10">
                  <img
                    src="/ghost-silhouette.png"
                    alt="Ghost in the Machine"
                    className="w-full h-full object-cover opacity-90"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-void/40" />
                </div>

                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan" />
              </div>

              {/* Floating status indicators */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-1/4 glass px-3 py-2 rounded"
              >
                <span className="text-cyan font-monoTech text-xs">ONLINE</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-4 bottom-1/4 glass px-3 py-2 rounded"
              >
                <span className="text-danger font-monoTech text-xs">DANGER</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Status Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-smoke/80 border-t border-cyan/20 py-3 overflow-hidden">
        <div className="ticker whitespace-nowrap">
          <span className="font-monoTech text-cyan/70 text-sm tracking-wider">
            SYSTEM ONLINE // LOCATION: KATHMANDU, NEPAL // STATUS: AVAILABLE FOR HIRE // 
            SYSTEM ONLINE // LOCATION: KATHMANDU, NEPAL // STATUS: AVAILABLE FOR HIRE // 
            SYSTEM ONLINE // LOCATION: KATHMANDU, NEPAL // STATUS: AVAILABLE FOR HIRE // 
            SYSTEM ONLINE // LOCATION: KATHMANDU, NEPAL // STATUS: AVAILABLE FOR HIRE // 
          </span>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-10" />
    </section>
  );
}
