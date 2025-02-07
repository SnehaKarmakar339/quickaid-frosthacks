"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Diagnos() {
  const [symptoms, setSymptoms] = useState(["", "", ""])
  const [search, setSearch] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ symptoms, search })
  }

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="p-4 border-b border-gray-800">
        <div className="text-green-500 text-sm mb-2">1.1.1 /app/diagnostics/symptoms</div>
        <div className="flex items-center justify-between border border-gray-700 rounded px-4 py-2">
          <div className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Symptoms</span>
          </div>
          <Button variant="ghost" className="text-gray-400 hover:text-gray-200">
            Home
          </Button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4">
        <div className="flex gap-2 mb-6">
          <Button variant="outline" className="flex-1 border-gray-700 hover:bg-gray-800">
            &nbsp;
          </Button>
          <Button variant="outline" className="flex-1 border-gray-700 hover:bg-gray-800">
            &nbsp;
          </Button>
        </div>

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
                const newSymptoms = [...symptoms]
                newSymptoms[index] = e.target.value
                setSymptoms(newSymptoms)
              }}
              className="bg-transparent border-gray-700 focus:border-gray-600"
            />
          ))}

          <Button type="submit" className="w-full bg-transparent border border-gray-700 hover:bg-gray-800 mt-8">
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}