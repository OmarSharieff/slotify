 //Because conform requires client to provide JavaScript bundle to client
"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "./SubmitButtons";

interface iAppProps {
  fullName: string;
  email: string;
  profileImage: string;
}

export function SettingsForm({fullName, email, profileImage}: iAppProps) {
  return (
    <Card>
    <CardHeader>
      <CardTitle>Settings</CardTitle>
      <CardDescription>Manage your account settings!</CardDescription>
    </CardHeader>
    <form >
      <CardContent className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <Label>Full Name</Label>
          <Input defaultValue={fullName} placeholder="Slotifier"/>
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>Email</Label>
          <Input disabled defaultValue={email} placeholder="slotifier@xyz.com"/>
        </div>
      </CardContent>
      <CardFooter>
        <SubmitButton text="Save Changes"/>
      </CardFooter>
    </form>
  </Card>
  )
}