
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  percentage: number;
  category: "frontend" | "tools" | "soft";
}

const SkillsSection = () => {
  const [filter, setFilter] = useState<"all" | "frontend" | "tools" | "soft">("all");

  const skills: Skill[] = [
    { name: "HTML", percentage: 90, category: "frontend" },
    { name: "CSS", percentage: 85, category: "frontend" },
    { name: "JavaScript", percentage: 80, category: "frontend" },
    { name: "React", percentage: 75, category: "frontend" },
    { name: "Responsive Design", percentage: 88, category: "frontend" },
    { name: "Tailwind CSS", percentage: 82, category: "frontend" },
    { name: "GitHub", percentage: 78, category: "tools" },
    { name: "VS Code", percentage: 85, category: "tools" },
    { name: "Figma", percentage: 70, category: "tools" },
    { name: "Problem Solving", percentage: 85, category: "soft" },
    { name: "Communication", percentage: 90, category: "soft" },
    { name: "Time Management", percentage: 80, category: "soft" },
  ];

  const filteredSkills = filter === "all" 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Through my internship and personal projects, I've developed a diverse set of technical and soft skills.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center rounded-md border border-input p-1 text-muted-foreground">
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                filter === "all" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              onClick={() => setFilter("all")}
            >
              All Skills
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                filter === "frontend" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              onClick={() => setFilter("frontend")}
            >
              Frontend
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                filter === "tools" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              onClick={() => setFilter("tools")}
            >
              Tools
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                filter === "soft" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              onClick={() => setFilter("soft")}
            >
              Soft Skills
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <Card key={skill.name} 
              className="card-hover overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">{skill.name}</h4>
                  <span className="text-muted-foreground">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
