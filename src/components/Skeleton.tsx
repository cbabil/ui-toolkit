import { CSSProperties } from 'react';

export type SkeletonProps = {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  className?: string;
  style?: CSSProperties;
};

export function Skeleton({ width = '100%', height = 12, radius = 8, className = '', style }: SkeletonProps) {
  const cls = ['ui-skeleton', className].filter(Boolean).join(' ');
  return <div className={cls} style={{ width, height, borderRadius: radius, ...style }} />;
}
