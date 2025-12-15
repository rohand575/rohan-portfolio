import React from 'react';
import { ExternalLink, Github, Play, FileText, Zap, Brain, Database, Smartphone, AlertCircle, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

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
      architecture: [
        'Data ingestion & preprocessing pipeline',
        'Model training with hyperparameter tuning',
        'Docker containerization for reproducibility',
        'Azure ML deployment with auto-scaling',
        'Monitoring dashboard for drift detection',
      ],
      challenges: [
        'Containerized the entire pipeline to ensure reproducibility across dev/prod environments',
        'Implemented automated model retraining triggers based on data drift detection metrics',
      ],
      impact: 'Reduced deployment time from manual ~2 hours to automated 15-minute CI/CD pipeline. Added monitoring to catch model drift.',
      links: [
        { type: 'github', url: '#', label: 'View Code' },
        { type: 'demo', url: '#', label: 'Live Demo' },
      ],
      featured: true,
    },
    {
      title: 'Conversational Guitar Generator',
      description: 'AI-powered conversational system that generates guitar strumming patterns and chord progressions from natural language prompts.',
      problem: 'Enable musicians to create music through conversation instead of requiring technical music theory knowledge.',
      whatIBuilt: 'Master\'s thesis project combining NLP with symbolic music generation. Built a system that interprets natural language music requests (e.g., "happy summer song in G major") and generates appropriate chord progressions and strumming patterns using music theory algorithms and LLM-based intent understanding.',
      icon: Brain,
      technologies: ['NLP', 'LLMs', 'Symbolic Music', 'Python', 'FastAPI', 'React (Basics)', 'Music Theory Algorithms'],
      status: 'In Development',
      architecture: [
        'LLM-based natural language intent parser',
        'Music theory constraint solver for chord progressions',
        'Strumming pattern generator with rhythm templates',
        'FastAPI backend + React frontend with audio playback',
        'Timeline editor for pattern customization',
      ],
      challenges: [
        'Designed constraint-based music theory engine to ensure generated chords are musically valid and match user intent',
        'Built prompt engineering pipeline to extract musical attributes (key, mood, tempo) from conversational input',
      ],
      impact: 'Next: Add benchmarks for user satisfaction and generation accuracy. Targeting <2 second response time for generation.',
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
      architecture: [
        'PDF text extraction & intelligent chunking',
        'Embedding generation with OpenAI',
        'FAISS vector store for semantic search',
        'LangChain orchestration layer',
        'Streamlit frontend with chat interface',
      ],
      challenges: [
        'Optimized chunk size (500 tokens with 50 token overlap) to balance context vs. retrieval precision',
        'Added source citation feature to show which PDF pages were used for each answer',
      ],
      impact: 'Deployed to production. Next: Add usage analytics and query latency metrics.',
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
      architecture: [
        'FastAPI REST endpoints for chat',
        'OpenAI GPT-3.5/4 integration with system prompts',
        'Session-based conversation memory',
        'React frontend with WebSocket support',
      ],
      challenges: [
        'Implemented conversation context management to stay within token limits while maintaining coherent dialogue',
        'Added character personality system prompts to enable different chatbot personas',
      ],
      impact: 'Next: Add latency benchmarks and response quality metrics.',
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

          {/* Featured Projects - Case Study Format */}
          <div className="space-y-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-large group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 space-y-6">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                      <h4 className="font-semibold text-sm">Problem</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                      {project.problem}
                    </p>
                  </div>

                  <Separator />

                  {/* What I Built */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-blue-500" />
                      <h4 className="font-semibold text-sm">What I Built</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                      {project.whatIBuilt}
                    </p>
                  </div>

                  <Separator />

                  {/* Architecture */}
                  {project.architecture && (
                    <>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Layers className="h-4 w-4 text-purple-500" />
                          <h4 className="font-semibold text-sm">Architecture</h4>
                        </div>
                        <ul className="space-y-2 pl-6">
                          {project.architecture.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Separator />
                    </>
                  )}

                  {/* Challenges & Fixes */}
                  {project.challenges && (
                    <>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <h4 className="font-semibold text-sm">Challenges & Fixes</h4>
                        </div>
                        <ul className="space-y-2 pl-6">
                          {project.challenges.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Separator />
                    </>
                  )}

                  {/* Impact */}
                  {project.impact && (
                    <>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-accent" />
                          <h4 className="font-semibold text-sm">Impact</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                          {project.impact}
                        </p>
                      </div>
                      <Separator />
                    </>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 pt-2">
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
