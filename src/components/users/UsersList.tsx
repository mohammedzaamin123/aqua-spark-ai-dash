
import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Shield,
  Eye,
  MoreHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'counselor';
  status: 'active' | 'inactive';
  lastActive: string;
  permissions: string[];
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Admin',
    email: 'john@company.com',
    role: 'admin',
    status: 'active',
    lastActive: '2 minutes ago',
    permissions: ['all']
  },
  {
    id: '2',
    name: 'Sarah Counselor',
    email: 'sarah@company.com',
    role: 'counselor',
    status: 'active',
    lastActive: '5 minutes ago',
    permissions: ['chat_manage', 'user_support']
  },
  {
    id: '3',
    name: 'Mike User',
    email: 'mike@company.com',
    role: 'user',
    status: 'inactive',
    lastActive: '2 hours ago',
    permissions: ['chat_access']
  }
];

export function UsersList() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-coral-500/20 text-coral-400 border-coral-500/30';
      case 'counselor': return 'bg-teal-500/20 text-teal-400 border-teal-500/30';
      case 'user': return 'bg-electric-500/20 text-electric-400 border-electric-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    return status === 'active' 
      ? 'bg-teal-500/20 text-teal-400 border-teal-500/30'
      : 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white font-poppins">Users & Roles</h1>
          <p className="text-gray-400 text-lg">Manage user accounts and permissions</p>
        </div>
        <Button className="bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-600 hover:to-teal-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="glass-dark rounded-2xl p-6 border border-white/10">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search users by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Filter className="w-4 h-4 mr-2" />
                  Role: {selectedRole === 'all' ? 'All' : selectedRole}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-navy-900/95 backdrop-blur-xl border-white/20">
                <DropdownMenuItem onClick={() => setSelectedRole('all')} className="text-white hover:bg-white/10">
                  All Roles
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole('admin')} className="text-white hover:bg-white/10">
                  Admin
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole('counselor')} className="text-white hover:bg-white/10">
                  Counselor
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole('user')} className="text-white hover:bg-white/10">
                  User
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="glass-dark rounded-2xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-6 text-gray-300 font-medium">User</th>
                <th className="text-left p-6 text-gray-300 font-medium">Role</th>
                <th className="text-left p-6 text-gray-300 font-medium">Status</th>
                <th className="text-left p-6 text-gray-300 font-medium">Last Active</th>
                <th className="text-left p-6 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-500 to-teal-500 flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <Badge className={`${getRoleBadgeColor(user.role)} border`}>
                      <Shield className="w-3 h-3 mr-1" />
                      {user.role}
                    </Badge>
                  </td>
                  <td className="p-6">
                    <Badge className={`${getStatusBadgeColor(user.status)} border`}>
                      {user.status}
                    </Badge>
                  </td>
                  <td className="p-6 text-gray-400">{user.lastActive}</td>
                  <td className="p-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-navy-900/95 backdrop-blur-xl border-white/20">
                        <DropdownMenuItem className="text-white hover:bg-white/10">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white hover:bg-white/10">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white hover:bg-white/10">
                          <Shield className="w-4 h-4 mr-2" />
                          Impersonate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-coral-400 hover:bg-coral-500/20">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-coral-500/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-coral-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">3</h3>
              <p className="text-gray-400">Total Admins</p>
            </div>
          </div>
        </div>
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">12</h3>
              <p className="text-gray-400">Active Counselors</p>
            </div>
          </div>
        </div>
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-electric-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">156</h3>
              <p className="text-gray-400">Total Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
