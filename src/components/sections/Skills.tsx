import React from 'react';
import {
  Code,
  Brain,
  Cloud,
  Database,
  Monitor,
  Users,
  Cpu,
  Globe,
  Server,
  BarChart3,
  Lightbulb,
  Award,
  ExternalLink,
  Calendar
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Engineering',
      icon: Server,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      skills: ['Python', 'FastAPI', 'REST APIs', 'Redis', 'Async/Concurrency', 'Authentication', 'SQL', 'PostgreSQL'],
    },
    {
      title: 'Data & ML Engineering',
      icon: Brain,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      skills: ['pandas', 'scikit-learn', 'Model Training', 'Model Evaluation', 'Embeddings', 'RAG Systems', 'Vector DBs', 'NLP'],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      skills: ['AWS (S3, Lambda)', 'Azure (ML, Functions)', 'OCI', 'Docker', 'CI/CD', 'MLOps Basics'],
    },
    {
      title: 'Dev Practices',
      icon: Monitor,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      skills: ['Testing (pytest)', 'Git/GitHub', 'Logging', 'Monitoring', 'Documentation', 'Agile'],
    },
    {
      title: 'Full-Stack (Basics)',
      icon: Code,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      skills: ['JavaScript', 'React (Basics)', 'HTML/CSS', 'Streamlit'],
    },
    {
      title: 'Product & Collaboration',
      icon: Users,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      skills: ['Stakeholder Communication', 'Requirements Gathering', 'Cross-functional Teams', 'Technical Documentation'],
    },
  ];

  const certifications = {
    completed: [
      {
        name: 'Oracle Cloud Infrastructure AI Foundations Associate',
        provider: 'Oracle',
        date: 'January 2025',
        credentialUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=7D13265AE82EF452F1AE896FCFF9F748F23BB6186BC090BB5D8151EF61FE16BD',
        skills: ['OCI Services', 'AI/ML Fundamentals', 'Model Evaluation', 'Generative AI Basics', 'Cloud AI Architecture', 'Prompt Engineering'],
        icon: Cloud,
      },
    ],
    inProgress: [
      {
        name: 'Coursera AI Engineer Professional Certificate',
        provider: 'Coursera',
        expectedDate: 'Q2 2025',
        skills: ['Deep Learning', 'MLOps', 'Model Deployment', 'Production AI Systems'],
        icon: Brain,
      },
      {
        name: 'Google Data Analytics Professional Certificate',
        provider: 'Google',
        expectedDate: 'Q2 2025',
        skills: ['Data Analysis', 'SQL', 'Tableau', 'Data Visualization', 'Statistical Analysis'],
        icon: BarChart3,
      },
      {
        name: 'LLM Agentic AI Engineer Bootcamp',
        provider: 'Udemy',
        expectedDate: 'Q1 2025',
        skills: ['LangChain', 'RAG Systems', 'AI Agents', 'Vector Databases', 'LLM Fine-tuning'],
        icon: Cpu,
      },
    ],
    planned: [
      {
        name: 'AWS Solutions Architect Associate',
        provider: 'Amazon Web Services',
        skills: ['AWS Architecture', 'Cloud Infrastructure', 'Serverless', 'Security', 'Cost Optimization'],
        icon: Server,
      },
      {
        name: 'Azure AI Engineer Associate',
        provider: 'Microsoft',
        skills: ['Azure ML', 'Cognitive Services', 'AI Solutions', 'Model Training', 'Deployment'],
        icon: Cloud,
      },
    ],
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="bg-accent-gradient bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience and continuous learning
            </p>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mt-4"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-medium hover-lift group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mr-4`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Certifications & <span className="bg-accent-gradient bg-clip-text text-transparent">Learning Path</span>
            </h3>

            {/* Completed Certifications */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-green-500" />
                <h4 className="text-xl font-semibold">Completed</h4>
              </div>
              <div className="grid gap-4">
                {certifications.completed.map((cert, index) => (
                  <Card
                    key={index}
                    className="border border-border/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-medium"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <cert.icon className="h-6 w-6 text-green-500" />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                            <div>
                              <h5 className="font-semibold text-lg">{cert.name}</h5>
                              <p className="text-sm text-muted-foreground">{cert.provider}</p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{cert.date}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {cert.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full md:w-auto"
                            onClick={() => window.open(cert.credentialUrl, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Credential
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* In Progress Certifications */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                <h4 className="text-xl font-semibold">In Progress</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.inProgress.map((cert, index) => (
                  <Card
                    key={index}
                    className="border border-border/50 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-medium"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <cert.icon className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold mb-1">{cert.name}</h5>
                          <p className="text-sm text-muted-foreground mb-1">{cert.provider}</p>
                          <p className="text-xs text-muted-foreground">Expected: {cert.expectedDate}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Planned Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-blue-500" />
                <h4 className="text-xl font-semibold">Planned / Next</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.planned.map((cert, index) => (
                  <Card
                    key={index}
                    className="border border-border/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-medium"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <cert.icon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold mb-1">{cert.name}</h5>
                          <p className="text-sm text-muted-foreground">{cert.provider}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="text-xs opacity-70"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16 text-center">
            <Card className="border border-border/50 bg-card-gradient">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Technology evolves rapidly, and I believe in staying ahead of the curve. Currently focusing on 
                  advanced AI/ML techniques, cloud-native architectures, and MLOps best practices to build 
                  the future of intelligent systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;