import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

// Loading Screen Component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('INITIALIZING');

  useEffect(() => {
    const messages = [
      'INITIALIZING',
      'LOADING ASSETS',
      'ESTABLISHING CONNECTION',
      'DECRYPTING DATA',
      'SYSTEM READY',
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < messages.length) {
        setText(messages[messageIndex]);
        messageIndex++;
      }
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center"
    >
      {/* Loading Content */}
      <div className="w-full max-w-md px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="font-orbitron text-4xl font-bold tracking-wider">
            <span className="text-cyan">CK</span>
            <span className="text-fog text-lg ml-1">//</span>
            <span className="text-mist text-lg ml-1">PROTOCOL</span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="h-1 bg-ash rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan via-phantom to-danger"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Progress Info */}
          <div className="flex items-center justify-between mt-4">
            <span className="font-monoTech text-cyan text-sm animate-pulse">
              {text}...
            </span>
            <span className="font-monoTech text-fog text-sm">
              {progress.toString().padStart(3, '0')}%
            </span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-cyan rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cyan/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan/30" />
    </motion.div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen bg-void"
        >
          {/* Particle Background */}
          <ParticleBackground />

          {/* Scanlines Overlay */}
          <div className="scanlines" />

          {/* Vignette Effect */}
          <div className="vignette" />

          {/* Noise Texture */}
          <div className="noise" />

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
