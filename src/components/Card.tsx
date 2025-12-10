import { ReactNode } from 'react';

export type CardProps = {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  elevation?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
};

const padMap = {
  none: 'ui-card--pad-none',
  sm: 'ui-card--pad-sm',
  md: 'ui-card--pad-md',
  lg: 'ui-card--pad-lg'
};

export function Card({ children, padding = 'md', elevation = 'sm', className = '' }: CardProps) {
  const cls = ['ui-card', `ui-card--${elevation}`, padMap[padding], className].filter(Boolean).join(' ');
  return <div className={cls}>{children}</div>;
}
