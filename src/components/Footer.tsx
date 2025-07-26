import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>&copy; {currentYear} Ablanya Charles</span>
            <Heart className="w-4 h-4 text-accent animate-pulse" />
            <span>ABLANYA TECH</span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="mailto:charlesablanya@gmail.com"
              className="p-2 rounded-lg bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Visit GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            Designed and developed with modern technologies • React • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;