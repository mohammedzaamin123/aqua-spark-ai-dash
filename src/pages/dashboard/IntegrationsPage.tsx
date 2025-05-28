
import React from 'react';
import { Zap, Plus, Settings, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function IntegrationsPage() {
  const integrations = [
    { id: '1', name: 'WhatsApp Business API', icon: '📱', enabled: true, status: 'Connected' },
    { id: '2', name: 'Instagram Direct', icon: '📷', enabled: true, status: 'Connected' },
    { id: '3', name: 'Facebook Messenger', icon: '💬', enabled: false, status: 'Disconnected' },
    { id: '4', name: 'Slack', icon: '💼', enabled: true, status: 'Connected' },
    { id: '5', name: 'Microsoft Teams', icon: '🏢', enabled: false, status: 'Disconnected' },
    { id: '6', name: 'Telegram', icon: '✈️', enabled: false, status: 'Available' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white font-poppins">Integrations</h1>
          <p className="text-gray-400 text-lg">Connect external services and platforms</p>
        </div>
        <Button className="bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-600 hover:to-teal-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Browse Integrations
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <Card key={integration.id} className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{integration.icon}</span>
                  <span className="text-lg">{integration.name}</span>
                </div>
                <Switch checked={integration.enabled} />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                {integration.status === 'Connected' ? (
                  <CheckCircle className="w-4 h-4 text-teal-400" />
                ) : (
                  <XCircle className="w-4 h-4 text-coral-400" />
                )}
                <span className={`text-sm ${
                  integration.status === 'Connected' ? 'text-teal-400' : 
                  integration.status === 'Available' ? 'text-gray-400' : 'text-coral-400'
                }`}>
                  {integration.status}
                </span>
              </div>
              <Button 
                variant="outline" 
                className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                disabled={integration.status === 'Available'}
              >
                <Settings className="w-4 h-4 mr-2" />
                {integration.status === 'Available' ? 'Setup Required' : 'Configure'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
