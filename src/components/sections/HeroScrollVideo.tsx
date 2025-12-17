import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface HeroScrollVideoProps {
  /**
   * Path to the video file (mp4/webm)
   */
  videoSrc?: string;
  /**
   * Fallback image for static display (mobile, reduced motion, or while loading)
   */
  fallbackImage?: string;
  /**
   * Enable video scroll animation (set to false to use static image only)
   */
  enableAnimation?: boolean;
}

const HeroScrollVideo = ({
  videoSrc = '/hero-video.mp4',
  fallbackImage = '/hero-webp.webp',
  enableAnimation = true,
}: HeroScrollVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);

  const scrollProgress = useScrollProgress({ ref: containerRef });

  // Detect mobile and reduced motion preference
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    checkMobile();
    setPrefersReducedMotion(mediaQuery.matches);

    window.addEventListener('resize', checkMobile);
    mediaQuery.addEventListener('change', (e) => setPrefersReducedMotion(e.matches));

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Determine if we should use animation
  const shouldAnimate = enableAnimation && !isMobile && !prefersReducedMotion;

  // Handle video metadata loaded
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldAnimate) return;

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
      setIsVideoLoaded(true);
    };

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);

    // Trigger load
    video.load();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [shouldAnimate]);

  // Update video currentTime based on scroll progress
  useEffect(() => {
    if (!shouldAnimate || !isVideoLoaded || !videoRef.current || videoDuration === 0) return;

    const video = videoRef.current;
    const targetTime = scrollProgress * videoDuration;

    // Only update if difference is significant enough (prevents micro-stutters)
    const timeDiff = Math.abs(video.currentTime - targetTime);

    if (timeDiff > 0.033) { // ~1 frame at 30fps
      video.currentTime = targetTime;
    }

  }, [scrollProgress, shouldAnimate, isVideoLoaded, videoDuration]);

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

  return (
    <div ref={containerRef} className="relative" style={{ height: '300vh' }}>
      {/* Sticky container for pinning effect */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full bg-black">
          {shouldAnimate ? (
            <>
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: isVideoLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
                playsInline
                muted
                preload="auto"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Loading state */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                    <p className="text-white text-sm">Loading experience...</p>
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-5xl mx-auto">
              {/* Left-aligned on desktop, centered on mobile */}
              <div className="text-left md:text-left">
                {/* Headline */}
                <div className="mb-6 animate-fade-in-up">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight text-white">
                    Rohan Dhanawade
                  </h1>
                  <div className="flex flex-wrap gap-3 items-center mb-4">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-accent-gradient bg-clip-text text-transparent">
                      AI Engineer
                    </span>
                    <span className="text-xl md:text-2xl text-gray-300">•</span>
                    <span className="text-xl md:text-2xl text-gray-300">ML</span>
                    <span className="text-xl md:text-2xl text-gray-300">•</span>
                    <span className="text-xl md:text-2xl text-gray-300">Cloud</span>
                    <span className="text-xl md:text-2xl text-gray-300">•</span>
                    <span className="text-xl md:text-2xl text-gray-300">Data</span>
                  </div>
                </div>

                {/* Value Proposition */}
                <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl leading-relaxed">
                    I build production-ready AI systems and automation pipelines that solve real-world problems.
                  </p>
                </div>

                {/* Skills Chips */}
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

                {/* CTA Buttons */}
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

                {/* Social Links */}
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

          {/* Scroll Hint */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white text-sm font-medium">Scroll</span>
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScrollVideo;
