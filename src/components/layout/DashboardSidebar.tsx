
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
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const filteredMenuItems = menuItems.filter(item => item.roles.includes(userRole));

  return (
    <Sidebar className="notion-sidebar slide-in-from-left">
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-sidebar-primary">AI Platform</h2>
            <p className="text-sm text-sidebar-foreground capitalize">{userRole} Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground font-medium mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredMenuItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="group">
                      <Link 
                        to={item.url}
                        className={cn(
                          "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
                          "text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent notion-hover",
                          isActive && "bg-sidebar-accent text-sidebar-primary font-medium"
                        )}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="notion-card p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-sidebar-primary">Role Access</span>
          </div>
          <p className="text-xs text-sidebar-foreground capitalize">
            Logged in as {userRole}
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
