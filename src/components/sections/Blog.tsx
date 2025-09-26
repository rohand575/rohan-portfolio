import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Deploying ML Models on Azure with Docker',
      excerpt: 'A comprehensive guide to containerizing and deploying machine learning models using Azure ML and Docker containers.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'MLOps',
      status: 'Coming Soon',
      tags: ['Azure ML', 'Docker', 'MLOps', 'Deployment'],
    },
    {
      title: 'Building Data Pipelines with Redis and Logstash',
      excerpt: 'Learn how to build efficient, scalable data pipelines using Redis for caching and Logstash for data processing.',
      date: '2024-02-01',
      readTime: '12 min read',
      category: 'Data Engineering',
      status: 'Coming Soon',
      tags: ['Redis', 'Logstash', 'Data Pipeline', 'Performance'],
    },
    {
      title: 'From Enterprise IT to AI: My Career Journey',
      excerpt: 'Reflections on transitioning from traditional IT support roles to AI/ML engineering, including lessons learned and advice for others.',
      date: '2024-02-15',
      readTime: '6 min read',
      category: 'Career',
      status: 'Coming Soon',
      tags: ['Career', 'AI/ML', 'Personal Growth', 'Advice'],
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'MLOps':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Data Engineering':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Career':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Blog & <span className="bg-accent-gradient bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sharing knowledge and experiences from my journey in AI, cloud computing, and software development
            </p>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mt-4"></div>
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-medium hover-lift group"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2 md:mb-0">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                        {post.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 ml-4"
                      disabled
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="text-center mt-16">
            <Card className="border border-border/50 bg-card-gradient">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm working on these blog posts and will be sharing insights about AI/ML, cloud deployment, 
                  and career transitions in tech. Connect with me on LinkedIn to get notified when they're published!
                </p>
                <Button
                  className="bg-accent-gradient hover:opacity-90 text-white shadow-glow transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://www.linkedin.com/in/rohan-dhanawade-25a616142/', '_blank')}
                >
                  Follow on LinkedIn
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;