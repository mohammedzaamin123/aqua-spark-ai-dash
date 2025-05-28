
import React, { useState } from 'react';
import { 
  Key, 
  Plus, 
  Eye, 
  EyeOff, 
  Copy, 
  Trash2, 
  Calendar,
  Activity,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ApiKey {
  id: string;
  name: string;
  key: string;
  status: 'active' | 'inactive' | 'expired';
  usage: number;
  limit: number;
  created: string;
  lastUsed: string;
  permissions: string[];
}

const mockApiKeys: ApiKey[] = [
  {
    id: '1',
    name: 'Production API',
    key: 'sk-abc123...def789',
    status: 'active',
    usage: 15420,
    limit: 50000,
    created: '2024-01-15',
    lastUsed: '2 minutes ago',
    permissions: ['read', 'write', 'admin']
  },
  {
    id: '2',
    name: 'Development API',
    key: 'sk-dev456...ghi012',
    status: 'active',
    usage: 2341,
    limit: 10000,
    created: '2024-02-20',
    lastUsed: '1 hour ago',
    permissions: ['read', 'write']
  },
  {
    id: '3',
    name: 'Testing API',
    key: 'sk-test789...jkl345',
    status: 'inactive',
    usage: 892,
    limit: 5000,
    created: '2024-03-01',
    lastUsed: '3 days ago',
    permissions: ['read']
  }
];

export function ApiKeysList() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>(mockApiKeys);
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set());

  const toggleKeyVisibility = (keyId: string) => {
    const newVisibleKeys = new Set(visibleKeys);
    if (newVisibleKeys.has(keyId)) {
      newVisibleKeys.delete(keyId);
    } else {
      newVisibleKeys.add(keyId);
    }
    setVisibleKeys(newVisibleKeys);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, show a toast notification
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 border">Active</Badge>;
      case 'inactive':
        return <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30 border">Inactive</Badge>;
      case 'expired':
        return <Badge className="bg-coral-500/20 text-coral-400 border-coral-500/30 border">Expired</Badge>;
      default:
        return <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30 border">Unknown</Badge>;
    }
  };

  const getUsagePercentage = (usage: number, limit: number) => {
    return Math.round((usage / limit) * 100);
  };

  const getUsageColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-coral-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-teal-500';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white font-poppins">API Keys</h1>
          <p className="text-gray-400 text-lg">Manage API keys and monitor usage</p>
        </div>
        <Button className="bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-600 hover:to-teal-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Generate API Key
        </Button>
      </div>

      {/* Usage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-dark border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center">
                <Key className="w-6 h-6 text-electric-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">3</h3>
                <p className="text-gray-400">Total Keys</p>
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
                <h3 className="text-2xl font-bold text-white">18.7K</h3>
                <p className="text-gray-400">Total Requests</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-dark border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-coral-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-coral-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">2</h3>
                <p className="text-gray-400">High Usage</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-dark border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">99.8%</h3>
                <p className="text-gray-400">Uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* API Keys List */}
      <div className="space-y-4">
        {apiKeys.map((apiKey) => {
          const usagePercentage = getUsagePercentage(apiKey.usage, apiKey.limit);
          const isVisible = visibleKeys.has(apiKey.id);
          
          return (
            <Card key={apiKey.id} className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center">
                      <Key className="w-6 h-6 text-electric-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white font-poppins">{apiKey.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-gray-400 font-mono text-sm">
                          {isVisible ? apiKey.key : '••••••••••••••••'}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleKeyVisibility(apiKey.id)}
                          className="text-gray-400 hover:text-white p-1"
                        >
                          {isVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(apiKey.key)}
                          className="text-gray-400 hover:text-white p-1"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {getStatusBadge(apiKey.status)}
                    <Button variant="ghost" size="sm" className="text-coral-400 hover:text-coral-300">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Usage</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-white/10 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getUsageColor(usagePercentage)}`}
                          style={{ width: `${usagePercentage}%` }}
                        ></div>
                      </div>
                      <span className="text-white text-sm font-medium">{usagePercentage}%</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">
                      {apiKey.usage.toLocaleString()} / {apiKey.limit.toLocaleString()} requests
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Created</p>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-white text-sm">{apiKey.created}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Last Used</p>
                    <span className="text-white text-sm">{apiKey.lastUsed}</span>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-2">Permissions</p>
                  <div className="flex flex-wrap gap-2">
                    {apiKey.permissions.map((permission) => (
                      <Badge key={permission} className="bg-white/10 text-gray-300 border-white/20 border">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
