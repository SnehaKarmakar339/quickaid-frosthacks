import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-4 mx-auto">
      {/* Horizontal Scroll Area */}
      <ScrollArea className="w-full whitespace-nowrap mb-8 rounded-md">
        <div className="flex w-full space-x-4 p-4">
          {[1, 2, 3, 4].map((item) => (
            <Card
              key={item}
              className="w-[200px] shrink-0 bg-zinc-900 border-zinc-800"
            >
              <CardContent className="p-4">
                <div className="h-20 rounded-md bg-zinc-800" />
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="bg-zinc-800" />
      </ScrollArea>

      {/* Services Section */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Services</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-sm">
              1
            </div>
            <Card className="flex-1 bg-zinc-900 border-zinc-800">
              <CardContent className="p-4">
                <p className="text-sm">Feeling unwell ? Get help !</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-sm">
              2
            </div>
            <Card className="flex-1 bg-zinc-900 border-zinc-800">
              <CardContent className="p-4">
                <p className="text-sm">
                  Find nearby doctors/clinics/pharmacies
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-sm">
              3
            </div>
            <Card className="flex-1 bg-zinc-900 border-zinc-800">
              <CardContent className="p-4">
                <p className="text-sm">
                  Get an ambulance in case of any emergency
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Daily Health Tips */}
      <div>
        <h2 className="text-lg font-medium mb-4">Daily Health Tips</h2>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((tip) => (
            <Card key={tip} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-4">
                <p className="text-sm">Tip {tip}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
