import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Cpu, AlertTriangle } from 'lucide-react';

interface Project {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  status: string;
  image: string;
  links?: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    name: 'GreenCart',
    subtitle: 'E-commerce Store',
    description:
      'A full-stack e-commerce platform for Nepali local products with integrated payment gateways (eSewa/Khalti). Features dynamic dashboards, cart management, and seamless checkout experience.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase', 'Vite', 'Tailwind'],
    status: 'OPERATIONAL',
    image: '/project-greencart.jpg',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    name: 'News Portal',
    subtitle: 'Multi-Role News System',
    description:
      'Complete news portal with admin, reporter, and user roles for content management and publishing. Features article editor, live feed, and comprehensive user management.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    status: 'DEPLOYED',
    image: '/project-newsportal.jpg',
    links: {
      demo: '#',
      github: '#',
    },
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className="relative group"
    >
      <div className="glass rounded-xl overflow-hidden border border-cyan/20 transition-all duration-300 group-hover:border-cyan/50 group-hover:shadow-cyan">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2 glass px-3 py-1 rounded-full">
            <span className={`w-2 h-2 rounded-full animate-pulse ${
              project.status === 'OPERATIONAL' ? 'bg-cyan' : 'bg-phantom'
            }`} />
            <span className="font-monoTech text-xs text-mist">{project.status}</span>
          </div>

          {/* Danger Warning */}
          <div className="absolute top-4 left-4">
            <AlertTriangle size={20} className="text-danger" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div>
            <h3 className="font-orbitron text-2xl font-bold text-mist group-hover:text-cyan transition-colors">
              {project.name}
            </h3>
            <p className="text-fog font-rajdhani text-sm">{project.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-fog/80 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="px-3 py-1 text-xs font-monoTech bg-cyan/10 text-cyan rounded border border-cyan/30 hover:bg-cyan/20 hover:border-cyan transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-ash">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                className="flex items-center gap-2 text-cyan hover:text-mist transition-colors text-sm font-monoTech"
              >
                <ExternalLink size={14} />
                VIEW SYSTEM
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                className="flex items-center gap-2 text-fog hover:text-cyan transition-colors text-sm font-monoTech"
              >
                <Github size={14} />
                SOURCE CODE
              </a>
            )}
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-smoke to-void" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label text-center">/// PROTOCOL: PROJECTS</div>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-mist tracking-wide mt-4">
            ARSENAL
          </h2>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-cyan tracking-wide glow-cyan">
            SYSTEMS
          </h2>
          <p className="text-fog/70 font-rajdhani mt-4 max-w-2xl mx-auto">
            Deployed applications and systems built with precision and purpose.
            Each project represents a mission accomplished.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* More Projects Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-cyan/20">
            <Cpu size={18} className="text-cyan" />
            <span className="font-monoTech text-sm text-fog">
              MORE SYSTEMS IN DEVELOPMENT
            </span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
