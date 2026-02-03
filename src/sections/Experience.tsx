import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'current' | 'past';
}

const experiences: ExperienceItem[] = [
  {
    title: 'Frontend Developer',
    company: 'GreenCart Project (Freelance/College Initiative)',
    location: 'Kathmandu, Nepal',
    period: 'Apr 2024 – Present',
    description: [
      'Developed a modern, responsive e-commerce frontend using React and Tailwind',
      'Collaborated with team to integrate Firebase and eSewa payment gateway',
      'Worked on dynamic user/seller dashboards and cart/address management using React Router',
    ],
    type: 'current',
  },
  {
    title: 'Tech Intern',
    company: 'Research And Innovation Unit (RIU)',
    location: 'Kathmandu, Nepal',
    period: 'Jun 2022 – Aug 2022',
    description: [
      'Participated in robotic system prototyping for basic automation tasks',
      'Assisted in system testing and quality assurance',
      'Gained hands-on experience in teamwork and industry-level problem solving',
    ],
    type: 'past',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-smoke via-void to-void" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label text-center">/// PROTOCOL: EXPERIENCE</div>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-mist tracking-wide mt-4">
            OPERATIONAL
          </h2>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-cyan tracking-wide glow-cyan">
            HISTORY
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(0, 240, 255, 0.4)',
                        '0 0 20px rgba(0, 240, 255, 0.6)',
                        '0 0 10px rgba(0, 240, 255, 0.4)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-4 h-4 rounded-full ${
                      exp.type === 'current' ? 'bg-cyan' : 'bg-fog'
                    } border-4 border-void`}
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-xl p-6 border border-cyan/20 card-hover group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase size={16} className="text-cyan" />
                          <span
                            className={`font-monoTech text-xs tracking-wider ${
                              exp.type === 'current' ? 'text-cyan' : 'text-fog'
                            }`}
                          >
                            {exp.type === 'current' ? 'ACTIVE' : 'COMPLETED'}
                          </span>
                        </div>
                        <h3 className="font-orbitron text-xl font-bold text-mist group-hover:text-cyan transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-fog font-rajdhani mt-1">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-fog/70 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-cyan" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-cyan" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-fog/80 text-sm"
                        >
                          <ChevronRight
                            size={14}
                            className="text-cyan mt-1 flex-shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 glass px-6 py-3 rounded-full border border-cyan/20">
            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
            <span className="font-monoTech text-sm text-fog">
              AWAITING NEXT ASSIGNMENT
            </span>
            <span className="w-2 h-2 bg-danger rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
