import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Cpu, Globe, Zap } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 gradient-bg">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            🚀 The Future of Learning is Here
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Master <span className="text-primary">Python</span> & <span className="text-primary">DSA</span>
            <br /> The Modern Way.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive, interactive platform designed to take you from beginner to expert in Python programming and Data Structures & Algorithms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 h-12" onClick={() => navigate("/dashboard")}>
              Start Learning Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-12" onClick={() => navigate("/courses/python-fundamentals/topics")}>
              View Curriculum
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with proven pedagogical methods to deliver the best learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code2 className="h-10 w-10 text-primary" />}
              title="Interactive Content"
              description="Learn by reading rich, formatted content with syntax highlighting and interactive examples."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-primary" />}
              title="Instant Feedback"
              description="Test your knowledge immediately with quick check quizzes at the end of every topic."
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-primary" />}
              title="Modern Curriculum"
              description="Up-to-date content covering Python 3.10+, modern best practices, and real-world scenarios."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 Course Platform. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4 bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">
      {description}
    </p>
  </div>
);

export default Index;
