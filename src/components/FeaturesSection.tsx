import { Card } from "@/components/ui/card";
import { Server, Gauge, Shield, Wrench, Database, Headphones } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Instant Deployment",
    description: "Get your server up and running in under 5 minutes with our one-click installer.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    description: "Premium hardware and optimized configurations for the best possible performance.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade security to keep your server safe from attacks 24/7.",
  },
  {
    icon: Wrench,
    title: "Full Control Panel",
    description: "Manage your server with our intuitive control panel. Install mods with one click.",
  },
  {
    icon: Database,
    title: "Automatic Backups",
    description: "Daily automated backups ensure your world is always safe and recoverable.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our expert team is always available to help you with any issues or questions.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything You <span className="text-primary">Need</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Powerful features designed to give you the best Minecraft hosting experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 border-border/50 hover:border-primary/50 transition-all group hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-foreground/60">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
