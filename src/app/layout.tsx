import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { AuthProvider } from "@/lib/context/AuthContext";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { validateEnv } from "@/lib/config";
import { esES } from "@clerk/localizations";

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
    <ClerkProvider
      localization={esES}
      appearance={{
        elements: {
          footer: {
            display: "none",
          },
          userButtonTrigger: {
            // Style for the UserButton itself
            border: "2px solid #d1d5db", // Example: gray border
            borderRadius: "50%", // To keep it round
            padding: "2px", // <--- Add this line for spacing
            "&:hover": {
              borderColor: "#9ca3af", // Darker gray on hover
            },
          },
        },
      }}
    >
      <html lang="es">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <AuthProvider>
            <SidebarProvider defaultOpen>{children}</SidebarProvider>
          </AuthProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
