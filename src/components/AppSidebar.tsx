"use client";

import { ReactNode } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export interface AppSidebarProps {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  collapsible?: "icon" | "offcanvas" | "none";
  variant?: "sidebar" | "floating" | "inset";
}

/**
 * AppSidebar - Base component for application sidebars
 * 
 * This component provides a consistent sidebar structure for the entire app
 * with collapsible functionality (icon or offcanvas) for improved usability.
 */
export function AppSidebar({
  header,
  content,
  footer,
  collapsible = "icon",
  variant = "floating"
}: AppSidebarProps) {
  return (
    <Sidebar variant={variant} collapsible={collapsible}>
      <SidebarRail />
      <SidebarHeader className="flex items-center justify-between px-4 py-2">
        {typeof header === 'string' ? (
          <div className="font-semibold text-lg">{header}</div>
        ) : (
          header
        )}
      </SidebarHeader>
      {content && <SidebarContent>{content}</SidebarContent>}
      {footer && <SidebarFooter>{footer}</SidebarFooter>}
    </Sidebar>
  );
} 