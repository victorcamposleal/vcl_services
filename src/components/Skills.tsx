import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Enterprise Platforms",
    skills: ["SAP Commerce Cloud", "SAP S/4HANA", "SAP CPI", "Salesforce", "Adyen"],
  },
  {
    category: "Development & Integration",
    skills: ["Java", "JavaScript", "React", "Node.js", "Angular", "APIs", "REST"],
  },
  {
    category: "Data & Analytics",
    skills: ["Power BI", "Data Integration", "Machine Learning", "Product Data Governance"],
  },
  {
    category: "Project Management",
    skills: ["Agile", "Requirements Analysis", "UAT", "Stakeholder Management", "Workshop Facilitation"],
  },
];

export const Skills = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skillset spanning business analysis, technical implementation, 
            and enterprise platform expertise
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-base font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
