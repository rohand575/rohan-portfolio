import React from 'react';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: 'Metron Security Pvt. Ltd.',
      position: 'Software Engineer',
      period: '2022 – 2024',
      location: 'India',
      type: 'Full-time',
      description: 'Led end-to-end development of Python applications for data processing and cloud integration.',
      achievements: [
        'Built Python data collection apps using REST APIs, AWS S3, Azure, and Syslog to automate ingestion from 10+ security data sources, reducing manual data handling by ~80%',
        'Designed and optimized Logstash + OPAL parsing pipelines for Cisco Umbrella, WatchGuard, Snowflake, and ServiceNow to process 100K+ events/day with <2min latency',
        'Implemented Redis + MySQL dual-storage architecture to enable fast lookups (sub-50ms) while maintaining structured data persistence for audit trails',
        'Owned end-to-end delivery of Cisco Meraki MDM integration by gathering requirements from security team, building the integration, and deploying to production with zero downtime',
        'Created internal Slack and Jira automation apps to streamline incident response workflows, cutting team response time by ~30%',
        'Produced comprehensive technical documentation and stakeholder reports that enabled cross-functional teams to deploy and maintain systems independently',
      ],
      technologies: ['Python', 'AWS S3', 'Azure', 'Redis', 'MySQL', 'Logstash', 'REST APIs', 'Cisco Umbrella', 'ServiceNow'],
    },
    {
      company: 'Tata Consultancy Services',
      position: 'Systems Engineer',
      period: '2019 – 2022',
      location: 'India',
      type: 'Full-time',
      description: 'Provided enterprise support and development for PLM systems and internal applications.',
      achievements: [
        'Supported General Electric\'s Teamcenter PLM platform by resolving 500+ ServiceNow tickets within SLA, maintaining 95%+ customer satisfaction rating',
        'Managed incident resolution using ITIL frameworks to ensure timely escalation and root cause analysis, reducing recurring issues by 40%',
        'Contributed to internal CRM Android app (Java) by fixing 20+ bugs and implementing 5 new features to improve sales team productivity',
        'Executed UAT-to-production data migrations for contracts and deals using SQL scripts and validation checks, achieving 100% data accuracy across 10K+ records',
        'Collaborated with cross-functional teams (dev, QA, product) to gather requirements, troubleshoot issues, and deliver client solutions on time',
      ],
      technologies: ['Java', 'ServiceNow', 'Teamcenter PLM', 'Android Development', 'ITIL', 'Data Migration'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="bg-accent-gradient bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              5+ years of professional experience building scalable solutions across enterprise and product environments
            </p>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mt-4"></div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'}`}>
                  <Card className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-medium">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Building className="h-4 w-4 text-primary" />
                            <span className="font-semibold text-primary">{exp.company}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="mt-2 sm:mt-0">
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-1 sm:mt-0">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="border border-border/50 bg-card-gradient">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">Looking for New Opportunities</h3>
                <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                  Seeking part-time Product/Backend/ML Engineer roles in Berlin where I can
                  apply my experience in building scalable, intelligent systems.
                </p>
                <Badge variant="outline" className="bg-primary/5 border-primary text-primary">
                  Available February 2026
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;