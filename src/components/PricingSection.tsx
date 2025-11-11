import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$5",
    description: "Perfect for small communities",
    features: [
      "2GB RAM",
      "Unlimited Slots",
      "DDoS Protection",
      "Daily Backups",
      "Mod Support",
      "24/7 Support",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    description: "Most popular choice",
    features: [
      "4GB RAM",
      "Unlimited Slots",
      "DDoS Protection",
      "Daily Backups",
      "Mod Support",
      "Priority Support",
      "Free Domain",
      "Advanced Control Panel",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$25",
    description: "For large communities",
    features: [
      "8GB RAM",
      "Unlimited Slots",
      "DDoS Protection",
      "Hourly Backups",
      "Mod Support",
      "Dedicated Support",
      "Free Domain",
      "Advanced Control Panel",
      "Dedicated IP",
      "Custom Plugins",
    ],
  },
];

const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Choose the perfect plan for your server. All plans include our core features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-8 border-2 transition-all hover:scale-105 ${
                plan.popular
                  ? "border-primary shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-foreground/60 text-sm">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-foreground/60">/month</span>
                </div>

                <Button
                  className={`w-full h-12 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  onClick={() => navigate("/auth?signup=true")}
                >
                  Get Started
                </Button>

                <div className="space-y-3 pt-6 border-t border-border">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
