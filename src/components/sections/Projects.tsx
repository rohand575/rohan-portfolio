import React from 'react';
import { ExternalLink, Github, Play, FileText, Zap, Brain, Database, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'House Price Predictor',
      description: 'Built and deployed an ML model predicting house prices with Docker + Azure ML pipelines. Demonstrates MLOps deployment and monitoring skills.',
      longDescription: 'End-to-end machine learning project featuring data preprocessing, model training, containerization with Docker, and deployment on Azure ML. Includes automated pipelines for model retraining and monitoring.',
      icon: Zap,
      technologies: ['Python', 'Scikit-learn', 'Docker', 'Azure ML', 'MLOps'],
      status: 'Deployed',
      links: [
        { type: 'github', url: '#', label: 'View Code' },
        { type: 'demo', url: '#', label: 'Live Demo' },
      ],
      featured: true,
    },
    {
      title: 'AI Guitar App',
      description: 'An AI-powered conversational system that generates strumming patterns and chords from natural language prompts. Includes recording, editing timeline, and intelligent music suggestions.',
      longDescription: 'Master\'s thesis concept combining NLP with symbolic music generation. Features natural language processing for music requests, pattern generation algorithms, and an intuitive interface for musicians.',
      icon: Brain,
      technologies: ['NLP', 'Symbolic Music Generation', 'Python', 'Cloud Deployment'],
      status: 'Concept',
      links: [
        { type: 'document', url: '#', label: 'Concept Note' },
      ],
      featured: true,
    },
    {
      title: 'PDF Chatbot',
      description: 'A LangChain + Streamlit app that allows users to query information from PDF documents using natural language.',
      longDescription: 'Document Q&A system using RAG (Retrieval Augmented Generation) architecture. Users can upload PDFs and ask questions about the content using natural language queries.',
      icon: FileText,
      technologies: ['LangChain', 'OpenAI', 'FAISS', 'Streamlit', 'RAG'],
      status: 'Completed',
      links: [
        { type: 'github', url: '#', label: 'GitHub' },
        { type: 'demo', url: '#', label: 'Demo' },
      ],
      featured: false,
    },
    {
      title: 'Tesla OSINT Project',
      description: 'Group project predicting Tesla stock performance by modeling supplier stock dynamics with stacked models (Random Forest + XGBoost).',
      longDescription: 'Financial modeling project analyzing the relationship between Tesla\'s supplier performance and stock price movements. Used ensemble methods and feature engineering for improved predictions.',
      icon: Database,
      technologies: ['Python', 'Pandas', 'XGBoost', 'Random Forest', 'Financial Analysis'],
      status: 'Completed',
      links: [
        { type: 'presentation', url: '#', label: 'Presentation' },
      ],
      featured: false,
    },
    {
      title: 'Smart Pill Box',
      description: 'Medication reminder box integrated with Android app + Google Firebase for real-time alerts.',
      longDescription: 'IoT healthcare solution combining hardware sensors with mobile app development. Features automated medication reminders, adherence tracking, and emergency notifications.',
      icon: Smartphone,
      technologies: ['IoT', 'Android (Java)', 'Firebase', 'Hardware Integration'],
      status: 'Completed',
      links: [
        { type: 'project', url: '#', label: 'Project Details' },
      ],
      featured: false,
    },
  ];

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'github':
        return Github;
      case 'demo':
        return Play;
      case 'document':
      case 'presentation':
      case 'project':
        return FileText;
      default:
        return ExternalLink;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Deployed':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Completed':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Concept':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="bg-accent-gradient bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of technical projects demonstrating AI/ML, cloud deployment, and full-stack development skills
            </p>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mt-4"></div>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-large hover-lift group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, linkIndex) => {
                      const IconComponent = getLinkIcon(link.type);
                      return (
                        <Button
                          key={linkIndex}
                          variant="outline"
                          size="sm"
                          className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          <IconComponent className="h-4 w-4 mr-2" />
                          {link.label}
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Other <span className="bg-accent-gradient bg-clip-text text-transparent">Projects</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-medium hover-lift group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <project.icon className="h-5 w-5 text-accent" />
                      </div>
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Links */}
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link, linkIndex) => {
                        const IconComponent = getLinkIcon(link.type);
                        return (
                          <Button
                            key={linkIndex}
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            onClick={() => window.open(link.url, '_blank')}
                          >
                            <IconComponent className="h-3 w-3 mr-1" />
                            <span className="text-xs">{link.label}</span>
                          </Button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <Card className="border border-border/50 bg-card-gradient">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Github className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Explore More on GitHub</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Check out my GitHub profile for more projects, contributions, and code samples 
                  showcasing my development journey.
                </p>
                <Button
                  className="bg-accent-gradient hover:opacity-90 text-white shadow-glow transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://github.com/rohan-dhanawade', '_blank')}
                >
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
