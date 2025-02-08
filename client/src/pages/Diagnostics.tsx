import { ArrowLeft } from "lucide-react";
import DiagnosticsOptions from "@/components/DiagnosticsOptions";
import DiagnosticsText from "@/components/DiagnosticsText";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router";

export default function Diagnostics() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between border border-gray-700 rounded px-4 py-2">
          <div className="flex items-center gap-2">
            <Link to="/home" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <span>Symptoms</span>
          </div>
          <Link to="/home" className="text-gray-400 hover:text-gray-200">
            Home
          </Link>
        </div>
      </div>
      <Tabs defaultValue="text">
        <TabsList className="grid w-full grid-cols-2 p-4">
          <TabsTrigger value="text">Text</TabsTrigger>
          <TabsTrigger value="options">Options</TabsTrigger>
        </TabsList>
        <TabsContent value="text">
          <DiagnosticsText />
        </TabsContent>
        <TabsContent value="options">
          <DiagnosticsOptions />
        </TabsContent>
      </Tabs>
    </div>
  );
}
