import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Layers, Database, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    icon: <Code size={20} />,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    title: 'FRAMEWORKS',
    icon: <Layers size={20} />,
    skills: [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'PHP', level: 75 },
    ],
  },
  {
    title: 'DATABASES',
    icon: <Database size={20} />,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    title: 'TOOLS',
    icon: <Wrench size={20} />,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'PostMan', level: 85 },
      { name: 'Firebase', level: 75 },
    ],
  },
];

const otherSkills = [
  'Responsive Design',
  'System Debugging',
  'UI/UX',
  'Payment Integration',
  'REST APIs',
  'Agile Methodology',
];

interface SkillBarProps {
  skill: Skill;
  delay: number;
}

function SkillBar({ skill, delay }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-rajdhani text-mist">{skill.name}</span>
        <span className="font-monoTech text-cyan text-sm">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

interface HexagonSkillProps {
  skill: string;
  index: number;
}

function HexagonSkill({ skill, index }: HexagonSkillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="relative group"
    >
      <div className="hexagon w-24 h-28 bg-smoke border border-cyan/30 flex items-center justify-center transition-all duration-300 group-hover:border-cyan group-hover:bg-cyan/10 group-hover:shadow-cyan">
        <span className="font-monoTech text-xs text-center text-fog group-hover:text-cyan transition-colors px-2">
          {skill}
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-smoke to-void" />

      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
              x="0"
              y="0"
              width="50"
              height="43.4"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
                fill="none"
                stroke="#00f0ff"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label text-center">/// PROTOCOL: CAPABILITIES</div>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-mist tracking-wide mt-4">
            SYSTEM
          </h2>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-cyan tracking-wide glow-cyan">
            MODULES
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="glass rounded-xl p-6 border border-cyan/20"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan">
                  {category.icon}
                </div>
                <h3 className="font-orbitron text-lg text-mist tracking-wider">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Skills - Hexagon Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="font-orbitron text-xl text-mist tracking-wider mb-8">
            ADDITIONAL MODULES
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {otherSkills.map((skill, index) => (
            <HexagonSkill key={skill} skill={skill} index={index} />
          ))}
        </div>

        {/* Terminal Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-smoke rounded-lg border border-cyan/30 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-ash/50 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-danger" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-cyan" />
              <span className="ml-4 font-monoTech text-xs text-fog/50">
                skill_matrix.exe
              </span>
            </div>
            {/* Terminal Content */}
            <div className="p-4 font-monoTech text-sm">
              <div className="text-cyan">$ ./analyze_skills.sh</div>
              <div className="text-fog/70 mt-2">
                <span className="text-green-400">[OK]</span> Loading skill matrix...
              </div>
              <div className="text-fog/70">
                <span className="text-green-400">[OK]</span> Frameworks detected: React, Node.js, PHP
              </div>
              <div className="text-fog/70">
                <span className="text-green-400">[OK]</span> Databases connected: MongoDB, MySQL
              </div>
              <div className="text-fog/70">
                <span className="text-green-400">[OK]</span> Tools initialized: Git, PostMan, Firebase
              </div>
              <div className="text-cyan mt-2">
                $ <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
