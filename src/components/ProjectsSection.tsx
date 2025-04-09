
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
  category: "web" | "ai" | "other";
  demoUrl: string;
  sourceUrl: string;
}

const ProjectsSection = () => {
  const [category, setCategory] = useState<"all" | "web" | "ai" | "other">("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Resume Builder",
      description: "A web application allowing users to create their resume in real time. Used Firebase Authentication (SDK) and Cloud Firestore to store data.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
      tags: ["Firebase", "Bootstrap", "HTML", "CSS", "JavaScript"],
      category: "web",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills, created during the web development internship at Vault of Codes.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "web",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 3,
      title: "Fruit Disease Detection",
      description: "A deep learning-based system for detecting fruit diseases using image processing techniques and neural networks.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400",
      tags: ["Python", "TensorFlow", "OpenCV", "Keras", "ANN"],
      category: "ai",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 4,
      title: "Language Translator",
      description: "A language translator project for accessibility, allowing users to translate text between different languages.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400", 
      tags: ["Python", "NLP", "Machine Learning", "UI Design"],
      category: "ai",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 5,
      title: "Video Downloader",
      description: "An application for downloading videos from various platforms, supporting different quality options and formats.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      tags: ["Python", "UI Design", "API Integration"],
      category: "other",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 6,
      title: "Apartment Management System",
      description: "A system designed to manage apartment complexes, including tenant management, maintenance requests, and billing.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=400",
      tags: ["Database Design", "User Interface", "Backend", "Frontend"],
      category: "other",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 7,
      title: "Hospital Management System",
      description: "A comprehensive system for managing hospital operations, including patient records, appointments, and billing.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400",
      tags: ["Database Design", "User Interface", "Backend", "Frontend"],
      category: "other",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 8,
      title: "Cancer Prediction using ML",
      description: "A research project on predicting cancer using machine learning techniques based on patient data and medical records.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      tags: ["Machine Learning", "Data Analysis", "Healthcare", "Research"],
      category: "ai",
      demoUrl: "#",
      sourceUrl: "#",
    }
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
            Here are some of the projects I've worked on during my academic studies and internships.
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
                category === "ai" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              onClick={() => setCategory("ai")}
            >
              AI & ML Projects
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                category === "other" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              onClick={() => setCategory("other")}
            >
              Other Projects
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
