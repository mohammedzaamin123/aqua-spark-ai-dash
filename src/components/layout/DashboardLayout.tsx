
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardTopbar } from "./DashboardTopbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole?: 'admin' | 'user' | 'counselor';
}

export function DashboardLayout({ children, userRole = 'admin' }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar userRole={userRole} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardTopbar />
          <main className="flex-1 overflow-auto p-6 fade-in">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
