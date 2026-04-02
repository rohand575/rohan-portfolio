import { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid, Piano, AudioWaveform, Paintbrush, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const apps = [
  {
    name: 'Piano',
    tagline: 'Play melodies online',
    url: 'http://piano.rohan-dhanawade.de/',
    icon: Piano,
    accentFrom: 'from-blue-500/20',
    accentTo: 'to-indigo-500/20',
    iconColor: 'text-blue-500',
    ringColor: 'group-hover:ring-blue-500/30',
    glowColor: 'group-hover:shadow-[0_0_20px_hsl(221_83%_53%/0.15)]',
  },
  {
    name: 'Tuner',
    tagline: 'Tune your instrument',
    url: 'https://tuner.rohan-dhanawade.de/',
    icon: AudioWaveform,
    accentFrom: 'from-teal-500/20',
    accentTo: 'to-emerald-500/20',
    iconColor: 'text-teal-500',
    ringColor: 'group-hover:ring-teal-500/30',
    glowColor: 'group-hover:shadow-[0_0_20px_hsl(173_80%_40%/0.15)]',
  },
  {
    name: 'Canvas',
    tagline: 'Draw & create freely',
    url: 'http://canvas.rohan-dhanawade.de/',
    icon: Paintbrush,
    accentFrom: 'from-violet-500/20',
    accentTo: 'to-purple-500/20',
    iconColor: 'text-violet-500',
    ringColor: 'group-hover:ring-violet-500/30',
    glowColor: 'group-hover:shadow-[0_0_20px_hsl(263_70%_50%/0.15)]',
  },
];

const AppsDrawerContent = () => (
  <>
    <SheetHeader>
      <SheetTitle className="flex items-center gap-2 text-lg">
        <LayoutGrid className="h-5 w-5 text-primary" />
        Apps
      </SheetTitle>
      <p className="text-sm text-muted-foreground">
        Mini tools & experiments
      </p>
    </SheetHeader>
    <div className="mt-8 flex flex-col gap-4">
      {apps.map((app) => {
        const Icon = app.icon;
        return (
          <a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 ring-1 ring-transparent transition-all duration-300 hover:scale-[1.02] hover:border-border ${app.ringColor} ${app.glowColor}`}
          >
            {/* Icon container with gradient background */}
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${app.accentFrom} ${app.accentTo} transition-transform duration-300 group-hover:scale-110`}
            >
              <Icon className={`h-6 w-6 ${app.iconColor}`} />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground">{app.name}</h3>
              <p className="text-sm text-muted-foreground">{app.tagline}</p>
            </div>

            {/* Arrow */}
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        );
      })}
    </div>
    <div className="mt-6 rounded-lg border border-dashed border-border/60 p-3 text-center">
      <p className="text-xs text-muted-foreground">More apps coming soon...</p>
    </div>
  </>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold bg-accent-gradient bg-clip-text text-transparent">
              Rohan Dhanawade
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium flex items-center gap-1.5">
                  <LayoutGrid className="h-4 w-4" />
                  Apps
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="overflow-y-auto">
                <AppsDrawerContent />
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <LayoutGrid className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="overflow-y-auto">
                <AppsDrawerContent />
              </SheetContent>
            </Sheet>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
