
import React from 'react';
import { Database, Plus, Search, Eye, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function DatabasePage() {
  const mockConnections = [
    { id: '1', name: 'Production MongoDB', type: 'MongoDB', status: 'Connected', collections: 12 },
    { id: '2', name: 'Analytics DB', type: 'PostgreSQL', status: 'Connected', collections: 8 },
    { id: '3', name: 'Cache Redis', type: 'Redis', status: 'Disconnected', collections: 0 }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white font-poppins">Database Connections</h1>
          <p className="text-gray-400 text-lg">Manage database connections and collections</p>
        </div>
        <Button className="bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-600 hover:to-teal-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Connection
        </Button>
      </div>

      <div className="glass-dark rounded-2xl p-6 border border-white/10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search database connections..."
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockConnections.map((connection) => (
          <Card key={connection.id} className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Database className="w-5 h-5 text-electric-400" />
                  <span>{connection.name}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Settings className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Type:</span>
                <span className="text-white">{connection.type}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Status:</span>
                <span className={`text-sm px-2 py-1 rounded ${
                  connection.status === 'Connected' 
                    ? 'bg-teal-500/20 text-teal-400' 
                    : 'bg-coral-500/20 text-coral-400'
                }`}>
                  {connection.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Collections:</span>
                <span className="text-white">{connection.collections}</span>
              </div>
              <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Eye className="w-4 h-4 mr-2" />
                View Collections
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
