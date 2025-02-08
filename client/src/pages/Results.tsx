import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";

export default function Results() {
  return (
    <div className="min-h-screen bg-black text-gray-300 pt-6">
      {/* Navigation */}
      <div className="border border-gray-800 mx-4 p-2 rounded flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/home" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
          </Link>
          <span>Recommendations</span>
        </div>
        <Link to="/home" className="text-gray-400 hover:text-gray-200">
          <Home className="w-4 h-4" />
        </Link>
      </div>

      {/* Main content */}
      <div className="p-4 space-y-8">
        {/* Disease section */}
        <div className="space-y-2">
          <p className="text-gray-400 text-center">You most likely have</p>
          <div className="relative">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-0.5 h-16 bg-green-500/20 absolute top-2 left-1/2 -translate-x-1/2"></div>
            </div>
            <Button
              variant="outline"
              className="w-full py-6 text-lg border-gray-800 text-gray-200 bg-gray-800"
            >
              DISEASE 1
            </Button>
          </div>
          <div className="text-center">
            <Button variant="link" className="text-gray-400 text-sm">
              View other possibilities <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Doctors section */}
        <div className="space-y-4">
          <h2 className="text-gray-400">Doctors and Hospitals Nearby</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((index) => (
              <Card
                key={index}
                className="p-4 bg-black border-gray-800 flex justify-between items-center"
              >
                <div className="space-y-1">
                  <div className="h-2 w-32 bg-gray-800 rounded"></div>
                  <div className="h-2 w-48 bg-gray-800 rounded"></div>
                </div>
                <div className="h-6 w-6 rounded-full bg-gray-800"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
