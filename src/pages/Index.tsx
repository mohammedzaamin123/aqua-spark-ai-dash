
"use client";

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

// Import all page components
import { DashboardPage } from './dashboard/DashboardPage';
import { TenantsPage } from './dashboard/TenantsPage';
import { UsersPage } from './dashboard/UsersPage';
import { ChannelsPage } from './dashboard/ChannelsPage';
import { ChatbotPage } from './dashboard/ChatbotPage';
import { ApiKeysPage } from './dashboard/ApiKeysPage';
import { DatabasePage } from './dashboard/DatabasePage';
import { IntegrationsPage } from './dashboard/IntegrationsPage';
import { WebhooksPage } from './dashboard/WebhooksPage';
import { SettingsPage } from './dashboard/SettingsPage';

const Index = () => {
  const [userRole, setUserRole] = useState<'admin' | 'user' | 'counselor'>('admin');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate authentication check and role determination
    const checkAuth = async () => {
      try {
        // In a real app, this would fetch user data from API
        // const response = await fetch('/api/auth/me');
        // const userData = await response.json();
        // setUserRole(userData.role);
        
        // For demo purposes, using admin role
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Authentication check failed:', error);
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const renderPageContent = () => {
    const path = location.pathname;
    
    switch (path) {
      case '/dashboard':
      case '/':
        return <DashboardPage />;
      case '/dashboard/tenants':
        return <TenantsPage />;
      case '/dashboard/users':
        return <UsersPage />;
      case '/dashboard/channels':
        return <ChannelsPage />;
      case '/dashboard/chatbot':
        return <ChatbotPage />;
      case '/dashboard/api-keys':
        return <ApiKeysPage />;
      case '/dashboard/database':
        return <DatabasePage />;
      case '/dashboard/integrations':
        return <IntegrationsPage />;
      case '/dashboard/webhooks':
        return <WebhooksPage />;
      case '/dashboard/settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-electric-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-white text-lg">Loading AI Platform...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <DashboardLayout userRole={userRole}>
        {renderPageContent()}
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default Index;
