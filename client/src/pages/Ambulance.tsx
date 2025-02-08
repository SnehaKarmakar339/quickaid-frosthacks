
import { ChevronLeft } from "lucide-react"
import {Link} from "react-router"
export default function Ambulance() {
  return (
    <div className="min-h-screen bg-black p-4 font-mono text-[#00ff00]">
      {/* Version number and path */}
      <div className="mb-4 text-sm">3.1 /app/ambulance/find</div>

      {/* Header bar */}
      <div className="mb-6 flex items-center gap-2 rounded border border-[#00ff00] p-2">
        <ChevronLeft className="h-4 w-4" />
        <div className="flex-1 text-center">Ambulance Booking</div>
        <Link to="/" className="text-sm">
          Home
        </Link>
      </div>

      {/* Main form */}
      <div className="mb-6 rounded border border-[#00ff00] p-4">
        <div className="space-y-4">
          <div className="rounded border border-[#00ff00] p-2">From:</div>
          <div className="rounded border border-[#00ff00] p-2">To:</div>
          <button className="w-full rounded border border-[#00ff00] p-2 text-center hover:bg-[#00ff00] hover:bg-opacity-20">
            Find Nearby Ambulance
          </button>
        </div>
      </div>

      {/* Suggestions grid */}
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            className="rounded border border-[#00ff00] p-2 text-center hover:bg-[#00ff00] hover:bg-opacity-20"
          >
            suggestion {num}
          </button>
        ))}
      </div>
    </div>
  )
}

