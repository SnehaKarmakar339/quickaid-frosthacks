import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Card } from "@/components/ui/card";
// import { IconMapPinFilled } from "@tabler/icons-react";
import { Link } from "react-router";
import { useState } from "react";

export default function Nearby() {
  const [location, setLocation] = useState("");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-zinc-900/50 rounded-lg p-3">
          <Link to="/home" className="text-zinc-400 hover:text-zinc-50">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-lg font-medium">Find Nearby</h1>
          <Link to="/home" className="text-zinc-400 hover:text-zinc-50">
            <Home className="h-5 w-5" />
          </Link>
        </div>

        {/* Search Section */}
        <div className="bg-zinc-900/50 rounded-lg p-4 space-y-4">
          <Input
            placeholder="Type any location..."
            className="bg-zinc-900 border-zinc-800 text-zinc-50 placeholder:text-zinc-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {/* <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white">
            <IconMapPinFilled className="h-5 w-5" />
            Use Current Location
          </Button> */}

          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Filter:</label>
            <Select defaultValue="clinic">
              <SelectTrigger className="w-full bg-zinc-900 border-zinc-800">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800 text-gray-100">
                <SelectItem value="clinic">clinic, hospital</SelectItem>
                <SelectItem value="pharmacy">pharmacy</SelectItem>
                <SelectItem value="emergency">emergency</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white">
            Find Nearby
          </Button>
        </div>

        {/* History Section */}
        {/* <div className="space-y-4">
          <h2 className="text-zinc-400 text-sm">Search History / Recommend</h2>
          {[1, 2].map((item) => (
            <Card
              key={item}
              className="bg-zinc-900/50 border-zinc-800 p-4 flex items-center justify-between"
            >
              <div className="space-y-1">
                <div className="h-2 w-32 bg-zinc-800 rounded animate-pulse" />
                <div className="h-2 w-48 bg-zinc-800 rounded animate-pulse" />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-zinc-50"
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div> */}
      </div>
    </div>
  );
}
