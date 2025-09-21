import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Users, BookOpen, Trophy, Sparkles, Search, MessageCircle } from "lucide-react";

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
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground animate-fade-in tracking-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                INTERVIEWWALA
              </span>
            </h1>
            
            {/* Taglines */}
            <div className="space-y-3 animate-fade-in">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                Sawaal Ho Koi Bhi, Jawaab Hai Interviewwala!
              </p>
              <p className="text-lg md:text-xl text-muted-foreground italic">
                "Any Question, Interviewwala Has The Answer!"
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Master interview skills with our comprehensive question bank, 
              AI-powered practice sessions, and expert guidance. Available in Hindi & English.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-3 p-2 bg-background/80 backdrop-blur rounded-2xl border shadow-lg">
              <Select>
                <SelectTrigger className="md:w-48 border-0 bg-transparent">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="government">Government Exams</SelectItem>
                  <SelectItem value="corporate">Corporate MNCs</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="law">Law</SelectItem>
                  <SelectItem value="medicine">Medicine</SelectItem>
                  <SelectItem value="teaching">Teaching</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search interview questions, companies, or topics..." 
                  className="pl-10 border-0 bg-transparent text-base"
                />
              </div>
              
              <Button variant="hero" size="lg" className="px-6">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask AI
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" variant="hero" className="px-12 py-6 text-xl font-semibold">
              Find My Interview
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="px-12 py-6 text-xl">
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