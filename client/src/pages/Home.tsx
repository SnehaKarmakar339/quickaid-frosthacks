import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  // Ambulance,
  Building2,
  Phone,
  Heart,
  Activity,
  // Plus,
  Clock,
} from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";

export default function Home() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const emergencyContacts = [
    { title: "Emergency Helpline", number: "112", badge: "24/7" },
    { title: "Medical Support", number: "102", badge: "Toll Free" },
  ];
  const [tips, setTips] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/v1/tips");
      const data = res.data;
      setTips(data);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg mb-12 border border-gray-700">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-500" />
          <h1 className="text-2xl font-mono">QuickAid</h1>
        </div>
        <div className="flex items-center gap-2 text-sm">
          {/* <Badge variant="outline" className="bg-blue-500/10 text-blue-400">
            User
          </Badge> */}
          <Avatar className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500" />
        </div>
      </header>

      {/* Services Section */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-green-400" />
          Quick Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/diagnostics">
            <ServiceCard
              icon={<AlertCircle className="w-6 h-6 text-yellow-400" />}
              title="Feeling unwell ?"
              subtitle="Get help !"
              gradient="from-yellow-500/10 to-orange-500/10"
            />
          </Link>
          <Link to="/nearby">
            <ServiceCard
              icon={<Building2 className="w-6 h-6 text-blue-400" />}
              title="Find nearby"
              subtitle="doctors / clinics / pharmacies"
              gradient="from-blue-500/10 to-cyan-500/10"
            />
          </Link>
          {/* <Link to="/ambulance">
            <ServiceCard
              icon={<Ambulance className="w-6 h-6 text-red-400" />}
              title="Book & track ambulance"
              subtitle="in case of any emergency"
              gradient="from-red-500/10 to-pink-500/10"
            />
          </Link> */}
          {/* <ServiceCard
            icon={<Plus className="w-6 h-6 text-green-400" />}
            title="Emergency"
            subtitle="Contact Services"
            gradient="from-green-500/10 to-emerald-500/10"
          /> */}
        </div>
      </section>

      {/* Health Tips */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-400" />
          Daily Health Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <Card
              key={index}
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-gray-700"
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-gray-300">{tip}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Emergency Contacts Carousel */}
      <div className="relative bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-gray-700 rounded-lg mb-6 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Phone className="w-5 h-5 text-red-400" />
            Emergency Contacts
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveSlide((prev) => Math.max(0, prev - 1))}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              disabled={activeSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setActiveSlide((prev) =>
                  Math.min(emergencyContacts.length - 1, prev + 1)
                )
              }
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              disabled={activeSlide === emergencyContacts.length - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-medium mb-1">
                          {contact.title}
                        </h3>
                        <p className="text-2xl font-bold text-blue-400">
                          {contact.number}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-red-500/20 text-red-400"
                      >
                        {contact.badge}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SOS Button */}
      {/* <div className="flex justify-center">
        <Button
          variant="outline"
          className="w-20 h-20 rounded-full border-2 border-red-500 hover:bg-red-500/20 hover:scale-105 transition-all duration-300 animate-pulse"
        >
          <span className="text-red-500 font-bold text-xl">SOS</span>
        </Button>
      </div> */}
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  subtitle,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  gradient: string;
}) {
  return (
    <Card
      className={`bg-gradient-to-r ${gradient} border-gray-700 hover:scale-[1.02] transition-transform`}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-700 bg-gray-800/50">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="font-medium mb-1">{title}</h3>
            <p className="text-sm text-gray-400">{subtitle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
