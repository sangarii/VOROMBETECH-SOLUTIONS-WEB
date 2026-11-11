import React from 'react';
import { Cloud, Cpu, ShieldCheck, Server, Layers, BarChart3 } from 'lucide-react';
import { ServiceItem } from '../types';

export const ServiceIcon: React.FC<{
  name: ServiceItem['iconName'];
  className?: string;
}> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Cloud':
      return <Cloud className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Server':
      return <Server className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'BarChart3':
      return <BarChart3 className={className} />;
    default:
      return <Cloud className={className} />;
  }
};
