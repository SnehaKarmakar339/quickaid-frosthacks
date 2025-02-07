"use client"

import { ArrowLeft, Book, Lock, Hand } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Diagnostics() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono p-4">
      {/* Version and Path */}
      <div className="text-green-500 mb-4">
        <span className="mr-4">1.1.2</span>
        <span className="text-gray-500">/app/diagnostics/symptoms</span>
      </div>

      <div className="border border-gray-700 rounded p-4 relative">
        {/* Header with back button */}
        <div className="flex items-center mb-4 border-b border-gray-700 pb-2">
          <Button variant="ghost" className="text-gray-300 hover:text-white p-0 mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <span className="text-lg">Symptoms</span>
        </div>

        {/* Search/Filter Inputs */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input className="bg-transparent border-gray-700 focus:border-gray-500 rounded" />
          <Input className="bg-transparent border-gray-700 focus:border-gray-500 rounded" />
        </div>

        {/* Main Textarea */}
        <Textarea
          placeholder="Describe How You Are Feeling Right Now..."
          className="bg-transparent border-gray-700 focus:border-gray-500 mb-4 h-32 rounded"
        />

        {/* Suggestion Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[1, 2, 3, 4].map((num) => (
            <Button
              key={num}
              variant="outline"
              className="border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white bg-transparent"
            >
              suggestion {num}
            </Button>
          ))}
        </div>

        {/* Submit Button */}
        <Button
          className="w-full bg-transparent border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white"
          variant="outline"
        >
          Submit
        </Button>

        {/* Right Sidebar */}
        <div className="absolute right-[-3rem] top-0 flex flex-col gap-4">
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Book className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Lock className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Hand className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}