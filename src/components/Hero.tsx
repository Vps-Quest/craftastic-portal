import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Zap, Shield, Clock } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
      
      <div className="container relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground/80">Premium Minecraft Hosting</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-minecraft-glow to-foreground bg-clip-text text-transparent">
              Host Your Minecraft
            </span>
            <br />
            <span className="text-primary">Server Today</span>
          </h1>
          
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Experience lightning-fast performance, 99.9% uptime, and 24/7 support. 
            Get your server running in under 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => navigate("/auth?signup=true")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary/50 hover:bg-primary/10 px-8 h-12 text-lg"
            >
              View Pricing
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">DDoS Protected</h3>
              <p className="text-sm text-foreground/60 text-center">
                Enterprise-grade protection
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">Instant Setup</h3>
              <p className="text-sm text-foreground/60 text-center">
                Server ready in minutes
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur">
              <Clock className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">24/7 Support</h3>
              <p className="text-sm text-foreground/60 text-center">
                Always here to help
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
