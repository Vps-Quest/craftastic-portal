import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Server, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Server className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-minecraft-glow bg-clip-text text-transparent">
              MineCraft Hosting
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Button
              variant="outline"
              onClick={() => navigate("/auth")}
              className="border-primary/50 hover:bg-primary/10"
            >
              Login
            </Button>
            <Button onClick={() => navigate("/auth?signup=true")} className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/#features"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/#pricing"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Button
              variant="outline"
              onClick={() => {
                navigate("/auth");
                setIsOpen(false);
              }}
              className="w-full border-primary/50"
            >
              Login
            </Button>
            <Button
              onClick={() => {
                navigate("/auth?signup=true");
                setIsOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
