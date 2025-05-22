"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { UserRole } from "@/lib/auth";

type AuthContextType = {
  userId: string | null;
  isLoading: boolean;
  isSignedIn: boolean | null | undefined;
  role: UserRole;
  isAdmin: boolean;
  isDriver: boolean;
};

const defaultContext: AuthContextType = {
  userId: null,
  isLoading: true,
  isSignedIn: null,
  role: "driver", // Default role
  isAdmin: false,
  isDriver: true,
};

const AuthContext = createContext<AuthContextType>(defaultContext);

export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { userId, isLoaded: authLoaded, isSignedIn } = useAuth();
  const { user, isLoaded: userLoaded } = useUser();
  const [role, setRole] = useState<UserRole>("driver");
  
  // Update role when user metadata changes
  useEffect(() => {
    if (userLoaded && user) {
      const userRole = (user.publicMetadata.role as UserRole) || "driver";
      setRole(userRole);
    }
  }, [user, userLoaded]);
  
  const isLoading = !authLoaded || !userLoaded;
  
  const value = {
    userId: userId || null,
    isLoading,
    isSignedIn,
    role,
    isAdmin: role === "admin",
    isDriver: role === "driver",
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} 