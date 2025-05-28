
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  color: 'electric' | 'teal' | 'coral' | 'purple';
  loading?: boolean;
}

const colorVariants = {
  electric: {
    bg: 'from-electric-500/20 to-electric-600/20',
    border: 'border-electric-500/30',
    icon: 'text-electric-400',
    glow: 'shadow-electric-500/20'
  },
  teal: {
    bg: 'from-teal-500/20 to-teal-600/20',
    border: 'border-teal-500/30',
    icon: 'text-teal-400',
    glow: 'shadow-teal-500/20'
  },
  coral: {
    bg: 'from-coral-500/20 to-coral-600/20',
    border: 'border-coral-500/30',
    icon: 'text-coral-400',
    glow: 'shadow-coral-500/20'
  },
  purple: {
    bg: 'from-purple-500/20 to-purple-600/20',
    border: 'border-purple-500/30',
    icon: 'text-purple-400',
    glow: 'shadow-purple-500/20'
  }
};

export function MetricCard({ title, value, change, icon: Icon, color, loading }: MetricCardProps) {
  const variants = colorVariants[color];

  if (loading) {
    return (
      <div className="glass-dark rounded-2xl p-6 border animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gray-700 rounded-xl"></div>
          <div className="w-16 h-4 bg-gray-700 rounded"></div>
        </div>
        <div className="w-20 h-8 bg-gray-700 rounded mb-2"></div>
        <div className="w-32 h-4 bg-gray-700 rounded"></div>
      </div>
    );
  }

  return (
    <div className={cn(
      "glass-dark rounded-2xl p-6 border transition-all duration-300 hover:scale-105",
      "bg-gradient-to-br", variants.bg, variants.border,
      "hover:shadow-xl", variants.glow
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center",
          "bg-gradient-to-br", variants.bg
        )}>
          <Icon className={cn("w-6 h-6", variants.icon)} />
        </div>
        {change && (
          <span className={cn(
            "text-sm font-medium px-2 py-1 rounded-full",
            change.startsWith('+') ? 'text-teal-400 bg-teal-500/20' : 'text-coral-400 bg-coral-500/20'
          )}>
            {change}
          </span>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white font-poppins">{value}</h3>
        <p className="text-gray-400 text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}
