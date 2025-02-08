import { ArrowLeft } from "lucide-react";
import DiagnosticsText from "@/components/DiagnosticsText";
import { Link } from "react-router";
import { useState } from "react";
import Results from "@/pages/Results";

export default function Diagnostics() {
  const [isFinding, setIsFinding] = useState(false);
  const [result, setResult] = useState({
    data: { disease: "", description: "" },
  });

  return (
    <>
      {isFinding ? (
        <Results result={result} setIsFinding={setIsFinding} />
      ) : (
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
          <DiagnosticsText setIsFinding={setIsFinding} setResult={setResult} />
        </div>
      )}
    </>
  );
}
