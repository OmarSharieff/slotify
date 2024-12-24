import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { AuthModel } from "./AuthModel";

export function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Slotify Logo" className="size-10" />
        <h4 className="text-3xl font-semibold">
          Slot<span className="text-blue-500">ify</span>
        </h4>
      </Link>
      <AuthModel />
    </div>
  );
}
