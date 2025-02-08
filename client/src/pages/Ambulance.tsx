import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import { useState } from "react";

export default function Ambulance() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border border-emerald-600/30 rounded-lg p-3 bg-black/50">
          <Link to="/home" className="text-gray-400 hover:text-gray-200">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-lg font-medium text-emerald-50">
            Ambulance Booking
          </h1>
          <Link to="/home" className="text-gray-400 hover:text-gray-200">
            <Home className="h-5 w-5" />
          </Link>
        </div>

        {/* Main Form */}
        <div className="border border-emerald-600/30 rounded-lg p-4 space-y-4 bg-black/50">
          <div className="space-y-3">
            <Input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From:"
              className="bg-transparent border-emerald-600/30 text-emerald-50 focus:border-emerald-500 focus:ring-emerald-500/20"
            />
            <Input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To:"
              className="bg-transparent border-emerald-600/30 text-emerald-50 focus:border-emerald-500 focus:ring-emerald-500/20"
            />
          </div>
          <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white border-none">
            Find Nearby Ambulance
          </Button>
        </div>

        {/* Suggestions Grid */}
        {/* <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((num) => (
            <Button
              key={num}
              variant="outline"
              className="border-emerald-600/30 text-emerald-50 hover:bg-emerald-600/20 hover:border-emerald-500"
            >
              suggestion {num}
            </Button>
          ))}
        </div> */}
      </div>
    </div>
  );
}
