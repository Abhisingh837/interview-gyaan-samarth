import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Trophy, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Questions", value: "10K+", icon: BookOpen },
    { label: "Success Rate", value: "85%", icon: Trophy },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium animate-bounce-in">
            <Sparkles className="w-4 h-4 mr-2" />
            India's #1 Interview Preparation Platform
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground animate-fade-in">
              Crack Your{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Dream Job
              </span>
              <br />
              Interview
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Master interview skills with our comprehensive question bank, 
              AI-powered practice sessions, and expert guidance. Available in Hindi & English.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" variant="hero" className="px-8 py-4 text-lg">
              Start Practicing Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              Browse Categories
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 animate-fade-in">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center space-x-3">
                  <div className="p-2 bg-gradient-hero rounded-lg">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};