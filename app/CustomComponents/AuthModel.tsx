import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { signIn } from "../lib/auth";
import { GithubAuthButton, GoogleAuthButton } from "./SubmitButtons";

export function AuthModel() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Try for Free</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex items-center gap-2 flex-row justify-center">
          <DialogTitle></DialogTitle> {/*'DialogTitle' is just here to fix browser rendering issue */} 
          <Image src={Logo} alt="Slotify logo" className="size-10" />
          <h4 className="text-3xl font-semibold">
            Slot<span className="text-primary">ify</span>
          </h4>
        </DialogHeader>
        <div className="flex flex-col mt-5 gap-3">
          <form
            className="w-full"
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
              <GoogleAuthButton />
          </form>
          <form action={async()=> {
            "use server";
            await signIn("github");
          }}>
            <GithubAuthButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
