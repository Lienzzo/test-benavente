"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// Links for the admin sidebar
const links = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/partes", label: "Partes de Trabajo", icon: "📝" },
  { href: "/admin/conductores", label: "Conductores", icon: "👷" },
  { href: "/admin/vehiculos", label: "Vehículos", icon: "🚛" },
  { href: "/admin/clientes", label: "Clientes", icon: "👥" },
  { href: "/admin/obras", label: "Obras", icon: "🏗️" },
  { href: "/admin/transportistas", label: "Transportistas", icon: "🚚" },
  { href: "/admin/materiales", label: "Materiales", icon: "📦" },
  { href: "/admin/radios", label: "Radios", icon: "📍" },
  { href: "/admin/jornadas", label: "Jornadas", icon: "⏰" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-white border-b p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Administración</h1>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded hover:bg-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile sidebar - shown when toggle is clicked */}
      <div className={`fixed inset-0 z-20 bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:hidden`}>
        <div className="p-4 border-b flex justify-between items-center">
          <h1 className="text-xl font-bold">Administración</h1>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto">
          <nav className="space-y-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors ${
                    isActive ? "bg-gray-200 text-blue-600 font-medium" : ""
                  }`}
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="p-4 border-t mt-auto">
          <div className="flex items-center">
            <UserButton afterSignOutUrl="/sign-in" />
            <span className="ml-3">Usuario Admin</span>
          </div>
        </div>
      </div>
      
      {/* Desktop sidebar - always visible on larger screens */}
      <div className="hidden md:flex h-full w-64 bg-gray-100 border-r flex-col">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Administración</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors ${
                    isActive ? "bg-gray-200 text-blue-600 font-medium" : ""
                  }`}
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="p-4 border-t mt-auto">
          <div className="flex items-center">
            <UserButton afterSignOutUrl="/sign-in" />
            <span className="ml-3">Usuario Admin</span>
          </div>
        </div>
      </div>
    </>
  );
} 