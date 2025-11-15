import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-muted py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>© 2025 Victor Campos Leal. Business Analyst · SAP & eCommerce Specialist</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
