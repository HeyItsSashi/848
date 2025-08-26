import React, { useRef, useEffect, useState } from 'react';

interface HighlightOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const HighlightOnScroll: React.FC<HighlightOnScrollProps> = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-20px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <span
      ref={elementRef}
      className={`relative inline-block transition-all duration-500 ${className}`}
      style={{
        borderBottom: isVisible ? '2px solid rgba(120, 113, 108, 0.6)' : '2px solid transparent',
        transform: 'translateY(0)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </span>
  );
};

export default HighlightOnScroll;