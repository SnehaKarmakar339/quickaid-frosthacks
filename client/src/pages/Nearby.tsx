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
import { IconDirectionsFilled, IconMapPinFilled } from "@tabler/icons-react";
import { Geolocation } from "@capacitor/geolocation";
import { Link } from "react-router";
import { useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";

interface INearbyItem {
  name: string;
  description: string;
  address: string;
  phone: string;
  link: string;
}

export default function Nearby() {
  const [nearby, setNearby] = useState<INearbyItem[]>([]);
  const [location, setLocation] = useState("");
  const [selectedValue, setSelectedValue] = useState("hospital");

  async function handleFind() {
    let res;
    if (location.includes(",")) {
      res = await axios.post("/api/v1/nearby", {
        location,
        filter: selectedValue,
      });
    } else {
      res = await axios.post("/api/v1/nearby", {
        addr: location,
        filter: selectedValue,
      });
    }

    setNearby(res.data);
  }

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
          <Button
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white"
            onClick={async () => {
              const coordinates = await Geolocation.getCurrentPosition();
              setLocation(
                `${coordinates.coords.latitude},${coordinates.coords.longitude}`
              );
            }}
          >
            <IconMapPinFilled className="h-5 w-5" />
            Use Current Location
          </Button>
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Filter:</label>
            <Select
              value={selectedValue}
              onValueChange={(e) => {
                setSelectedValue(e);
              }}
            >
              <SelectTrigger className="w-full bg-zinc-900 border-zinc-800">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800 text-gray-100">
                <SelectItem value="dentist">dentist</SelectItem>
                <SelectItem value="doctor">doctor</SelectItem>
                <SelectItem value="emergency">emergency</SelectItem>
                <SelectItem value="pharmacy">pharmacy</SelectItem>
                <SelectItem value="hospital">hospital</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={handleFind}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white"
          >
            Find Nearby
          </Button>
        </div>
      </div>

      {nearby.length > 1 && (
        <h2 className="text-gray-400 text-lg mt-10 mb-2">Nearby:</h2>
      )}
      <div className="space-y-3">
        {nearby.map((item, index) => (
          <Card
            key={index}
            className="p-4 bg-black border-gray-800 flex justify-between items-center"
          >
            <div className="space-y-1">
              <h2 className="">{item?.name}</h2>
              <h3 className="">{item?.description}</h3>
              <p className="">{item?.address}</p>
              <p className="">{item?.phone}</p>
            </div>
            <div className="h-6 w-6 rounded-ful">
              <a
                href={item?.link}
                target="_blank"
                rel="noreferrer"
                className="h-6 w-6 rounded-full bg-gray-800"
              >
                <IconDirectionsFilled className="h-6 w-6" />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
