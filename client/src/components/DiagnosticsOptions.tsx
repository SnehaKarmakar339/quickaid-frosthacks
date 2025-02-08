import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DiagnosticsOptions() {
  const [symptoms, setSymptoms] = useState(["s1", "s2", ""]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSymptoms([...symptoms, "new symptom"]);
    console.log({ symptoms, search });
  };

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="max-w-2xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-gray-700 focus:border-gray-600"
          />

          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="bg-transparent border-gray-700 focus:border-gray-600"
            >
              {symptom}
            </div>
          ))}

          <Button
            type="submit"
            className="w-full bg-transparent border border-gray-700 hover:bg-gray-800 mt-8"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
