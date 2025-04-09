
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "web" | "design" | "other";
  demoUrl: string;
  sourceUrl: string;
}

const ProjectsSection = () => {
  const [category, setCategory] = useState<"all" | "web" | "design" | "other">("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
      tags: ["React", "Tailwind CSS", "Responsive"],
      category: "web",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "An admin dashboard for an e-commerce site with analytics, product management, and order tracking.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
      tags: ["React", "Chart.js", "UI/UX"],
      category: "web",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 3,
      title: "Travel App UI Design",
      description: "A modern mobile UI design for a travel booking application with interactive prototypes.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400",
      tags: ["Figma", "UI Design", "Prototyping"],
      category: "design",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 4,
      title: "Recipe Finder",
      description: "A web application that helps users find recipes based on ingredients they have.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400", 
      tags: ["JavaScript", "API Integration", "CSS Grid"],
      category: "web",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A weather application showing current conditions and forecasts using a third-party API.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      tags: ["JavaScript", "API", "CSS"],
      category: "web",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 6,
      title: "Personal Blog Theme",
      description: "A minimalist blog theme designed for content creators focusing on readability.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=400",
      tags: ["WordPress", "CSS", "Responsive"],
      category: "design",
      demoUrl: "#",
      sourceUrl: "#",
    },
  ];

  const filteredProjects = category === "all" 
    ? projects 
    : projects.filter(project => project.category === category);

  return (
    <section id="projects" className="bg-secondary/50 section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Here are some of the projects I've worked on during my internship and personal time.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center rounded-md border border-input p-1 text-muted-foreground">
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                category === "all" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              onClick={() => setCategory("all")}
            >
              All Projects
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                category === "web" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              onClick={() => setCategory("web")}
            >
              Web Development
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                category === "design" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              onClick={() => setCategory("design")}
            >
              UI/UX Design
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="card-hover overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
