
import React from 'react';
import { Webhook, Plus, Play, Pause, Activity, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function WebhooksPage() {
  const webhooks = [
    { 
      id: '1', 
      name: 'User Registration', 
      url: 'https://api.example.com/webhooks/user-reg',
      status: 'active',
      events: ['user.created', 'user.updated'],
      lastTriggered: '2 minutes ago',
      successRate: 98.5
    },
    {
      id: '2',
      name: 'Chat Events',
      url: 'https://api.example.com/webhooks/chat',
      status: 'active',
      events: ['chat.started', 'chat.ended'],
      lastTriggered: '5 minutes ago',
      successRate: 99.2
    },
    {
      id: '3',
      name: 'Payment Notifications',
      url: 'https://api.example.com/webhooks/payments',
      status: 'inactive',
      events: ['payment.completed', 'payment.failed'],
      lastTriggered: '2 hours ago',
      successRate: 95.8
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white font-poppins">Webhooks</h1>
          <p className="text-gray-400 text-lg">Manage webhook endpoints and event subscriptions</p>
        </div>
        <Button className="bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-600 hover:to-teal-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Create Webhook
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-dark border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center">
                <Webhook className="w-6 h-6 text-electric-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">3</h3>
                <p className="text-gray-400">Total Webhooks</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-dark border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">2</h3>
                <p className="text-gray-400">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-dark border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-coral-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-coral-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">97.8%</h3>
                <p className="text-gray-400">Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-dark border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">1.2K</h3>
                <p className="text-gray-400">Events Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {webhooks.map((webhook) => (
          <Card key={webhook.id} className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center">
                    <Webhook className="w-6 h-6 text-electric-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white font-poppins">{webhook.name}</h3>
                    <p className="text-gray-400 text-sm font-mono">{webhook.url}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={`border ${
                    webhook.status === 'active' 
                      ? 'bg-teal-500/20 text-teal-400 border-teal-500/30'
                      : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
                  }`}>
                    {webhook.status === 'active' ? <CheckCircle className="w-3 h-3 mr-1" /> : <XCircle className="w-3 h-3 mr-1" />}
                    {webhook.status}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={webhook.status === 'active' ? 'text-coral-400 hover:text-coral-300' : 'text-teal-400 hover:text-teal-300'}
                  >
                    {webhook.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Events</p>
                  <div className="flex flex-wrap gap-1">
                    {webhook.events.map((event, index) => (
                      <Badge key={index} className="bg-white/10 text-gray-300 border-white/20 border text-xs">
                        {event}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Last Triggered</p>
                  <span className="text-white text-sm">{webhook.lastTriggered}</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Success Rate</p>
                  <span className="text-teal-400 text-sm font-semibold">{webhook.successRate}%</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs">
                    Test
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs">
                    Logs
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
