
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
            My journey as a front-end developer began with a passion for creating
            visually appealing and user-friendly interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Internship Experience</h3>
            <p>
              Throughout my front-end development internship, I gained valuable hands-on
              experience bridging theoretical knowledge with practical application. I
              designed and deployed a real-world portfolio project showcasing my skills,
              achievements, and projects in a structured and visually engaging manner.
            </p>
            <p>
              I worked extensively with HTML, CSS, and JavaScript, implementing responsive
              design principles to ensure cross-device compatibility. This experience
              allowed me to explore best practices in UI/UX design, resulting in a clean,
              professional layout that is both interactive and informative.
            </p>
            <p>
              The project also gave me insight into version control using GitHub, browser
              testing, and iterative refinement based on usability feedback. I learned the
              importance of semantic coding, organized project structuring, and optimizing
              performance for web deployment.
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
                <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
                <p className="text-muted-foreground">
                  Writing semantic, maintainable, and efficient code with modern best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Responsive Design</h4>
                <p className="text-muted-foreground">
                  Creating websites that work seamlessly across all devices and screen sizes.
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
                  Finding creative solutions to complex development challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
                <p className="text-muted-foreground">
                  Working effectively in teams using version control and best practices.
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
