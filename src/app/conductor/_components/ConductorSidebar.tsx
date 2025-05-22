"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { 
  Home, 
  FileText, 
  PlusCircle 
} from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/AppSidebar";

// Links for the conductor sidebar with Lucide React icons
const links = [
  { href: "/conductor", label: "Inicio", icon: <Home size={18} /> },
  { href: "/conductor/partes", label: "Mis Partes", icon: <FileText size={18} /> },
  { href: "/conductor/partes/nuevo", label: "Nuevo Parte", icon: <PlusCircle size={18} /> },
];

export function ConductorSidebar() {
  const pathname = usePathname();

  const sidebarContent = (
    <SidebarGroup>
      <SidebarGroupLabel>Panel Conductor</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {links.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === link.href}
                tooltip={link.label}
              >
                <Link href={link.href}>
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  const sidebarFooter = (
    <div className="p-4 border-t flex items-center gap-3">
      <UserButton afterSignOutUrl="/sign-in" />
      <span className="text-sm font-medium">Conductor</span>
    </div>
  );

  return (
    <AppSidebar 
      header="BL"
      content={sidebarContent}
      footer={sidebarFooter}
      collapsible="icon"
      variant="floating"
    />
  );
} 