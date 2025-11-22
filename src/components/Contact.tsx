import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Available for year-long contracts. Let's discuss how I can help transform 
            your business operations and drive digital initiatives.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 border-2 bg-gradient-hero">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a 
                      href="mailto:camposlealvictor@gmail.com"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      camposlealvictor@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Phone</div>
                    <a 
                      href="tel:+34633344043"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      +34 633-344-043
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <div className="text-foreground font-medium">Sevilla, Spain</div>
                    <div className="text-foreground font-medium">Antwerp, Belgium</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">LinkedIn</div>
                    <a 
                      href="https://linkedin.com/in/victor-campos-leal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      victor-campos-leal
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm available for year-long contracts to help your organization achieve 
                  its digital transformation goals. Let's discuss your project requirements.
                </p>
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full text-lg shadow-medium hover:shadow-subtle transition-all"
                    asChild
                  >
                    <a href="mailto:camposlealvictor@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full text-lg border-2"
                    asChild
                  >
                    <a 
                      href="https://linkedin.com/in/victor-campos-leal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
