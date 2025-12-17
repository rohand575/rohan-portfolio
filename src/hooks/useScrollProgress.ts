import { useEffect, useState, RefObject } from 'react';

interface ScrollProgressOptions {
  /**
   * The ref of the element to track scroll progress on
   */
  ref: RefObject<HTMLElement>;
  /**
   * Offset from the top of the viewport (in pixels)
   */
  offset?: number;
}

/**
 * Custom hook to track scroll progress through an element
 * Returns a value between 0 and 1 representing scroll progress
 */
export const useScrollProgress = ({ ref, offset = 0 }: ScrollProgressOptions): number => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const elementHeight = element.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calculate the scroll progress
        // When element top is at bottom of viewport: progress = 0
        // When element bottom is at top of viewport: progress = 1
        const scrollableDistance = elementHeight + viewportHeight - offset;
        const scrolled = viewportHeight - rect.top - offset;

        const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

        setScrollProgress(progress);
        rafId = null;
      });
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [ref, offset]);

  return scrollProgress;
};
