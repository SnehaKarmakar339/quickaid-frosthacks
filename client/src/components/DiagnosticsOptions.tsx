import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DiagnosticsOptions() {
  const [symptoms, setSymptoms] = useState(["", "", ""]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
            <Input
              key={index}
              placeholder={`Symp ${index + 1}`}
              value={symptom}
              onChange={(e) => {
                const newSymptoms = [...symptoms];
                newSymptoms[index] = e.target.value;
                setSymptoms(newSymptoms);
              }}
              className="bg-transparent border-gray-700 focus:border-gray-600"
            />
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
