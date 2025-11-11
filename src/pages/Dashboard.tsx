import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Server, Users, Activity, Settings, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate("/auth");
        return;
      }
      setUserEmail(data.session.user.email || "");
      setLoading(false);
    };

    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "Successfully logged out of your account.",
    });
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <nav className="border-b border-border bg-background/80 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-foreground/60">{userEmail}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome to Your <span className="text-primary">Dashboard</span>
          </h1>
          <p className="text-foreground/60">Manage your Minecraft servers from here</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Active Servers</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gaming-blue/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-gaming-blue" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Total Players</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gaming-purple/10 flex items-center justify-center">
                <Activity className="h-6 w-6 text-gaming-purple" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Uptime</p>
                <p className="text-2xl font-bold">99.9%</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8">
          <div className="text-center space-y-4">
            <Settings className="h-16 w-16 text-primary mx-auto" />
            <h2 className="text-2xl font-bold">No Servers Yet</h2>
            <p className="text-foreground/60 max-w-md mx-auto">
              Create your first Minecraft server to get started. Choose a plan and deploy in minutes!
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate("/#pricing")}
            >
              Create Your First Server
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
