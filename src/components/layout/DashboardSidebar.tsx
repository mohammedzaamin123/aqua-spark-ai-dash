
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  Users, 
  Settings, 
  Database, 
  Zap, 
  Key, 
  Webhook,
  Bot,
  MessageSquare,
  BarChart3,
  Building,
  Shield
} from "lucide-react";
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MenuItem {
  title: string;
  url: string;
  icon: React.ComponentType<any>;
  roles: string[];
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: BarChart3,
    roles: ['admin', 'user', 'counselor']
  },
  {
    title: "Tenants",
    url: "/dashboard/tenants",
    icon: Building,
    roles: ['admin']
  },
  {
    title: "Users & Roles",
    url: "/dashboard/users",
    icon: Users,
    roles: ['admin']
  },
  {
    title: "Channels",
    url: "/dashboard/channels",
    icon: MessageSquare,
    roles: ['admin', 'counselor']
  },
  {
    title: "Chatbot Fine-Tuning",
    url: "/dashboard/chatbot",
    icon: Bot,
    roles: ['admin']
  },
  {
    title: "API Keys",
    url: "/dashboard/api-keys",
    icon: Key,
    roles: ['admin']
  },
  {
    title: "Database Connections",
    url: "/dashboard/database",
    icon: Database,
    roles: ['admin']
  },
  {
    title: "Integrations",
    url: "/dashboard/integrations",
    icon: Zap,
    roles: ['admin']
  },
  {
    title: "Webhooks",
    url: "/dashboard/webhooks",
    icon: Webhook,
    roles: ['admin']
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
    roles: ['admin', 'user', 'counselor']
  }
];

interface DashboardSidebarProps {
  userRole: 'admin' | 'user' | 'counselor';
}

export function DashboardSidebar({ userRole }: DashboardSidebarProps) {
  const filteredMenuItems = menuItems.filter(item => item.roles.includes(userRole));

  return (
    <Sidebar className="bg-navy-950/90 backdrop-blur-xl border-r border-white/10">
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500 to-teal-500 flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-poppins font-bold text-white">AI Platform</h2>
            <p className="text-sm text-gray-400 capitalize">{userRole} Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 font-medium mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="group">
                    <Link 
                      href={item.url}
                      className={cn(
                        "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200",
                        "text-gray-300 hover:text-white hover:bg-white/10",
                        "group-hover:bg-gradient-to-r group-hover:from-electric-500/20 group-hover:to-teal-500/20"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="glass-dark rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="w-4 h-4 text-electric-500" />
            <span className="text-sm font-medium text-white">Role Access</span>
          </div>
          <p className="text-xs text-gray-400 capitalize">
            Logged in as {userRole}
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
