import React from "react";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if user is already authenticated
  const user = await currentUser();

  // If user is authenticated, redirect to appropriate dashboard
  if (user) {
    // In a real app, you might check the user's role here
    // and redirect to the appropriate dashboard
    redirect("/"); // For now, redirect to home page
  }

  return <div className="w-full h-full">{children}</div>;
}
