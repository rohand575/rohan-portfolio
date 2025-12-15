import { ArrowRight, Download, Mail, Github, Linkedin, Briefcase, Cloud, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-accent-gradient bg-clip-text text-transparent">
                Rohan Dhanawade
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
              Building Intelligent AI & Cloud Solutions
            </h2>
          </div>

          {/* Subtext */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Computer Engineer and Master's student in Computer Science (Big Data & AI) at{' '}
              <span className="text-primary font-semibold">SRH Berlin University of Applied Sciences</span>
              {' '}(Graduating March 2026). With 5 years of IT experience, I design, build, and deploy AI, ML, and Cloud-driven solutions.
            </p>
          </div>

          {/* Proof Chips */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/5">
              <Briefcase className="h-4 w-4 mr-2 inline" />
              5+ Years Experience
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-accent/30 bg-accent/5">
              <Cloud className="h-4 w-4 mr-2 inline" />
              Cloud & MLOps
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-purple-500/30 bg-purple-500/5">
              <Brain className="h-4 w-4 mr-2 inline" />
              AI/ML Engineer
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-accent-gradient hover:opacity-90 text-white shadow-glow transition-all duration-300 hover:scale-105"
              >
              <a href="/Resume.pdf" download>
                ⬇️ Download Resume (pdf)
              </a>
            </Button>

            
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="secondary"
              className="hover:bg-secondary/80 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-medium group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;