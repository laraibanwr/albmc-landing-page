import { useEffect, useState } from 'react';

interface Props { target: number; suffix?: string; duration?: number; }

export default function AnimatedCounter({ target, suffix = '', duration = 1800 }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { 
        setCount(target); 
        clearInterval(timer); 
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}