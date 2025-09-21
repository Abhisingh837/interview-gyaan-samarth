import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  MessageSquare, 
  BookmarkPlus, 
  Languages, 
  Trophy, 
  Users,
  Clock,
  BarChart3 
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      title: "AI-Powered Practice",
      description: "Get personalized feedback and improve with our intelligent chatbot assistant",
      icon: Brain,
      badge: "Smart AI"
    },
    {
      title: "Multi-Language Support",
      description: "Practice in Hindi and English to feel comfortable in any interview setting",
      icon: Languages,
      badge: "Hindi + English"
    },
    {
      title: "Bookmark Questions",
      description: "Save important questions and create your personalized study collection",
      icon: BookmarkPlus,
      badge: "Save & Study"
    },
    {
      title: "Mock Interviews",
      description: "Simulate real interview scenarios with timer and scoring system",
      icon: Clock,
      badge: "Timed Practice"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics and performance insights",
      icon: BarChart3,
      badge: "Analytics"
    },
    {
      title: "Community Support",
      description: "Connect with other aspirants, share experiences and get motivated",
      icon: Users,
      badge: "Community"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose INTERVIEWWALA?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive features designed to give you the edge in every interview
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-card"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-gradient-hero rounded-xl">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};