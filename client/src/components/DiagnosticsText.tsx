import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function DiagnosticsText(props: {
  setIsFinding: (isFinding: boolean) => void;
  setResult: (result: any) => void;
}) {
  const { setIsFinding, setResult } = props;

  const [text, setText] = useState("");

  async function handleSubmission() {
    try {
      const res: any = await axios.post("/api/v1/diagnostics", {
        data: {
          symptomsText: text,
        },
      });
      setResult(res?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setText("");
      setIsFinding(true);
    }
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono p-4">
      <div className="border border-gray-700 rounded p-4 relative">
        <Textarea
          placeholder="Describe How You Are Feeling Right Now..."
          className="bg-transparent border-gray-700 focus:border-gray-500 mb-4 h-32 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          className="w-full bg-transparent border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white"
          variant="outline"
          onClick={handleSubmission}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
