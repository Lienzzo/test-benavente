"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import {
  LayoutDashboard,
  FileText,
  Users,
  Truck,
  Building,
  Construction,
  Package,
  MapPin,
  Clock,
  User,
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

// Links for the admin sidebar with Lucide React icons
const links = [
  { href: "/admin", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  {
    href: "/admin/partes",
    label: "Partes de Trabajo",
    icon: <FileText size={18} />,
  },
  {
    href: "/admin/conductores",
    label: "Conductores",
    icon: <User size={18} />,
  },
  { href: "/admin/vehiculos", label: "Vehículos", icon: <Truck size={18} /> },
  { href: "/admin/clientes", label: "Clientes", icon: <Users size={18} /> },
  { href: "/admin/obras", label: "Obras", icon: <Construction size={18} /> },
  {
    href: "/admin/transportistas",
    label: "Transportistas",
    icon: <Truck size={18} />,
  },
  {
    href: "/admin/materiales",
    label: "Materiales",
    icon: <Package size={18} />,
  },
  {
    href: "/admin/radios",
    label: "Radios de trabajo",
    icon: <MapPin size={18} />,
  },
  {
    href: "/admin/jornadas",
    label: "Tipos de Jornadas",
    icon: <Clock size={18} />,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  const sidebarContent = (
    <SidebarGroup>
      <SidebarGroupLabel>Administración</SidebarGroupLabel>
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
      <span className="text-sm font-medium">Administrador</span>
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
