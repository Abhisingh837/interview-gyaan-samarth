import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Briefcase, 
  Code, 
  Scale, 
  Stethoscope, 
  GraduationCap,
  TrendingUp,
  Shield,
  Plane,
  BookOpen
} from "lucide-react";

export const CategoriesSection = () => {
  const categories = [
    {
      title: "Government Jobs",
      description: "UPSC, SSC, Banking, Railway exams",
      icon: Building2,
      questionsCount: "2.5K+",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Corporate",
      description: "MNC interviews, HR rounds, behavioral",
      icon: Briefcase,
      questionsCount: "1.8K+",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Engineering",
      description: "Technical interviews, coding rounds",
      icon: Code,
      questionsCount: "3.2K+",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Law",
      description: "Legal interviews, judicial services",
      icon: Scale,
      questionsCount: "900+",
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Medical",
      description: "NEET PG, medical interviews",
      icon: Stethoscope,
      questionsCount: "1.2K+",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Teaching",
      description: "NET, SET, B.Ed interviews",
      icon: GraduationCap,
      questionsCount: "800+",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "MBA",
      description: "IIM interviews, group discussions",
      icon: TrendingUp,
      questionsCount: "600+",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Defense",
      description: "CDS, NDA, military interviews",
      icon: Shield,
      questionsCount: "700+",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Interview Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your domain and start practicing with curated questions from industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 bg-background"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.questionsCount}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-start p-0 h-auto font-medium text-primary group-hover:text-primary"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Explore Questions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};