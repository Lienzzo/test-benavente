import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import { AuthProvider } from "@/lib/context/AuthContext";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { validateEnv } from "@/lib/config";

// Validate environment variables on the server
validateEnv();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benavente Logística - Partes de Trabajo",
  description: "Aplicación para la gestión de partes de trabajo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body>
          <AuthProvider>
            <SidebarProvider defaultOpen>
              {children}
            </SidebarProvider>
          </AuthProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
