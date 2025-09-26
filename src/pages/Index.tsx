import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Blog />
          <Contact />
        </main>
        
        <footer className="bg-muted/30 border-t border-border py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © 2024 Rohan Dhanawade. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
