import { ChevronLeft, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";

export default function Results(props: {
  result: { data: { desease: string; description: string } };
}) {
  const { result } = props;

  return (
    <div className="min-h-screen bg-black text-gray-300 pt-6">
      <div className="border border-gray-800 mx-4 p-2 rounded flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/home" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
          </Link>
          <span>Results</span>
        </div>
        <Link to="/home" className="text-gray-400 hover:text-gray-200">
          <Home className="w-4 h-4" />
        </Link>
      </div>

      <div className="p-4 space-y-8 mt-8">
        <div className="space-y-2">
          <h1 className="text-gray-400 text-lg">You most likely have</h1>
          <div className="relative">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-0.5 h-16 bg-green-500/20 absolute top-2 left-1/2 -translate-x-1/2"></div>
            </div>
            <div className="w-full p-6 border-gray-800 text-gray-200 bg-gray-800">
              <h2 className="text-2xl font-semibold mb-2">
                {result.data.desease}
              </h2>
              <p>{result.data.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-gray-400 text-lg">
            Doctors and Hospitals Nearby
          </h2>
          <div className="space-y-3">
            {[1, 2, 3].map((index) => (
              <Card
                key={index}
                className="p-4 bg-black border-gray-800 flex justify-between items-center"
              >
                <div className="space-y-1">
                  <h2 className="h-2 w-32 bg-gray-800 rounded"></h2>
                  <p className="h-2 w-48 bg-gray-800 rounded"></p>
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
