import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Zap, Brain, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-5 h-5" />,
      skills: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Angular.js"]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"]
    },
    {
      title: "Automation",
      icon: <Zap className="w-5 h-5" />,
      skills: ["n8n", "Webhooks", "API Integration", "Workflow Design"]
    },
    {
      title: "AI/Research",
      icon: <Brain className="w-5 h-5" />,
      skills: ["OpenAI API", "Agent Frameworks", "Prompt Engineering"]
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="w-5 h-5" />,
      skills: ["AWS", "Git", "GitHub", "Vercel", "Netlify", "Postman", "WebSocket"]
    }
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="skill"
                      className="hover:bg-primary hover:text-primary-foreground cursor-default"
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
    </section>
  );
};

export default Skills;