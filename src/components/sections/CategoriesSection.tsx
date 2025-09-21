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
      title: "Government Exams",
      description: "UPSC, SSC, Bank PO, Railway, and State Government positions",
      icon: "🏛️",
      questionsCount: "2,500+",
      difficulty: "Medium",
      trending: true,
      companies: ["UPSC", "SSC", "Bank PO", "Railway"]
    },
    {
      title: "Corporate MNCs",
      description: "Microsoft, Google, Amazon, TCS, Infosys, and other top companies",
      icon: "🏢",
      questionsCount: "3,200+",
      difficulty: "High",
      trending: true,
      companies: ["Microsoft", "Google", "TCS", "Amazon"]
    },
    {
      title: "Engineering",
      description: "Technical interviews for Software, Mechanical, Civil, and Electrical",
      icon: "⚙️",
      questionsCount: "1,800+",
      difficulty: "High",
      trending: false,
      companies: ["L&T", "BHEL", "ISRO", "DRDO"]
    },
    {
      title: "Law",
      description: "CLAT, Judiciary, Corporate Law, and Legal Practice interviews",
      icon: "⚖️",
      questionsCount: "900+",
      difficulty: "Medium",
      trending: false,
      companies: ["CLAT", "Judiciary", "Corporate Law"]
    },
    {
      title: "Medicine",
      description: "NEET PG, Medical Officer, Hospital Administration positions",
      icon: "🩺",
      questionsCount: "1,200+",
      difficulty: "High",
      trending: true,
      companies: ["AIIMS", "NEET PG", "Medical Officer"]
    },
    {
      title: "Teaching",
      description: "CTET, NET, School Teacher, and Professor positions",
      icon: "👨‍🏫",
      questionsCount: "1,500+",
      difficulty: "Medium",
      trending: false,
      companies: ["CTET", "UGC NET", "KVS", "NVS"]
    },
    {
      title: "MBA & Business",
      description: "CAT, XAT, Management roles, and Business Development",
      icon: "📈",
      questionsCount: "1,100+",
      difficulty: "Medium",
      trending: true,
      companies: ["IIM", "CAT", "XAT", "SNAP"]
    },
    {
      title: "Freelancing & Startups",
      description: "Remote work, Startup culture, and Entrepreneurship",
      icon: "💡",
      questionsCount: "800+",
      difficulty: "Medium",
      trending: false,
      companies: ["Startup", "Remote", "Freelance"]
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group p-6 hover:shadow-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 bg-gradient-card relative overflow-hidden"
            >
              {category.trending && (
                <Badge className="absolute top-3 right-3 bg-gradient-hero text-white">
                  Trending
                </Badge>
              )}
              
              <div className="space-y-4">
                {/* Icon and Emoji */}
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2">
                    {category.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.difficulty}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                  
                  {/* Companies */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {category.companies.slice(0, 3).map((company, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {company}
                      </Badge>
                    ))}
                    {category.companies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{category.companies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Stats and CTA */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <span className="text-sm font-medium text-primary">
                    {category.questionsCount} Questions
                  </span>
                  <Button variant="ghost" size="sm" className="p-2">
                    <BookOpen className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                  </Button>
                </div>
              </div>
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