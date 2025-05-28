
"use client";

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DashboardHome } from '@/components/dashboard/DashboardHome';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const Index = () => {
  const [userRole, setUserRole] = useState<'admin' | 'user' | 'counselor'>('admin');
  const [isLoading, setIsLoading] = useState(true);

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
        <DashboardHome />
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default Index;
