import { Card } from "@/components/ui/card";
import { Users, BookOpen, Trophy, Star } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Success Stories",
      description: "Students placed in dream companies"
    },
    {
      icon: BookOpen,
      value: "10,000+",
      label: "Questions Bank",
      description: "Curated by industry experts"
    },
    {
      icon: Trophy,
      value: "85%",
      label: "Success Rate",
      description: "Students crack interviews in first attempt"
    },
    {
      icon: Star,
      value: "4.8/5",
      label: "User Rating",
      description: "Based on 25,000+ reviews"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join the community of successful professionals who cracked their interviews with INTERVIEWWALA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 bg-white/20 rounded-full">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-lg font-medium text-white">{stat.label}</p>
                  <p className="text-sm text-white/70">{stat.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};