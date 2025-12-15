import React from 'react';
import { ExternalLink, Github, Play, FileText, Zap, Brain, Database, Smartphone, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'House Price Predictor',
      description: 'Built and deployed an ML model predicting house prices with Docker + Azure ML pipelines. Demonstrates MLOps deployment and monitoring skills.',
      problem: 'Deploy a production-ready ML model with automated retraining, monitoring, and scalable cloud infrastructure.',
      whatIBuilt: 'End-to-end MLOps pipeline featuring data preprocessing, model training with scikit-learn, containerization with Docker, automated CI/CD deployment to Azure ML, and real-time monitoring dashboards for model performance tracking.',
      icon: Zap,
      technologies: ['Python', 'Scikit-learn', 'Docker', 'Azure ML', 'MLOps', 'CI/CD', 'FastAPI'],
      status: 'Deployed',
      keyPoints: [
        'Data ingestion & preprocessing pipeline',
        'Docker containerization for reproducibility',
        'Azure ML deployment with auto-scaling',
      ],
      impact: 'Reduced deployment time from manual ~2 hours to automated 15-minute CI/CD pipeline.',
      links: [
        { type: 'github', url: '#', label: 'View Code' },
        { type: 'demo', url: '#', label: 'Live Demo' },
      ],
      featured: true,
    },
    {
      title: 'Zen Engineering Solutions',
      description: 'Complete business website for an engineering services firm with SEO-optimized public site and secure admin dashboard for quotation management.',
      problem: 'Create a professional web presence for an engineering services firm with internal tools for quotation management and client data handling.',
      whatIBuilt: 'Complete business solution featuring a multi-page professional website with SEO optimization, custom domain deployment with HTTPS, and a secure admin dashboard. The solution emphasizes performance, clean UI, and real-world business usability for managing quotations and client interactions.',
      icon: Layers,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs', 'GitHub Pages'],
      status: 'Deployed',
      keyPoints: [
        'Multi-page professional business website',
        'Secure admin dashboard for quotation generation',
        'SEO-ready structure with custom domain HTTPS',
      ],
      impact: 'Deployed to production with custom domain. Provides complete business web presence and internal management tools.',
      links: [
        { type: 'demo', url: 'https://zenengineerings.com/', label: 'Live Website' },
      ],
      featured: true,
    },
    {
      title: 'Conversational Guitar Generator',
      description: 'AI-powered conversational system that generates guitar strumming patterns and chord progressions from natural language prompts.',
      problem: 'Enable musicians to create music through conversation instead of requiring technical music theory knowledge.',
      whatIBuilt: 'Master\'s thesis project combining NLP with symbolic music generation. Built a system that interprets natural language music requests (e.g., "happy summer song in G major") and generates appropriate chord progressions and strumming patterns using music theory algorithms and LLM-based intent understanding.',
      icon: Brain,
      technologies: ['NLP', 'LLMs', 'Symbolic Music', 'Python', 'FastAPI', 'React', 'Music Theory'],
      status: 'In Development',
      keyPoints: [
        'LLM-based natural language intent parser',
        'Music theory constraint solver for chord progressions',
        'FastAPI backend + React frontend with audio playback',
      ],
      impact: 'Targeting <2 second response time for generation.',
      links: [
        { type: 'github', url: '#', label: 'GitHub' },
        { type: 'document', url: '#', label: 'Thesis Proposal' },
      ],
      featured: true,
    },
    {
      title: 'Doc-Chat AI',
      description: 'LangChain-based RAG system that allows users to query PDF documents using natural language.',
      problem: 'Enable users to extract insights from lengthy PDF documents without manual reading and searching.',
      whatIBuilt: 'Document Q&A system using RAG (Retrieval Augmented Generation) architecture. Users upload PDFs, the system chunks and embeds content into FAISS vector store, then answers questions using semantic search + OpenAI GPT for natural language responses.',
      icon: FileText,
      technologies: ['LangChain', 'OpenAI', 'FAISS', 'Streamlit', 'RAG', 'Python'],
      status: 'Deployed',
      keyPoints: [
        'PDF text extraction & intelligent chunking',
        'FAISS vector store for semantic search',
        'Streamlit frontend with chat interface',
      ],
      impact: 'Deployed to production with usage analytics and query latency metrics.',
      links: [
        { type: 'github', url: 'https://github.com/rohand575/doc-chat-ai', label: 'GitHub' },
        { type: 'demo', url: 'https://doc-ai.rohan-dhanawade.de/', label: 'Live Demo' },
      ],
      featured: true,
    },
    {
      title: 'Character AI Chatbot',
      description: 'FastAPI + OpenAI powered chatbot with customizable character personalities and conversational memory.',
      problem: 'Build an interactive chatbot with persistent personality and conversation history.',
      whatIBuilt: 'Full-stack chatbot application with FastAPI backend integrating OpenAI API, conversation memory management, and a simple frontend interface for real-time chat interactions.',
      icon: Brain,
      technologies: ['FastAPI', 'OpenAI API', 'Python', 'React', 'REST APIs', 'Conversational AI'],
      status: 'Completed',
      keyPoints: [
        'FastAPI REST endpoints for chat',
        'OpenAI GPT integration with system prompts',
        'Session-based conversation memory',
      ],
      impact: 'Supports multiple character personas with coherent dialogue management.',
      links: [
        { type: 'github', url: '#', label: 'GitHub' },
      ],
      featured: true,
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

          {/* Featured Projects - Compact Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-medium hover-lift group flex flex-col"
              >
                <CardContent className="p-5 flex flex-col flex-grow">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Key Points */}
                  {project.keyPoints && (
                    <div className="mb-4 flex-grow">
                      <ul className="space-y-1.5">
                        {project.keyPoints.map((point, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Impact */}
                  {project.impact && (
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground italic">
                        {project.impact}
                      </p>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-border/50">
                    {project.links.map((link, linkIndex) => {
                      const IconComponent = getLinkIcon(link.type);
                      return (
                        <Button
                          key={linkIndex}
                          variant="ghost"
                          size="sm"
                          className="h-8 px-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          <IconComponent className="h-3.5 w-3.5 mr-1.5" />
                          <span className="text-xs">{link.label}</span>
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
                  onClick={() => window.open('https://github.com/rohand575', '_blank')}
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
