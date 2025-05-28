
import React, { useState } from 'react';
import { Search, Bell, User, Moon, Sun, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { Badge } from '@/components/ui/badge';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function DashboardTopbar() {
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications] = useState(3); // Mock notification count

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // In a real app, implement search suggestions here
  };

  return (
    <header className="h-16 bg-white/5 backdrop-blur-xl border-b border-white/10 px-6">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="text-white hover:bg-white/10" />
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search anything..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-96 pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20 transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* AI Help Widget */}
          <Button
            variant="ghost"
            size="sm"
            className="text-teal-400 hover:text-teal-300 hover:bg-teal-500/20"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            AI Help
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-300 hover:text-white hover:bg-white/10"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative text-gray-300 hover:text-white hover:bg-white/10">
                <Bell className="w-4 h-4" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-coral-500 text-white text-xs flex items-center justify-center p-0">
                    {notifications}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-navy-900/95 backdrop-blur-xl border-white/20">
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">Notifications</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <p className="text-sm text-white">New webhook delivery failed</p>
                    <p className="text-xs text-gray-400">2 minutes ago</p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <p className="text-sm text-white">API usage limit warning</p>
                    <p className="text-xs text-gray-400">1 hour ago</p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <p className="text-sm text-white">New tenant registered</p>
                    <p className="text-xs text-gray-400">3 hours ago</p>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-white/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-500 to-teal-500 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">Admin User</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-navy-900/95 backdrop-blur-xl border-white/20">
              <DropdownMenuItem className="text-white hover:bg-white/10">
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-white/10">
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/20" />
              <DropdownMenuItem className="text-coral-400 hover:bg-coral-500/20">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
