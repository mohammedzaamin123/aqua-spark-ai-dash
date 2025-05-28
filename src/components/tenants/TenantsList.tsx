
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Plus, MoreHorizontal, Building, Database } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Tenant {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'suspended';
  channels: string[];
  lastUpdated: string;
  logo?: string;
}

export function TenantsList() {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch tenants
    const fetchTenants = async () => {
      try {
        // In a real app: const response = await fetch('/api/tenants');
        setTimeout(() => {
          setTenants([
            {
              id: '1',
              name: 'Acme Corporation',
              status: 'active',
              channels: ['Web', 'WhatsApp', 'Facebook'],
              lastUpdated: '2 hours ago'
            },
            {
              id: '2',
              name: 'TechStart Inc',
              status: 'active',
              channels: ['Web', 'Instagram'],
              lastUpdated: '1 day ago'
            },
            {
              id: '3',
              name: 'Global Solutions',
              status: 'inactive',
              channels: ['Web'],
              lastUpdated: '3 days ago'
            }
          ]);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching tenants:', error);
        setLoading(false);
      }
    };

    fetchTenants();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-teal-500/20 text-teal-400 border-teal-500/30';
      case 'inactive': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'suspended': return 'bg-coral-500/20 text-coral-400 border-coral-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="w-40 h-8 bg-gray-700 rounded animate-pulse"></div>
            <div className="w-64 h-4 bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="w-32 h-10 bg-gray-700 rounded animate-pulse"></div>
        </div>
        
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg animate-pulse">
                <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                <div className="flex-1 space-y-2">
                  <div className="w-48 h-4 bg-gray-700 rounded"></div>
                  <div className="w-32 h-3 bg-gray-700 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-poppins text-white">Tenants</h1>
          <p className="text-gray-400 mt-2">Manage your platform tenants and their configurations</p>
        </div>
        <Button className="bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-600 hover:to-teal-600 text-white font-medium">
          <Plus className="w-4 h-4 mr-2" />
          Add Tenant
        </Button>
      </div>

      {/* Tenants Table */}
      <div className="glass-dark rounded-2xl border border-white/10 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-white/5">
              <TableHead className="text-gray-300 font-semibold">Tenant</TableHead>
              <TableHead className="text-gray-300 font-semibold">Status</TableHead>
              <TableHead className="text-gray-300 font-semibold">Connected Channels</TableHead>
              <TableHead className="text-gray-300 font-semibold">Last Updated</TableHead>
              <TableHead className="text-gray-300 font-semibold text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tenants.map((tenant) => (
              <TableRow key={tenant.id} className="border-white/10 hover:bg-white/5 transition-colors">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-500 to-teal-500 flex items-center justify-center">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{tenant.name}</div>
                      <div className="text-sm text-gray-400">ID: {tenant.id}</div>
                    </div>
                  </div>
                </TableCell>
                
                <TableCell>
                  <Badge className={getStatusColor(tenant.status)}>
                    {tenant.status}
                  </Badge>
                </TableCell>
                
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {tenant.channels.map((channel) => (
                      <Badge key={channel} variant="outline" className="text-xs border-white/20 text-gray-300">
                        {channel}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                
                <TableCell className="text-gray-400">{tenant.lastUpdated}</TableCell>
                
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-navy-900/95 backdrop-blur-xl border-white/20">
                      <DropdownMenuItem className="text-white hover:bg-white/10">
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-white hover:bg-white/10">
                        Edit Configuration
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-white hover:bg-white/10">
                        <Database className="w-4 h-4 mr-2" />
                        Manage Database
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-coral-400 hover:bg-coral-500/20">
                        Suspend Tenant
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
