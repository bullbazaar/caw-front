import { m } from 'framer-motion';

export interface ParallaxProps {
  children: React.ReactNode;
  direction: 'left' | 'right';
}

export function ParallaxText({ children, direction }: ParallaxProps) {
  return (
    <m.div
      className="flex w-[fit-content] whitespace-nowrap"
      initial={{ x: direction === 'left' ? '0%' : '-50%' }}
      animate={{ x: direction === 'left' ? '-50%' : '0%' }}
      transition={{ ease: 'linear', duration: 80, delay: 0, repeat: Infinity }}
    >
      <div className="flex gap-4 overflow-hidden whitespace-nowrap p-2">{children}</div>
    </m.div>
  );
}
