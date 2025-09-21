import { Button } from "@/components/ui/button";
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Categories",
      links: [
        "Government Jobs",
        "Corporate",
        "Engineering",
        "Medical",
        "Law",
        "Teaching"
      ]
    },
    {
      title: "Resources",
      links: [
        "Mock Tests",
        "Study Material",
        "Blog",
        "Success Stories",
        "Interview Tips",
        "Career Guidance"
      ]
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Contact Us",
        "FAQ",
        "Feedback",
        "Report Issue",
        "Community"
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-hero rounded-lg p-2">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-background">
                INTERVIEWWALA
              </span>
            </div>
            <p className="text-background/80 text-sm">
              India's most trusted interview preparation platform. Master your interview skills and land your dream job with our comprehensive question bank and AI-powered practice sessions.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Button key={index} variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-background">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-secondary" />
              <span className="text-background/80 text-sm">support@interviewwala.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-secondary" />
              <span className="text-background/80 text-sm">+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-secondary" />
              <span className="text-background/80 text-sm">Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm">
            © 2024 INTERVIEWWALA. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};