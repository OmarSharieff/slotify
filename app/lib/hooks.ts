import { redirect } from "next/navigation";
import { auth } from "./auth";

export async function requireUser() {
    const session = await auth();

    //checking if the user has a session
    if(!session?.user) return redirect("/");

    return session;
}