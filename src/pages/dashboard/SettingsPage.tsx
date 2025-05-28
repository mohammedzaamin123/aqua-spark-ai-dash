
import React from 'react';
import { Settings, User, Shield, Bell, Palette, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white font-poppins">Settings</h1>
        <p className="text-gray-400 text-lg">Manage your account and system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <Card className="glass-dark border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <User className="w-5 h-5 text-electric-400" />
              <span>Profile Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-white mb-2 block">Full Name</Label>
              <Input 
                defaultValue="John Admin"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">Email Address</Label>
              <Input 
                defaultValue="john@company.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">Phone Number</Label>
              <Input 
                defaultValue="+1 (555) 123-4567"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <Button className="bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-600 hover:to-teal-600 text-white">
              Update Profile
            </Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="glass-dark border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Shield className="w-5 h-5 text-coral-400" />
              <span>Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Two-Factor Authentication</p>
                <p className="text-gray-400 text-sm">Add an extra layer of security</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Session Timeout</p>
                <p className="text-gray-400 text-sm">Auto-logout after inactivity</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
              Change Password
            </Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="glass-dark border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Bell className="w-5 h-5 text-teal-400" />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Email Notifications</p>
                <p className="text-gray-400 text-sm">Receive updates via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Push Notifications</p>
                <p className="text-gray-400 text-sm">Browser push notifications</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">System Alerts</p>
                <p className="text-gray-400 text-sm">Critical system notifications</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card className="glass-dark border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Palette className="w-5 h-5 text-purple-400" />
              <span>Appearance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Dark Mode</p>
                <p className="text-gray-400 text-sm">Use dark theme</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Compact Mode</p>
                <p className="text-gray-400 text-sm">Reduce spacing and padding</p>
              </div>
              <Switch />
            </div>
            <div>
              <Label className="text-white mb-2 block">Language</Label>
              <select className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
