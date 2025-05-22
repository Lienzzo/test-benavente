import { getAuthUser, getRedirectPathAfterSignIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  // Get authenticated user
  const user = await getAuthUser();

  // If logged in, redirect to the appropriate dashboard
  if (user) {
    const redirectPath = await getRedirectPathAfterSignIn();
    redirect(redirectPath);
  } else {
    redirect("/sign-in");
  }

  return null;
}
