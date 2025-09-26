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
  Lightbulb
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      skills: ['Python', 'C++', 'Java', 'SQL'],
    },
    {
      title: 'AI/ML',
      icon: Brain,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Generative AI (learning)'],
    },
    {
      title: 'Cloud / DevOps',
      icon: Cloud,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      skills: ['AWS', 'Azure', 'OCI', 'Docker', 'CI/CD', 'MLOps basics'],
    },
    {
      title: 'Data & Tools',
      icon: Database,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      skills: ['Redis', 'MySQL', 'Snowflake', 'Logstash', 'ServiceNow'],
    },
    {
      title: 'Frontend',
      icon: Monitor,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      skills: ['Team player', 'Leadership', 'Adaptability', 'Critical thinking'],
    },
  ];

  const certifications = [
    {
      name: 'OCI AI Foundations Associate 2025',
      provider: 'Oracle',
      status: 'Completed',
      icon: Cloud,
    },
    {
      name: 'Google Data Analytics Certificate',
      provider: 'Google',
      status: 'In Progress',
      icon: BarChart3,
    },
    {
      name: 'AWS & Azure Certifications',
      provider: 'Amazon & Microsoft',
      status: 'Upcoming',
      icon: Server,
    },
  ];

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
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-medium"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <h4 className="font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{cert.provider}</p>
                    
                    <Badge 
                      variant={cert.status === 'Completed' ? 'default' : cert.status === 'In Progress' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {cert.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
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