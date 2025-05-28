
import React, { useState } from 'react';
import { 
  Bot, 
  Save, 
  Eye, 
  MessageSquare, 
  Settings,
  Zap,
  Brain,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ChatbotTuning() {
  const [systemMessage, setSystemMessage] = useState(`You are a helpful AI assistant for our customer support platform. You should:

1. Be friendly, professional, and empathetic
2. Provide accurate information about our products and services
3. Escalate complex issues to human agents when necessary
4. Always maintain customer privacy and data security
5. Use clear, concise language that customers can easily understand

Remember to:
- Ask clarifying questions when needed
- Provide step-by-step guidance for troubleshooting
- Offer alternative solutions when the primary option isn't suitable
- Thank customers for their patience and business`);

  const [welcomeMessage, setWelcomeMessage] = useState("Hi! I'm your AI assistant. How can I help you today?");
  const [fallbackMessage, setFallbackMessage] = useState("I'm not sure I understand. Could you please rephrase your question or try asking something else?");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white font-poppins">Chatbot Fine-Tuning</h1>
        <p className="text-gray-400 text-lg">Configure your AI assistant's behavior and responses</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center">
              <Bot className="w-6 h-6 text-electric-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">24</h3>
              <p className="text-gray-400">Active Bots</p>
            </div>
          </div>
        </div>
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">1.2K</h3>
              <p className="text-gray-400">Conversations</p>
            </div>
          </div>
        </div>
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-coral-500/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-coral-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">94%</h3>
              <p className="text-gray-400">Success Rate</p>
            </div>
          </div>
        </div>
        <div className="glass-dark rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">v2.1</h3>
              <p className="text-gray-400">Model Version</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <div className="space-y-6">
          {/* System Message */}
          <Card className="glass-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Settings className="w-5 h-5 text-electric-400" />
                <span>System Instructions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white mb-2 block">AI System Message</Label>
                <Textarea
                  value={systemMessage}
                  onChange={(e) => setSystemMessage(e.target.value)}
                  className="min-h-[200px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                  placeholder="Define how your AI assistant should behave..."
                />
                <p className="text-xs text-gray-400 mt-2">
                  This message defines your AI's personality and behavior guidelines.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Messages */}
          <Card className="glass-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-teal-400" />
                <span>Default Messages</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white mb-2 block">Welcome Message</Label>
                <Input
                  value={welcomeMessage}
                  onChange={(e) => setWelcomeMessage(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Enter welcome message..."
                />
              </div>
              <div>
                <Label className="text-white mb-2 block">Fallback Message</Label>
                <Input
                  value={fallbackMessage}
                  onChange={(e) => setFallbackMessage(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Enter fallback message..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button className="bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-600 hover:to-teal-600 text-white flex-1">
              <Save className="w-4 h-4 mr-2" />
              Save Configuration
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => setIsPreviewOpen(!isPreviewOpen)}
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
          </div>
        </div>

        {/* Live Preview */}
        <div className="space-y-6">
          <Card className="glass-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Zap className="w-5 h-5 text-coral-400" />
                <span>Live Preview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white/5 rounded-xl p-4 min-h-[400px] border border-white/10">
                {/* Chat Interface Preview */}
                <div className="space-y-4">
                  {/* Welcome Message */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/10 rounded-xl rounded-tl-none p-3 max-w-xs">
                      <p className="text-white text-sm">{welcomeMessage}</p>
                    </div>
                  </div>

                  {/* Sample User Message */}
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-electric-500/20 rounded-xl rounded-tr-none p-3 max-w-xs">
                      <p className="text-white text-sm">Hello, I need help with my account</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">U</span>
                    </div>
                  </div>

                  {/* Sample AI Response */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/10 rounded-xl rounded-tl-none p-3 max-w-xs">
                      <p className="text-white text-sm">
                        I'd be happy to help you with your account! Could you please tell me what specific issue you're experiencing?
                      </p>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/10 rounded-xl rounded-tl-none p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="glass-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-lg">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Response Accuracy</span>
                  <span className="text-teal-400 font-semibold">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Average Response Time</span>
                  <span className="text-teal-400 font-semibold">1.2s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Escalation Rate</span>
                  <span className="text-coral-400 font-semibold">8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Customer Satisfaction</span>
                  <span className="text-teal-400 font-semibold">4.7/5</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
