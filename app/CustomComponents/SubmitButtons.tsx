"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import GoogleLogo from "@/public/google.svg";
import GithubLogo from "@/public/github.svg";

export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
            <Loader2 className="size-4 mr-2 animate-spin"/> Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image src={GoogleLogo} alt="Google logo" className="size-4 mr-2" />
          Sign in with Google
        </Button>
      )}
    </>
  );
}

export function GithubAuthButton() {
    const { pending } = useFormStatus();
  
    return (
      <>
        {pending ? (
          <Button disabled variant="outline" className="w-full">
              <Loader2 className="size-4 mr-2 animate-spin"/> Please wait
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            <Image src={GithubLogo} alt="Github logo" className="size-4 mr-2" />
            Sign in with Github
          </Button>
        )}
      </>
    );
  }