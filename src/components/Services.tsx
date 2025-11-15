import { Card } from "@/components/ui/card";
import { Database, ShoppingCart, Workflow, LineChart, Boxes, Code } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "eCommerce Implementation",
    description: "SAP Commerce Cloud (Hybris) deployment and configuration across multiple markets. From B2B platforms to complete order-to-cash automation.",
  },
  {
    icon: Database,
    title: "SAP S/4HANA Integration",
    description: "End-to-end SAP integration projects connecting CRM, ERP, and Commerce platforms. Expert in SAP CPI and seamless data synchronization.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Automate manual workflows using AI, machine learning, and intelligent integration. Proven track record reducing operational workload by 46%.",
  },
  {
    icon: LineChart,
    title: "Digital Transformation Strategy",
    description: "Strategic planning and execution for enterprise digital initiatives. From requirements gathering to UAT and deployment across international teams.",
  },
  {
    icon: Boxes,
    title: "Salesforce Integration",
    description: "Connect Salesforce with SAP ecosystems for unified customer data management. Seamless CRM-ERP synchronization and process alignment.",
  },
  {
    icon: Code,
    title: "Technical Solutions Development",
    description: "Full-stack development capabilities with Java, JavaScript, React, and Node.js. Bridge business requirements with technical implementation.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Specialized Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive business analysis and technical implementation services 
            tailored for enterprise-scale projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 border-2 bg-card"
            >
              <div className="rounded-lg bg-accent w-12 h-12 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
