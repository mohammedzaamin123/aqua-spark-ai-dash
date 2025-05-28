
import React from 'react';
import { MetricCard } from './MetricCard';
import { 
  Building, 
  MessageSquare, 
  Zap, 
  Webhook,
  Users,
  Database,
  TrendingUp,
  Activity
} from 'lucide-react';

export function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white font-poppins">Dashboard Overview</h1>
        <p className="text-gray-400 text-lg">Monitor your AI platform performance and metrics</p>
      </div>

      {/* Main Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Active Tenants"
          value="24"
          change="+12%"
          icon={Building}
          color="electric"
        />
        <MetricCard
          title="Active Chat Sessions"
          value="1,847"
          change="+23%"
          icon={MessageSquare}
          color="teal"
        />
        <MetricCard
          title="API Requests Today"
          value="45.2K"
          change="+8%"
          icon={Zap}
          color="coral"
        />
        <MetricCard
          title="Pending Webhooks"
          value="12"
          change="-15%"
          icon={Webhook}
          color="purple"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Total Users"
          value="2,156"
          change="+5%"
          icon={Users}
          color="electric"
        />
        <MetricCard
          title="Database Connections"
          value="8"
          change="0%"
          icon={Database}
          color="teal"
        />
        <MetricCard
          title="System Uptime"
          value="99.9%"
          change="+0.1%"
          icon={TrendingUp}
          color="purple"
        />
      </div>

      {/* Recent Activity Section */}
      <div className="glass-dark rounded-2xl p-6 border border-white/10">
        <div className="flex items-center space-x-3 mb-6">
          <Activity className="w-6 h-6 text-electric-400" />
          <h2 className="text-2xl font-bold text-white font-poppins">Recent Activity</h2>
        </div>
        
        <div className="space-y-4">
          {[
            { action: "New tenant registered", tenant: "TechCorp", time: "5 minutes ago", type: "success" },
            { action: "Webhook delivery failed", tenant: "RetailPlus", time: "12 minutes ago", type: "error" },
            { action: "Chat session started", tenant: "HealthCare", time: "18 minutes ago", type: "info" },
            { action: "API key generated", tenant: "FinanceApp", time: "1 hour ago", type: "success" },
            { action: "Database connected", tenant: "EduTech", time: "2 hours ago", type: "success" }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'success' ? 'bg-teal-500' :
                  activity.type === 'error' ? 'bg-coral-500' :
                  'bg-electric-500'
                }`}></div>
                <div>
                  <p className="text-white font-medium">{activity.action}</p>
                  <p className="text-gray-400 text-sm">Tenant: {activity.tenant}</p>
                </div>
              </div>
              <span className="text-gray-400 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
