import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 rounded-full gradient-primary opacity-20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 rounded-full bg-accent opacity-20" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Badge */}
          <Badge variant="accent" className="text-sm px-4 py-2 animate-glow">
            Available for opportunities
          </Badge>
          
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              ABLANYA CHARLES
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Software Engineer | Automation Engineer | AI Researcher
            </h2>
          </div>
          
          {/* Location and Contact */}
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Lagos, Nigeria
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              charlesablanya@gmail.com
            </div>
          </div>
          
          {/* Professional Summary */}
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Full-stack Software Engineer with <span className="text-primary font-semibold">6+ years</span> of experience designing and building scalable, user-focused applications. 
            Passionate about clean code, accessibility, and real-world product development.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg" className="group">
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
            <Button variant="outline" size="lg">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;