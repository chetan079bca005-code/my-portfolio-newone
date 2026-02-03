import { useState, useEffect, useCallback } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: 'low' | 'medium' | 'high';
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

export default function GlitchText({
  text,
  className = '',
  glitchIntensity = 'medium',
  as: Component = 'span',
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(true);

  const getGlitchDuration = () => {
    switch (glitchIntensity) {
      case 'low':
        return 1500;
      case 'high':
        return 3000;
      default:
        return 2000;
    }
  };

  const getGlitchInterval = () => {
    switch (glitchIntensity) {
      case 'low':
        return 80;
      case 'high':
        return 40;
      default:
        return 60;
    }
  };

  const glitchText = useCallback(() => {
    const chars = text.split('');
    const duration = getGlitchDuration();
    const interval = getGlitchInterval();
    const iterations = duration / interval;
    let currentIteration = 0;

    const glitchInterval = setInterval(() => {
      const progress = currentIteration / iterations;
      const settledChars = Math.floor(progress * chars.length);

      const newText = chars
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < settledChars) return text[index];
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        })
        .join('');

      setDisplayText(newText);
      currentIteration++;

      if (currentIteration >= iterations) {
        clearInterval(glitchInterval);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, interval);

    return () => clearInterval(glitchInterval);
  }, [text, glitchIntensity]);

  useEffect(() => {
    const cleanup = glitchText();
    return cleanup;
  }, [glitchText]);

  const handleMouseEnter = () => {
    if (!isGlitching) {
      setIsGlitching(true);
      glitchText();
    }
  };

  return (
    <Component
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      data-text={text}
    >
      <span className="relative z-10">{displayText}</span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-danger opacity-70 animate-glitch"
            style={{ clipPath: 'inset(40% 0 61% 0)' }}
          >
            {displayText}
          </span>
          <span
            className="absolute top-0 left-0 text-cyan opacity-70 animate-glitch"
            style={{ clipPath: 'inset(61% 0 40% 0)', animationDelay: '0.1s' }}
          >
            {displayText}
          </span>
        </>
      )}
    </Component>
  );
}
