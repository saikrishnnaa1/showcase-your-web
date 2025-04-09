
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/50 section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            I'm a Computer Science student specializing in AI & ML, with hands-on experience in web development and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Education & Experience</h3>
            <p>
              I'm currently pursuing my Bachelor of Technology in Computer Science and Engineering (AI & ML) at Vardhaman College of Engineering, Shamshabad with a CGPA of 8.1.
            </p>
            <p>
              I've completed internships at YBI Foundation as a Data Science Intern, where I analyzed large datasets and developed ML models for customer behavior prediction. I also worked with AWS services like EC2, S3, and RDS.
            </p>
            <p>
              At Vault of Codes, I worked as a Web Development Intern and developed a Resume Builder using HTML, CSS, and JavaScript. Additionally, I created a portfolio website showcasing my projects and skills.
            </p>
            <div className="pt-4">
              <Button size="lg">Download CV</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Development</h4>
                <p className="text-muted-foreground">
                  Skilled in web development using HTML, CSS, JavaScript, and ReactJS.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Data Science</h4>
                <p className="text-muted-foreground">
                  Experience in data analysis, machine learning, and deploying ML models.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Problem Solving</h4>
                <p className="text-muted-foreground">
                  Strong analytical skills with expertise in algorithms and data structures.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Leadership</h4>
                <p className="text-muted-foreground">
                  Led teams of peers and mentored students to ensure successful performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
