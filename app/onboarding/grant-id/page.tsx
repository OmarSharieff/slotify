import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import VideoGIF from "@/public/almost-there.gif";
import { CalendarCheck2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OnboardingRouteTwo() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>You are almost Done!</CardTitle>
          <CardDescription>
            We have to now connect to your calendar to your account
          </CardDescription>
          <Image src={VideoGIF} alt="Almost finished GIF" className="w-full rounded-lg"/>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/">
            <CalendarCheck2 className="size-4 mr-2"/>
            Connect Calendar to Your Account</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
