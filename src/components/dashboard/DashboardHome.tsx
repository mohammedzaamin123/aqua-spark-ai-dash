
import React, { useState, useEffect } from 'react';
import { MetricCard } from './MetricCard';
import { Building, MessageSquare, Zap, Clock } from 'lucide-react';

interface MetricData {
  totalTenants: number;
  activeSessions: number;
  apiRequests: number;
  pendingWebhooks: number;
  loading: boolean;
}

export function DashboardHome() {
  const [metrics, setMetrics] = useState<MetricData>({
    totalTenants: 0,
    activeSessions: 0,
    apiRequests: 0,
    pendingWebhooks: 0,
    loading: true
  });

  useEffect(() => {
    // Simulate API call to fetch metrics
    const fetchMetrics = async () => {
      try {
        // In a real app, this would be an actual API call
        // const response = await fetch('/api/dashboard/metrics');
        // const data = await response.json();
        
        // Simulated data for demo
        setTimeout(() => {
          setMetrics({
            totalTenants: 24,
            activeSessions: 156,
            apiRequests: 12543,
            pendingWebhooks: 3,
            loading: false
          });
        }, 1000);
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setMetrics(prev => ({ ...prev, loading: false }));
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold font-poppins text-white">
          Welcome to <span className="text-gradient">AI Platform</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Monitor your multi-tenant chatbot platform with real-time analytics and insights
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Active Tenants"
          value={metrics.loading ? "..." : metrics.totalTenants}
          change="+12%"
          icon={Building}
          color="electric"
          loading={metrics.loading}
        />
        
        <MetricCard
          title="Active Chat Sessions"
          value={metrics.loading ? "..." : metrics.activeSessions}
          change="+8%"
          icon={MessageSquare}
          color="teal"
          loading={metrics.loading}
        />
        
        <MetricCard
          title="API Requests Today"
          value={metrics.loading ? "..." : metrics.apiRequests.toLocaleString()}
          change="+23%"
          icon={Zap}
          color="purple"
          loading={metrics.loading}
        />
        
        <MetricCard
          title="Pending Webhooks"
          value={metrics.loading ? "..." : metrics.pendingWebhooks}
          change="-2"
          icon={Clock}
          color="coral"
          loading={metrics.loading}
        />
      </div>

      {/* Activity Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 font-poppins">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: "New tenant registered", time: "2 minutes ago", type: "success" },
              { action: "Webhook delivery failed", time: "5 minutes ago", type: "error" },
              { action: "API key regenerated", time: "15 minutes ago", type: "info" },
              { action: "User role updated", time: "1 hour ago", type: "info" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-teal-400' :
                    activity.type === 'error' ? 'bg-coral-400' : 'bg-electric-400'
                  }`} />
                  <span className="text-gray-300">{activity.action}</span>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 font-poppins">System Status</h3>
          <div className="space-y-4">
            {[
              { service: "API Gateway", status: "Operational", uptime: "99.9%" },
              { service: "Database", status: "Operational", uptime: "99.8%" },
              { service: "Webhook Service", status: "Degraded", uptime: "98.2%" },
              { service: "Chat Engine", status: "Operational", uptime: "99.9%" },
            ].map((service, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    service.status === 'Operational' ? 'bg-teal-400' : 'bg-yellow-400'
                  }`} />
                  <span className="text-gray-300">{service.service}</span>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${
                    service.status === 'Operational' ? 'text-teal-400' : 'text-yellow-400'
                  }`}>
                    {service.status}
                  </div>
                  <div className="text-xs text-gray-500">{service.uptime} uptime</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
