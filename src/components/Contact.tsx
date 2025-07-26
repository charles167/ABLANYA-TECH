import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Github, Linkedin, Download, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "charlesablanya@gmail.com",
      link: "mailto:charlesablanya@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Lagos, Nigeria",
      link: null
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/ablanyacharles",
      link: "https://github.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ablanyacharles",
      link: "https://linkedin.com"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={contact.label}
                  className="group hover:shadow-md transition-all duration-300 border-border/50 hover:border-primary/30"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {contact.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-muted-foreground">
                          {contact.label}
                        </p>
                        {contact.link ? (
                          <a 
                            href={contact.link}
                            target={contact.link.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="text-sm hover:text-primary transition-colors truncate block"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-sm truncate">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="space-y-6">
            <Card className="gradient-card border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Ready to Start?</CardTitle>
                <CardDescription className="text-base">
                  Let's discuss how we can bring your ideas to life
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-3">
                  <Button 
                    variant="gradient" 
                    size="lg" 
                    className="w-full"
                    asChild
                  >
                    <a href="mailto:charlesablanya@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" asChild>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* CV Download */}
            <Card className="border-accent/20">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl flex items-center justify-center gap-2">
                  <Download className="w-5 h-5 text-accent" />
                  Download CV
                </CardTitle>
                <CardDescription>
                  Get the complete PDF version for your records
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;