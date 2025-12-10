import { ReactNode } from 'react';

type BadgeVariant = 'neutral' | 'accent' | 'success' | 'warning' | 'danger';

type BadgeSize = 'sm' | 'md';

export type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
};

export function Badge({ children, variant = 'neutral', size = 'md', className = '' }: BadgeProps) {
  const cls = ['ui-badge', `ui-badge--${variant}`, `ui-badge--${size}`, className].filter(Boolean).join(' ');
  return <span className={cls}>{children}</span>;
}
