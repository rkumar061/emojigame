'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { IconItem } from '@/types/game';

interface IconRendererProps {
  icon: IconItem;
  className?: string;
  size?: number | string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({
  icon,
  className = '',
  size = 28,
}) => {
  if (icon.type === 'lucide') {
    // Look up Lucide icon component dynamically by string name
    const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number | string }>>)[
      icon.value
    ] || LucideIcons.HelpCircle;

    return <IconComponent size={size} className={`inline-block ${className}`} />;
  }

  // Emoji rendering
  const fontSize = typeof size === 'number' ? `${size}px` : size;
  return (
    <span
      className={`inline-block leading-none select-none ${className}`}
      style={{ fontSize }}
      role="img"
      aria-label={icon.label || 'icon'}
    >
      {icon.value}
    </span>
  );
};
