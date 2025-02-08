import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function DiagnosticsText() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono p-4">
      <div className="border border-gray-700 rounded p-4 relative">
        {/* Main Textarea */}
        <Textarea
          placeholder="Describe How You Are Feeling Right Now..."
          className="bg-transparent border-gray-700 focus:border-gray-500 mb-4 h-32 rounded"
        />

        {/* Suggestion Grid */}
        {/* <div className="grid grid-cols-2 gap-4 mb-4">
          {[1, 2, 3, 4].map((num) => (
            <Button
              key={num}
              variant="outline"
              className="border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white bg-transparent"
            >
              suggestion {num}
            </Button>
          ))}
        </div> */}

        {/* Submit Button */}
        <Button
          className="w-full bg-transparent border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white"
          variant="outline"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
