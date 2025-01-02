import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function OnboardingRoute() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Slot<span className="text-primary">ify</span></CardTitle>
          <CardDescription>We need the following information to set up your profile!</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-y-5 ">

        </CardContent>
      </Card>
    </div>
  )
}