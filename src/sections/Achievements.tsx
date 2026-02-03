import { motion } from 'framer-motion';
import { Trophy, Award, Mic, Star, Zap, Target } from 'lucide-react';

interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  year: string;
  color: 'cyan' | 'danger' | 'phantom' | 'gold';
}

const achievements: Achievement[] = [
  {
    title: 'Best Academic Project',
    subtitle: 'BCA 4th Semester',
    description:
      'Recognized for excellence in software development and project execution during the 4th semester of BCA.',
    icon: <Trophy size={28} />,
    year: '2023',
    color: 'gold',
  },
  {
    title: 'Startup Initiative Leader',
    subtitle: 'GreenCart Project',
    description:
      'Led GreenCart project under student startup initiative, demonstrating leadership and entrepreneurial skills.',
    icon: <Zap size={28} />,
    year: '2024',
    color: 'cyan',
  },
  {
    title: 'Guest Speaker',
    subtitle: 'Tech Meetup',
    description:
      'Delivered guest session on "Building Modern UIs with React" to college tech community.',
    icon: <Mic size={28} />,
    year: '2025',
    color: 'phantom',
  },
  {
    title: 'Academic Excellence',
    subtitle: 'Software Engineering & Web Programming',
    description:
      'Scored A+ in practical labs demonstrating strong technical proficiency and dedication.',
    icon: <Star size={28} />,
    year: '2023',
    color: 'danger',
  },
];

const colorClasses = {
  cyan: {
    bg: 'bg-cyan/10',
    border: 'border-cyan/30',
    text: 'text-cyan',
    glow: 'shadow-cyan',
    hover: 'group-hover:border-cyan group-hover:shadow-cyan',
  },
  danger: {
    bg: 'bg-danger/10',
    border: 'border-danger/30',
    text: 'text-danger',
    glow: 'shadow-danger',
    hover: 'group-hover:border-danger group-hover:shadow-danger',
  },
  phantom: {
    bg: 'bg-phantom/10',
    border: 'border-phantom/30',
    text: 'text-phantom',
    glow: 'shadow-phantom',
    hover: 'group-hover:border-phantom group-hover:shadow-phantom',
  },
  gold: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-500',
    glow: 'shadow-yellow-500/40',
    hover: 'group-hover:border-yellow-500 group-hover:shadow-yellow-500/40',
  },
};

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

function AchievementCard({ achievement, index }: AchievementCardProps) {
  const colors = colorClasses[achievement.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative"
    >
      <div
        className={`glass rounded-xl p-6 border ${colors.border} transition-all duration-500 ${colors.hover} shine-effect h-full`}
      >
        {/* Year Badge */}
        <div className="absolute -top-3 -right-3">
          <div
            className={`w-12 h-12 rounded-full ${colors.bg} ${colors.text} border ${colors.border} flex items-center justify-center font-orbitron text-sm font-bold`}
          >
            {achievement.year}
          </div>
        </div>

        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
        >
          {achievement.icon}
        </div>

        {/* Content */}
        <h3 className="font-orbitron text-xl font-bold text-mist mb-1 group-hover:text-cyan transition-colors">
          {achievement.title}
        </h3>
        <p className={`font-monoTech text-sm ${colors.text} mb-3`}>
          {achievement.subtitle}
        </p>
        <p className="text-fog/70 text-sm leading-relaxed">
          {achievement.description}
        </p>

        {/* Decorative Line */}
        <div
          className={`mt-4 h-0.5 w-12 ${colors.bg.replace('/10', '')} transition-all duration-300 group-hover:w-full`}
        />
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-smoke to-void" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-phantom/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label text-center">/// PROTOCOL: ACHIEVEMENTS</div>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-mist tracking-wide mt-4">
            HONORS
          </h2>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-cyan tracking-wide glow-cyan">
            EARNED
          </h2>
          <p className="text-fog/70 font-rajdhani mt-4 max-w-2xl mx-auto">
            Milestones and recognitions achieved throughout the journey of 
            continuous learning and growth.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          <div className="glass rounded-lg p-4 text-center border border-cyan/20">
            <Target className="w-6 h-6 text-cyan mx-auto mb-2" />
            <div className="font-orbitron text-2xl font-bold text-mist">4+</div>
            <div className="font-monoTech text-xs text-fog/70">AWARDS</div>
          </div>
          <div className="glass rounded-lg p-4 text-center border border-phantom/20">
            <Award className="w-6 h-6 text-phantom mx-auto mb-2" />
            <div className="font-orbitron text-2xl font-bold text-mist">A+</div>
            <div className="font-monoTech text-xs text-fog/70">GRADE</div>
          </div>
          <div className="glass rounded-lg p-4 text-center border border-danger/20">
            <Trophy className="w-6 h-6 text-danger mx-auto mb-2" />
            <div className="font-orbitron text-2xl font-bold text-mist">TOP</div>
            <div className="font-monoTech text-xs text-fog/70">PERFORMER</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
