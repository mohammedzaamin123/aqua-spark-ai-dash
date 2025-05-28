
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Plus, 
  Search, 
  Globe,
  Smartphone,
  Instagram,
  Facebook,
  Settings,
  Activity,
  Users,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

interface Channel {
  id: string;
  name: string;
  type: 'web' | 'whatsapp' | 'instagram' | 'facebook';
  status: 'active' | 'inactive';
  activeSessions: number;
  totalMessages: number;
  lastActivity: string;
}

const mockChannels: Channel[] = [
  {
    id: '1',
    name: 'Website Chat',
    type: 'web',
    status: 'active',
    activeSessions: 45,
    totalMessages: 1247,
    lastActivity: '2 minutes ago'
  },
  {
    id: '2',
    name: 'WhatsApp Business',
    type: 'whatsapp',
    status: 'active',
    activeSessions: 23,
    totalMessages: 892,
    lastActivity: '5 minutes ago'
  },
  {
    id: '3',
    name: 'Instagram Direct',
    type: 'instagram',
    status: 'inactive',
    activeSessions: 0,
    totalMessages: 156,
    lastActivity: '2 hours ago'
  },
  {
    id: '4',
    name: 'Facebook Messenger',
    type: 'facebook',
    status: 'active',
    activeSessions: 12,
    totalMessages: 634,
    lastActivity: '10 minutes ago'
  }
];

export function ChannelsList() {
  const [channels, setChannels] = useState<Channel[]>(mockChannels);
  const [searchQuery, setSearchQuery] = useState('');

  const getChannelIcon = (type: string) => {
    switch (type) {
      case 'web': return Globe;
      case 'whatsapp': return Smartphone;
      case 'instagram': return Instagram;
      case 'facebook': return Facebook;
      default: return MessageSquare;
    }
  };

  const getChannelColor = (type: string) => {
    switch (type) {
      case 'web': return 'electric';
      case 'whatsapp': return 'teal';
      case 'instagram': return 'purple';
      case 'facebook': return 'coral';
      default: return 'electric';
    }
  };

  const toggleChannelStatus = (channelId: string) => {
    setChannels(channels.map(channel => 
      channel.id === channelId 
        ? { ...channel, status: channel.status === 'active' ? 'inactive' : 'active' }
        : channel
    ));
  };

  const filteredChannels = channels.filter(channel =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white font-poppins">Channels</h1>
          <p className="text-gray-400 text-lg">Manage communication channels and integrations</p>
        </div>
        <Button className="bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-600 hover:to-teal-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Channel
        </Button>
      </div>

      {/* Search */}
      <div className="glass-dark rounded-2xl p-6 border border-white/10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search channels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-electric-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">4</h3>
              <p className="text-gray-400">Total Channels</p>
            </div>
          </div>
        </div>
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
              <Activity className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">80</h3>
              <p className="text-gray-400">Active Sessions</p>
            </div>
          </div>
        </div>
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-coral-500/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-coral-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">2.9K</h3>
              <p className="text-gray-400">Messages Today</p>
            </div>
          </div>
        </div>
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">3</h3>
              <p className="text-gray-400">Active Channels</p>
            </div>
          </div>
        </div>
      </div>

      {/* Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredChannels.map((channel) => {
          const IconComponent = getChannelIcon(channel.type);
          const colorClass = getChannelColor(channel.type);
          
          return (
            <div key={channel.id} className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    colorClass === 'electric' ? 'bg-electric-500/20' :
                    colorClass === 'teal' ? 'bg-teal-500/20' :
                    colorClass === 'coral' ? 'bg-coral-500/20' :
                    'bg-purple-500/20'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      colorClass === 'electric' ? 'text-electric-400' :
                      colorClass === 'teal' ? 'text-teal-400' :
                      colorClass === 'coral' ? 'text-coral-400' :
                      'text-purple-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white font-poppins">{channel.name}</h3>
                    <p className="text-gray-400 capitalize">{channel.type} Channel</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Switch
                    checked={channel.status === 'active'}
                    onCheckedChange={() => toggleChannelStatus(channel.id)}
                  />
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">{channel.activeSessions}</p>
                  <p className="text-xs text-gray-400">Active Sessions</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">{channel.totalMessages}</p>
                  <p className="text-xs text-gray-400">Total Messages</p>
                </div>
                <div className="text-center">
                  <Badge className={`${channel.status === 'active' ? 'bg-teal-500/20 text-teal-400 border-teal-500/30' : 'bg-gray-500/20 text-gray-400 border-gray-500/30'} border`}>
                    {channel.status}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Last Activity:</span>
                <span className="text-white">{channel.lastActivity}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
