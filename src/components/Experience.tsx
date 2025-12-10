import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export const Experience = () => {
  return (
    <section id="about" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Professional Background
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 4 years of experience driving successful enterprise implementations 
            and digital transformation initiatives
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 border-2 bg-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="rounded-lg bg-primary w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-card-foreground mb-1">
                  Business Analyst
                </h3>
                <div className="text-lg text-muted-foreground mb-4">
                  Sibelco · 2021 - Present · Remote (Antwerp)
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground ml-16">
              <p className="leading-relaxed">
              </p>
              
              <ul className="space-y-2 list-disc list-inside">
                <li>Automated 46% of annual orders (~187K/year) through Salesforce-SAP-AI integration</li>
                <li>Leading SAP Commerce Cloud B2B eCommerce implementation across 11 European countries, managing €800K budget with on-time delivery and full integration scope.</li>
                <li>Reduced onboarding time by 30% through comprehensive training programs</li>
                <li>Managed Adyen payment platform operations ensuring financial accuracy</li>
                <li>Led cross-functional workshops and requirements gathering for international rollouts</li>
              </ul>
            </div>
          </Card>
          
          <Card className="p-8 border-2 bg-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="rounded-lg bg-accent w-12 h-12 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-card-foreground mb-1">
                  Education & Certifications
                </h3>
              </div>
            </div>
            
            <div className="space-y-3 text-muted-foreground ml-16">
              <div>
                <div className="font-semibold text-card-foreground">Master in Artificial Intelligence</div>
                <div className="text-sm">THE POWER · Currently pursuing (2025)</div>
              </div>
              <div>
                <div className="font-semibold text-card-foreground">Master in Business</div>
                <div className="text-sm">ESERP Business School, Barcelona</div>
              </div>
              <div>
                <div className="font-semibold text-card-foreground">Full-stack Development</div>
                <div className="text-sm">Java OOP · JavaScript Bootcamp</div>
              </div>
              <div>
                <div className="font-semibold text-card-foreground">Mechanical Engineering</div>
                <div className="text-sm">Tecnológico de Monterrey, Mexico</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
