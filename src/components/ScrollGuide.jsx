import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = down, -1 = up
  const prevYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = Math.max(docHeight - winHeight, 1);
      setProgress(Math.min(Math.max(scrollTop / maxScroll, 0), 1));
      const prev = prevYRef.current;
      setDirection(scrollTop > prev ? 1 : scrollTop < prev ? -1 : direction);
      prevYRef.current = scrollTop;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return { progress, direction };
}

const StickMan = ({ className = '' }) => (
  <svg
    width="28"
    height="80"
    viewBox="0 0 28 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Head */}
    <circle cx="14" cy="10" r="6" className="stroke-current" strokeWidth="2" />
    {/* Body */}
    <line x1="14" y1="16" x2="14" y2="42" className="stroke-current" strokeWidth="2" />
    {/* Arms */}
    <line x1="14" y1="22" x2="4" y2="30" className="stroke-current" strokeWidth="2" />
    <line x1="14" y1="22" x2="24" y2="30" className="stroke-current" strokeWidth="2" />
    {/* Legs */}
    <line x1="14" y1="42" x2="6" y2="58" className="stroke-current" strokeWidth="2" />
    <line x1="14" y1="42" x2="22" y2="58" className="stroke-current" strokeWidth="2" />
  </svg>
);

const ScrollGuide = () => {
  const { progress, direction } = useScrollProgress();
  const trackRef = useRef(null);
  const pathRef = useRef(null);

  const { trackPx, headroom, width, centerX, amplitude, segments } = useMemo(
    () => ({ trackPx: 360, headroom: 16, width: 48, centerX: 24, amplitude: 12, segments: 8 }),
    []
  );

  // Build a squiggly vertical path using quadratic curves
  const pathD = useMemo(() => {
    const step = trackPx / segments;
    let d = `M ${centerX} 0`;
    for (let i = 1; i <= segments; i++) {
      const y = i * step;
      const cy = y - step / 2;
      const cx = centerX + (i % 2 === 0 ? -amplitude : amplitude);
      d += ` Q ${cx} ${cy}, ${centerX} ${y}`;
    }
    return d;
  }, [trackPx, segments, centerX, amplitude]);

  const [pathLen, setPathLen] = useState(1);
  const [pos, setPos] = useState({ x: centerX, y: 0 });

  useEffect(() => {
    if (!pathRef.current) return;
    const len = pathRef.current.getTotalLength();
    setPathLen(len || 1);
  }, [pathD]);

  useEffect(() => {
    if (!pathRef.current) return;
    const len = Math.max(Math.min(progress * pathLen, pathLen), 0);
    const pt = pathRef.current.getPointAtLength(len);
    setPos({ x: pt.x, y: pt.y });
  }, [progress, pathLen]);

  // Sway: base tilt by scroll direction, plus small oscillation with progress
  const baseTilt = direction === 1 ? 8 : -8; // tilt forward when going down, backward when going up
  const oscillation = Math.sin(progress * Math.PI * 6) * 3; // subtle sway
  const rotate = baseTilt + oscillation;
  const xOffset = Math.sin(progress * Math.PI * 4) * 2; // tiny lateral motion

  // Dunning–Kruger style progression (transparent bubble, concise text)
  const mood = useMemo(() => {
    if (progress < 0.10) return { key: 'easy', text: 'Feels easy' };
    if (progress < 0.25) return { key: 'peak', text: 'Peak of confidence' };
    if (progress < 0.45) return { key: 'valley', text: 'Okay… this is tough' };
    if (progress < 0.60) return { key: 'learn', text: 'Learning fast' };
    if (progress < 0.80) return { key: 'slope', text: 'Getting it' };
    if (progress < 0.95) return { key: 'plateau', text: 'Confident and careful' };
    return { key: 'again', text: "Let's do it again" };
  }, [progress]);

  return (
    <div className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 select-none hidden sm:block">
      <div className="flex flex-col items-center text-gray-400 dark:text-gray-500">
        {/* Track */}
        <div ref={trackRef} className="relative" style={{ height: trackPx + 'px', width: width + 'px' }}>
          <svg width={width} height={trackPx} className="block">
            <path
              ref={pathRef}
              d={pathD}
              fill="none"
              className="stroke-gray-200 dark:stroke-gray-700"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Stick Man positioned along the path */}
          <motion.div
            className="absolute"
            style={{ top: headroom + pos.y, left: pos.x, transform: 'translate(-50%, -10px)' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            {/* Rope from left frame to head */}
            <div
              className="absolute -top-2 -left-6 h-0.5 bg-gray-300 dark:bg-gray-600 origin-left"
              style={{ width: 28, transform: 'rotate(-25deg)' }}
            />
            {/* Dangling wrapper with transform origin at the 'rope' */}
            <motion.div
              style={{ transformOrigin: '0px 0px' }}
              animate={{ rotate, x: xOffset }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            >
              <StickMan className="text-primary-600 dark:text-primary-400 drop-shadow-sm" />
            </motion.div>

            {/* Speech bubble (further right of the stick man, glassy and crisp) */}
            <div className="absolute left-16 top-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mood.key}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="relative text-gray-900 dark:text-gray-100 text-[11px] md:text-xs leading-none px-2.5 py-1.5 whitespace-nowrap rounded-md shadow-sm bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm border border-white/40 dark:border-white/10"
                >
                  <span style={{ textShadow: '0 1px 1px rgba(0,0,0,0.25)' }}>{mood.text}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Controls removed as requested */}
        </div>
      </div>
    </div>
  );
};

export default ScrollGuide;
