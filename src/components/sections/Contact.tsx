import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rohan.dhanawade97@gmail.com',
      href: 'mailto:rohan.dhanawade97@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Berlin, Germany',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rohan-dhanawade-25a616142/',
      color: 'text-blue-600 hover:text-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rohand575',
      color: 'text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white',
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/rohan__d/", // replace with your handle
      icon: Instagram,
      color: "text-pink-500 hover:text-pink-600",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: 'Please fill in all fields',
        description: 'All fields are required to send your message.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Invalid email address',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission (replace with actual implementation)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: 'Please try again or contact me directly via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="bg-accent-gradient bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's connect and collaborate! Feel free to reach out for opportunities, collaborations, or discussions.
            </p>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mt-4"></div>
          </div>

          <div className="max-w-3xl mx-auto px-4">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Get in Touch</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.href === '#' ? (
                          <p className="text-muted-foreground">{info.value}</p>
                        ) : (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle>Connect on Social</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-110 ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="border border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-green-600 dark:text-green-400">Available for Opportunities</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Seeking part-time Product/Backend/ML Engineer roles in Berlin.
                    Available from February 2026.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            {/* <Card className="border border-border/50">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-gradient hover:opacity-90 text-white shadow-glow transition-all duration-300 hover:scale-105 disabled:hover:scale-100 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </div>

          {/* Additional CTA */}
          {/* <div className="text-center mt-16">
            <Card className="border border-border/50 bg-card-gradient">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">Ready to Collaborate?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Whether you're looking to discuss a project, explore opportunities, or just want to connect 
                  with fellow tech enthusiasts, I'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => window.open('mailto:rohan.dhanawade97@gmail.com', '_blank')}
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me Directly
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open('https://www.linkedin.com/in/rohan-dhanawade-25a616142/', '_blank')}
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;