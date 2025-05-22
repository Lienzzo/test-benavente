import { currentUser, auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export type UserRole = "admin" | "driver"; 

/**
 * Get the current authenticated user with role information
 */
export async function getAuthUser() {
  const user = await currentUser();
  
  if (!user) {
    return null;
  }
  
  // Get the user's role from public metadata
  const role = (user.publicMetadata.role as UserRole) || "driver";
  
  return {
    id: user.id,
    email: user.emailAddresses[0]?.emailAddress,
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl,
    role,
    isAdmin: role === "admin",
    isDriver: role === "driver",
  };
}

/**
 * Check if the current user is authenticated
 */
export async function checkAuth() {
  const authData = await auth();
  
  if (!authData.userId) {
    redirect("/sign-in");
  }
}

/**
 * Require a specific role to access a route
 */
export async function requireRole(allowedRoles: UserRole[]) {
  const user = await getAuthUser();
  
  if (!user) {
    redirect("/sign-in");
  }
  
  if (!allowedRoles.includes(user.role)) {
    // Redirect to appropriate page based on user role
    if (user.role === "admin") {
      redirect("/admin");
    } else {
      redirect("/conductor");
    }
  }
}

/**
 * Check if the current user is an admin
 */
export async function requireAdmin() {
  return requireRole(["admin"]);
}

/**
 * Check if the current user is a driver
 */
export async function requireDriver() {
  return requireRole(["driver", "admin"]); // Admins can also access driver routes
}

/**
 * Utility function to determine redirect path after sign-in based on user role
 */
export async function getRedirectPathAfterSignIn() {
  const user = await getAuthUser();
  
  if (!user) {
    return "/sign-in";
  }
  
  if (user.isAdmin) {
    return "/admin";
  }
  
  return "/conductor";
} 