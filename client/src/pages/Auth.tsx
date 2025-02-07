// function Auth() {
//   return <div>Auth</div>;
// }

// export default Auth;



import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"

export default function Auth() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">QuickAid</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-lg mb-6">Sign-Up / Sign-In</div>
          <Button className="w-full" variant="outline">
            Continue with Google
          </Button>
          <Button className="w-full" variant="outline">
            <Github className="mr-2 h-4 w-4" />
            Continue with GitHub
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
