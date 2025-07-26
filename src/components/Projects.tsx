import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Rekrutly",
      url: "https://rekrutly.org",
      description: "A full-stack job recruitment platform connecting candidates with employers.",
      tech: ["React", "Node.js", "MongoDB"],
      category: "Full-Stack Platform"
    },
    {
      title: "Frontend Chart",
      url: "https://fontendchart.vercel.app",
      description: "Interactive frontend tech visualization built with React and Chart.js.",
      tech: ["React", "Chart.js", "Data Visualization"],
      category: "Analytics Tool"
    },
    {
      title: "Gifting Joy",
      url: "https://reign-boxes-gifting-joy.vercel.app",
      description: "UI for a gifting service with responsive layout and product cards.",
      tech: ["React", "UI/UX", "Responsive Design"],
      category: "E-commerce"
    },
    {
      title: "Food App",
      url: "https://food-app-ctu8.vercel.app",
      description: "Food ordering platform with product cart and quantity logic.",
      tech: ["React", "State Management", "Cart Logic"],
      category: "Food Delivery"
    },
    {
      title: "Clothing Shop",
      url: "https://clothes-ls9a.vercel.app",
      description: "A fashion store interface showcasing product categories and cart functionality.",
      tech: ["React", "E-commerce", "Product Catalog"],
      category: "Fashion"
    },
    {
      title: "News Feed App",
      url: "https://news-indol-rho.vercel.app",
      description: "Real-time news feed app built using REST APIs and React.",
      tech: ["React", "REST APIs", "Real-time Data"],
      category: "News Platform"
    },
    {
      title: "Blog Platform",
      url: "https://blog-egh7.vercel.app",
      description: "A minimalist, responsive blog UI built with Next.js.",
      tech: ["Next.js", "Blog CMS", "SEO Optimized"],
      category: "Content Management"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications built with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-border/50 hover:border-primary/30 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg">
            <Github className="w-4 h-4 mr-2" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;