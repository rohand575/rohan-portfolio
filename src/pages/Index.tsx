import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import HeroScrollVideoCanvas from '@/components/sections/HeroScrollVideoCanvas';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
// import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme-dark">
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroScrollVideoCanvas
            framePathPattern="/hero/frames/frame_{index}.jpg"
            totalFrames={192}
            fallbackImage="/hero-final.mp4"
            enableAnimation={true}
          >
            <>
              <About />
              <Skills />
              <Experience />
            </>
          </HeroScrollVideoCanvas>
          <Projects />
          {/* <Blog /> */}
          <Contact />
        </main>
        
        {/* <footer className="bg-muted/30 border-t border-border py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © 2024 Rohan Dhanawade. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </footer> */}
      </div>
    </ThemeProvider>
  );
};

export default Index;
