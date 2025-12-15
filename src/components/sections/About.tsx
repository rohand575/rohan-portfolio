import React from 'react';
import { GraduationCap, MapPin, Guitar, Video, Dumbbell, Plane, Rocket, BookOpen, Briefcase, Download, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Master\'s in Computer Science (Big Data & AI) at SRH Berlin',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Berlin, Germany (Originally from India)',
    },
  ];

  const interests = [
    { icon: Guitar, name: 'Guitar' },
    { icon: Video, name: 'Videography & Editing' },
    { icon: Dumbbell, name: 'Fitness' },
    { icon: Plane, name: 'Traveling' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="bg-accent-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  I am a Computer Engineer from India, currently pursuing my Master's in Computer Science 
                  (Big Data & AI) in Berlin, Germany. With a background spanning both enterprise IT and 
                  hands-on software development, I bring 5 years of professional experience in building 
                  scalable solutions.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  My career began at <span className="text-primary font-semibold">Tata Consultancy Services</span>, 
                  where I worked on enterprise support and development projects. Later, at{' '}
                  <span className="text-primary font-semibold">Metron Security</span>, I took ownership 
                  of end-to-end projects involving Python development, cloud integration, and data pipelines.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Today, I am building a career in AI, Machine Learning, and Cloud engineering, with a 
                  strong focus on MLOps. Outside of tech, I enjoy playing guitar, videography & editing, 
                  fitness, and traveling.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <Card key={index} className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-medium">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Interests & Stats */}
            <div className="space-y-8">
              {/* Interests */}
              <Card className="border border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Interests & Hobbies</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300"
                      >
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                          <interest.icon className="h-6 w-6 text-accent" />
                        </div>
                        <span className="text-sm font-medium text-center">{interest.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">2026</div>
                      <div className="text-sm text-muted-foreground">Graduation Year</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">2</div>
                      <div className="text-sm text-muted-foreground">Countries Lived</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">10+</div>
                      <div className="text-sm text-muted-foreground">Projects Built</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What I'm Doing Now Section */}
          <div className="mt-20">
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 via-background to-primary/5">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    What I'm <span className="bg-accent-gradient bg-clip-text text-transparent">Doing Now</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">Current focus & availability</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                      <Rocket className="h-7 w-7 text-accent" />
                    </div>
                    <h4 className="font-semibold mb-2">Building</h4>
                    <p className="text-sm text-muted-foreground">
                      Conversational Guitar Strumming & Chord Progression Generator (symbolic music + NLP)
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <BookOpen className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      MLOps best practices + Cloud deployment patterns (Azure/AWS) + LLM Agentic systems
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mb-3">
                      <Briefcase className="h-7 w-7 text-green-500" />
                    </div>
                    <h4 className="font-semibold mb-2">Seeking</h4>
                    <p className="text-sm text-muted-foreground">
                      Part-time Product/Backend/ML Engineer roles in Berlin (Available from February 2026)
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    className="gap-2"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/Resume.pdf';
                      link.download = 'Rohan_Dhanawade_Resume.pdf';
                      link.click();
                    }}
                  >
                    <Download className="h-5 w-5" />
                    Download Resume (PDF)
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Mail className="h-5 w-5" />
                    Email Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;