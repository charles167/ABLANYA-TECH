import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer & Automation Engineer",
      company: "Freelance & Personal Projects",
      location: "Remote",
      period: "Aug 2018 – Present",
      type: "Freelance",
      achievements: [
        "Built and deployed platforms like Rekrutly, Food App, and Gifting Joy using React and Node.js",
        "Developed frontend tools like Frontend Chart and news dashboards using REST APIs and Chart.js",
        "Designed and automated workflows using n8n, handling webhooks, API chains, and auto-notifications",
        "Created intelligent AI agents using OpenAI API for content generation, task routing, and chatbot systems",
        "Mentored junior developers on best practices, accessibility, and scalable architecture"
      ]
    }
  ];

  const education = {
    degree: "B.Sc. Computer Science",
    institution: "Crawford University",
    period: "2012 – 2016"
  };

  return (
    <section className="py-20 px-6" id="experience">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and academic foundation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Building className="w-6 h-6 text-primary" />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="mb-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
              >
                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl text-primary">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        <div className="flex items-center gap-2 mb-1">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </CardDescription>
                    </div>
                    <Badge variant="accent" className="shrink-0">
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" />
              Education
            </h3>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  {education.degree}
                </CardTitle>
                <CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      {education.institution}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {education.period}
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
            
            {/* Download CV Section */}
            <Card className="mt-8 gradient-card border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">
                  📄 Downloadable CV
                </CardTitle>
                <CardDescription>
                  Get the complete PDF version or request a printable layout
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;