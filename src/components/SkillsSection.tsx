
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  percentage: number;
  category: "languages" | "tools" | "frameworks" | "soft";
}

const SkillsSection = () => {
  const [filter, setFilter] = useState<"all" | "languages" | "tools" | "frameworks" | "soft">("all");

  const skills: Skill[] = [
    { name: "C/C++", percentage: 85, category: "languages" },
    { name: "Python", percentage: 80, category: "languages" },
    { name: "Javascript", percentage: 75, category: "languages" },
    { name: "HTML+CSS", percentage: 85, category: "languages" },
    { name: "ReactJs", percentage: 70, category: "frameworks" },
    { name: "Node.js", percentage: 65, category: "frameworks" },
    { name: "Git & GitHub", percentage: 80, category: "tools" },
    { name: "MongoDB", percentage: 70, category: "tools" },
    { name: "Firebase", percentage: 75, category: "tools" },
    { name: "MySQL", percentage: 70, category: "tools" },
    { name: "Problem Solving", percentage: 85, category: "soft" },
    { name: "Self-learning", percentage: 90, category: "soft" },
    { name: "Presentation", percentage: 80, category: "soft" },
    { name: "Adaptability", percentage: 85, category: "soft" },
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
            Through my education and internships, I've developed a diverse set of technical and soft skills.
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
                filter === "languages" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              onClick={() => setFilter("languages")}
            >
              Languages
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                filter === "frameworks" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              onClick={() => setFilter("frameworks")}
            >
              Frameworks
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
