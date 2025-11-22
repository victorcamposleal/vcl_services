import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const handleContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Stop wasting money and resources on fragmented systems. I deliver end-to-end {" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
             digital transformation projects—on time and on budget.
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
           I stop the financial loss caused by fragmented business systems. For 4+ years, I have built seamless integrations between enterprise Sales, E-commerce, and Operations, instantly automating order processing and reducing manual workload.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg group shadow-medium hover:shadow-subtle transition-all"
              onClick={handleContact}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-2"
              onClick={handleContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">11</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">€800K</div>
              <div className="text-sm text-muted-foreground">Projects Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
