import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function AnimatedStat({ value, suffix, label, delay }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);

      if (step >= steps) {
        clearInterval(timer);
        setCount(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="text-center group"
    >
      <div className="font-orbitron text-4xl sm:text-5xl font-bold text-cyan group-hover:glow-cyan transition-all duration-300">
        {count}
        <span className="text-danger text-2xl">{suffix}</span>
      </div>
      <div className="font-monoTech text-fog text-sm tracking-wider mt-2">
        {label}
      </div>
    </motion.div>
  );
}

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Technologies' },
  { value: 100, suffix: '%', label: 'Commitment' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M10 10h30v30h-30z M50 50h30v30h-30z M10 50h10v10h-10z M50 10h10v10h-10z"
                fill="none"
                stroke="#00f0ff"
                strokeWidth="0.5"
              />
              <circle cx="25" cy="25" r="2" fill="#00f0ff" />
              <circle cx="65" cy="65" r="2" fill="#00f0ff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              /// PROTOCOL: ABOUT
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-mist tracking-wide">
                THE GHOST IN
              </h2>
              <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-cyan tracking-wide glow-cyan">
                THE MACHINE
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-fog font-rajdhani text-lg leading-relaxed"
            >
              <p>
                I operate in the space between imagination and implementation. 
                A <span className="text-cyan">Full Stack Developer</span> from Kathmandu, Nepal, 
                I build systems that feel almost supernatural in their capability.
              </p>
              <p>
                With expertise spanning <span className="text-mist">React</span>,{' '}
                <span className="text-mist">Node.js</span>, and modern web technologies, 
                I transform complex problems into elegant, scalable solutions. Every line of code 
                is a step toward digital transcendence.
              </p>
              <p>
                My journey began with a Bachelor in Computer Application from Tribhuwan University, 
                where I focused on software development, process design, and project management. 
                Today, I continue to push boundaries, creating real-world web and automation systems 
                that make a difference.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-lg p-6 border border-cyan/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan font-orbitron text-xl">BCA</span>
                </div>
                <div>
                  <h3 className="font-orbitron text-mist text-lg tracking-wide">
                    Bachelor in Computer Application
                  </h3>
                  <p className="text-fog font-rajdhani">Tribhuwan University, Kathmandu, Nepal</p>
                  <p className="text-fog/70 text-sm mt-2">
                    Focused on software development, process design, and project management. 
                    Practical experience in building real-world web and automation systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-2">
            <div className="glass rounded-xl p-8 border border-cyan/20">
              <h3 className="font-orbitron text-cyan text-sm tracking-wider mb-8 text-center">
                SYSTEM METRICS
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <AnimatedStat
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={0.1 * index}
                  />
                ))}
              </div>

              {/* Decorative elements */}
              <div className="mt-8 pt-8 border-t border-ash">
                <div className="flex items-center justify-between text-xs font-monoTech text-fog/50">
                  <span>SYS.STATUS: OPERATIONAL</span>
                  <span className="text-cyan">v2.0.25</span>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              <div className="glass rounded-lg p-4 border border-cyan/10 text-center">
                <div className="text-cyan font-orbitron text-2xl">NP</div>
                <div className="text-fog/70 text-xs font-monoTech mt-1">LOCATION</div>
              </div>
              <div className="glass rounded-lg p-4 border border-danger/10 text-center">
                <div className="text-danger font-orbitron text-2xl">UTC+5:45</div>
                <div className="text-fog/70 text-xs font-monoTech mt-1">TIMEZONE</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
