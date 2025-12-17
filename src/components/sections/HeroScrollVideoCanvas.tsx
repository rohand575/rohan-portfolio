import { useEffect, useRef, useState, ReactNode, useMemo, Children, createRef } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface HeroScrollVideoCanvasProps {
  /**
   * Path pattern for frames. Use {index} as placeholder.
   * Example: "/hero/frames/frame_{index}.webp"
   */
  framePathPattern?: string;
  /**
   * Total number of frames in the sequence
   */
  totalFrames?: number;
  /**
   * Fallback image for static display (mobile, reduced motion, or while loading)
   */
  fallbackImage?: string;
  /**
   * Enable frame sequence animation (set to false to use static image only)
   */
  enableAnimation?: boolean;
  /**
   * Optional content that should share the same animated background (e.g., About section)
   */
  children?: ReactNode;
}

const HeroScrollVideoCanvas = ({
  framePathPattern = '/hero/frames/frame_{index}.webp',
  totalFrames = 192,
  fallbackImage = '/hero-webp.webp',
  enableAnimation = true,
  children,
}: HeroScrollVideoCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<(HTMLImageElement | null)[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const currentFrameRef = useRef(0);

  const childArray = useMemo(() => Children.toArray(children).filter(Boolean), [children]);
  const childRefs = useMemo(
    () => childArray.map(() => createRef<HTMLDivElement>()),
    [childArray.length]
  );

  const heroProgress = useScrollProgress({ ref: heroSectionRef });
  const childProgresses = childRefs.map((ref) => useScrollProgress({ ref }));

  // Split animation progress evenly across hero + each child section.
  const totalSections = 1 + childArray.length;
  const sectionWeight = totalSections > 0 ? 1 / totalSections : 1;
  const animationProgress = Math.min(
    1,
    [heroProgress, ...childProgresses].reduce((acc, progressValue) => {
      const clamped = Math.max(0, Math.min(1, progressValue));
      return acc + clamped * sectionWeight;
    }, 0)
  );

  // Detect mobile and reduced motion preference
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    checkMobile();
    setPrefersReducedMotion(mediaQuery.matches);

    window.addEventListener('resize', checkMobile);
    const mediaChangeHandler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', mediaChangeHandler);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', mediaChangeHandler);
    };
  }, []);

  // Determine if we should use animation
  const shouldAnimate = enableAnimation && !isMobile && !prefersReducedMotion && totalFrames > 1;

  // Preload images with progressive loading strategy
  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    const loadedImages: (HTMLImageElement | null)[] = new Array(totalFrames).fill(null);
    let count = 0;

    const loadImage = (index: number) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        const framePath = framePathPattern.replace('{index}', String(index + 1).padStart(4, '0'));

        img.onload = () => {
          loadedImages[index] = img;
          count++;
          setLoadedCount(count);
          resolve();
        };

        img.onerror = () => {
          console.warn(`Failed to load frame ${index}: ${framePath}`);
          count++;
          setLoadedCount(count);
          resolve();
        };

        img.src = framePath;
      });
    };

    // Load first frame immediately for instant display
    loadImage(0).then(() => {
      setImages([...loadedImages]);

      // Then load remaining frames progressively
      const loadPromises: Promise<void>[] = [];
      for (let i = 1; i < totalFrames; i++) {
        loadPromises.push(loadImage(i));

        // Batch update every 10 frames
        if (i % 10 === 0) {
          Promise.all(loadPromises.slice(-10)).then(() => {
            setImages([...loadedImages]);
          });
        }
      }

      // Final update when all loaded
      Promise.all(loadPromises).then(() => {
        setImages([...loadedImages]);
      });
    });

    return () => {
      loadedImages.forEach(img => {
        if (img) img.src = '';
      });
    };
  }, [shouldAnimate, totalFrames, framePathPattern]);

  // Draw frame to canvas based on scroll progress
  useEffect(() => {
    if (!shouldAnimate || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const frameIndex = Math.min(
      Math.floor(animationProgress * (totalFrames - 1)),
      totalFrames - 1
    );

    // Skip if same frame
    if (frameIndex === currentFrameRef.current) return;
    currentFrameRef.current = frameIndex;

    const img = images[frameIndex];
    if (!img) return;

    // Set canvas size to match display size
    const displayRect = stickyRef.current?.getBoundingClientRect() ?? containerRef.current?.getBoundingClientRect();
    if (!displayRect) return;

    // Set canvas internal resolution to match display size
    const dpr = window.devicePixelRatio || 1;
    canvas.width = displayRect.width * dpr;
    canvas.height = displayRect.height * dpr;

    // Scale context to account for device pixel ratio
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    // Calculate aspect ratio fit (object-fit: cover)
    const imgAspect = img.width / img.height;
    const canvasAspect = displayRect.width / displayRect.height;

    let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

    if (imgAspect > canvasAspect) {
      // Image is wider proportionally - fit to HEIGHT, crop sides
      drawHeight = displayRect.height;
      drawWidth = drawHeight * imgAspect;
      offsetX = (displayRect.width - drawWidth) / 2;
    } else {
      // Image is taller proportionally - fit to WIDTH, crop top/bottom
      drawWidth = displayRect.width;
      drawHeight = drawWidth / imgAspect;
      offsetY = (displayRect.height - drawHeight) / 2;
    }

    // Clear and draw
    ctx.clearRect(0, 0, displayRect.width, displayRect.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [animationProgress, images, shouldAnimate, totalFrames]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rohan-dhanawade-25a616142/',
      label: 'LinkedIn Profile',
    },
    {
      icon: Github,
      href: 'https://github.com/rohand575',
      label: 'GitHub Profile',
    },
    {
      icon: Mail,
      href: 'mailto:rohan.dhanawade97@gmail.com',
      label: 'Email Contact',
    },
  ];

  const loadProgress = Math.round((loadedCount / totalFrames) * 100);
  const isLoading = loadedCount < Math.min(10, totalFrames);

  return (
    <div ref={containerRef} className="relative">
      {/* Sticky background that stays through Hero + About */}
      <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-black">
          {shouldAnimate ? (
            <>
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{
                  opacity: isLoading ? 0 : 1,
                  transition: 'opacity 0.5s ease-in-out',
                  objectFit: 'cover'
                }}
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                    <p className="text-white text-sm">Loading experience... {loadProgress}%</p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <img
              src={fallbackImage}
              alt="Hero background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
        </div>
      </div>

      {/* Foreground content that scrolls while background stays pinned */}
      <div className="relative -mt-[100vh] z-10">
        <section
          ref={heroSectionRef}
          className="relative min-h-screen flex items-center"
        >
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-left">
                <div className="mb-6 animate-fade-in-up">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight text-white">
                    Rohan Dhanawade
                  </h1>
                  <div className="flex flex-wrap gap-3 items-center mb-4">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-accent-gradient bg-clip-text text-transparent">
                      AI Engineer
                    </span>
                    <span className="text-xl md:text-2xl text-gray-300">&bull;</span>
                    <span className="text-xl md:text-2xl text-gray-300">ML</span>
                    <span className="text-xl md:text-2xl text-gray-300">&bull;</span>
                    <span className="text-xl md:text-2xl text-gray-300">Cloud</span>
                    <span className="text-xl md:text-2xl text-gray-300">&bull;</span>
                    <span className="text-xl md:text-2xl text-gray-300">Data</span>
                  </div>
                </div>

                <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl leading-relaxed">
                    I build production-ready AI systems and automation pipelines that solve real-world problems.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  {['Python', 'MLOps', 'Azure', 'LLMs', 'FastAPI', 'Docker'].map((skill) => (
                    <Badge
                      key={skill}
                      className="px-4 py-2 text-sm bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <Button
                    size="lg"
                    className="bg-accent-gradient hover:opacity-90 text-white shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <a href="/Resume.pdf" download className="flex items-center">
                      <Download className="mr-2 h-5 w-5" />
                      Download CV
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    onClick={() => scrollToSection('projects')}
                  >
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-white group-hover:text-primary transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white text-sm font-medium">Scroll</span>
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </section>

        {children && (
          childArray.map((child, index) => (
            <div key={index} ref={childRefs[index]} className="relative">
              {child}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HeroScrollVideoCanvas;
