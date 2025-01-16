import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Topbar from "@/components/Topbar";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="h-full rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden">
      <Topbar />
      <div className="h-[85vh] bg-neutral-900 flex items-center justify-center">
        <div className="text-center space-y-8 px-4">
          {/* Large animated musical note */}
          <div className="flex justify-center animate-bounce">
            <img src="/ronaldo_siu_siu.png" alt="Siuuu" />
          </div>

          {/* Error message */}
          <div className="space-y-4">
            <h1 className="text-7xl font-bold text-white">404</h1>
            <h2 className="text-2xl font-semibold text-white">
              Page not found
            </h2>
            <p className="text-neutral-400 max-w-md mx-auto">
              Ooppps, What are you do ing ?. Let's login first.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              onClick={() => navigate("/")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white w-full sm:w-auto"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
