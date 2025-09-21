import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";

export const TrendingSection = () => {
  const trendingCategories = [
    {
      category: "Tech Giants",
      companies: [
        { name: "Microsoft", questions: 450, recent: "2 hours ago", difficulty: "Hard" },
        { name: "Google", questions: 520, recent: "1 hour ago", difficulty: "Hard" },
        { name: "Amazon", questions: 380, recent: "3 hours ago", difficulty: "Medium" },
        { name: "Meta", questions: 290, recent: "5 hours ago", difficulty: "Hard" }
      ]
    },
    {
      category: "Indian MNCs",
      companies: [
        { name: "TCS", questions: 650, recent: "30 mins ago", difficulty: "Medium" },
        { name: "Infosys", questions: 540, recent: "1 hour ago", difficulty: "Medium" },
        { name: "Wipro", questions: 420, recent: "2 hours ago", difficulty: "Medium" },
        { name: "HCL", questions: 350, recent: "4 hours ago", difficulty: "Easy" }
      ]
    }
  ];

  const competitiveExams = [
    { name: "UPSC", questions: 1200, applicants: "12L+", badge: "🏛️", difficulty: "Very Hard" },
    { name: "CLAT", questions: 800, applicants: "2.5L+", badge: "⚖️", difficulty: "Hard" },
    { name: "NEET PG", questions: 950, applicants: "1.8L+", badge: "🩺", difficulty: "Hard" },
    { name: "CAT", questions: 680, applicants: "3.2L+", badge: "📈", difficulty: "Hard" }
  ];

  const preparationBoxes = [
    { title: "IIM Interview Prep", category: "MBA", progress: 75, users: "5.2K", timeToComplete: "2 weeks" },
    { title: "FAANG Coding Round", category: "Tech", progress: 60, users: "8.1K", timeToComplete: "3 weeks" },
    { title: "UPSC Personality Test", category: "Government", progress: 45, users: "3.8K", timeToComplete: "1 month" },
    { title: "Medical Interview", category: "Healthcare", progress: 55, users: "2.9K", timeToComplete: "2 weeks" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            What's Hot Right Now
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trending Interview Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the most popular interview preparations and latest questions from top companies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Popular Companies */}
          <div className="lg:col-span-2 space-y-6">
            {trendingCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{category.category}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.companies.map((company, idx) => (
                    <Card key={idx} className="p-4 hover:shadow-card transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            {company.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {company.name}
                            </h4>
                            <p className="text-xs text-muted-foreground flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {company.recent}
                            </p>
                          </div>
                        </div>
                        <Badge variant={company.difficulty === "Hard" ? "destructive" : "secondary"}>
                          {company.difficulty}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {company.questions} Questions
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Competitive Exams & Preparation Boxes */}
          <div className="space-y-6">
            {/* Competitive Exams */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Competitive Exams</h3>
              <div className="space-y-3">
                {competitiveExams.map((exam, index) => (
                  <Card key={index} className="p-4 hover:shadow-card transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{exam.badge}</span>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exam.name}
                          </h4>
                          <p className="text-xs text-muted-foreground flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {exam.applicants} applicants
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs mb-1">
                          {exam.difficulty}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{exam.questions} Qs</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Preparation Boxes */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Popular Prep Tracks</h3>
              <div className="space-y-3">
                {preparationBoxes.map((box, index) => (
                  <Card key={index} className="p-4 hover:shadow-card transition-all duration-300 cursor-pointer group">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                            {box.title}
                          </h4>
                          <Badge variant="outline" className="text-xs mt-1">
                            {box.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-foreground font-medium">{box.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <div 
                            className="bg-gradient-hero h-1.5 rounded-full transition-all duration-300"
                            style={{ width: `${box.progress}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{box.users} enrolled</span>
                          <span>{box.timeToComplete}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8">
            View All Trending Categories
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};