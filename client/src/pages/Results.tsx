import { ChevronLeft, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Geolocation } from "@capacitor/geolocation";
import { useState, useEffect } from "react";
import { IconDirectionsFilled } from "@tabler/icons-react";

interface IResultsNearbyItem {
  name: string;
  description: string;
  address: string;
  phone: string;
  link: string;
}

export default function Results(props: {
  result: { data: { disease: string; description: string } };
  setIsFinding: Function;
}) {
  const { result, setIsFinding } = props;

  const [resultNearby, setResultNearby] = useState<IResultsNearbyItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        const res = await axios.post("/api/v1/nearby", {
          name: `doctor for ${result.data.disease}`,
          location: `${coordinates.coords.latitude},${coordinates.coords.longitude}`,
        });
        setResultNearby(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-300 pt-6">
      <div className="border border-gray-800 mx-4 p-2 rounded flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setIsFinding(false)}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
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
                {result.data.disease}
              </h2>
              <a
                href={result.data.description}
                target="blank"
                className="text-blue-500 underline"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-gray-400 text-lg">
            Doctors and Hospitals Nearby
          </h2>
          <div className="space-y-3">
            {resultNearby.map((item, index) => (
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
      </div>
    </div>
  );
}
