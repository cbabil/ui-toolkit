import { ReactNode } from 'react';

export type TextProps = {
  variant?:
    | 'h2'
    | 'h3'
    | 'h4'
    | 'title'
    | 'body'
    | 'body-strong'
    | 'label'
    | 'caption';
  children: ReactNode;
  muted?: boolean;
  className?: string;
};

const variantClass: Record<NonNullable<TextProps['variant']>, string> = {
  h2: 'typo-h2',
  h3: 'typo-h3',
  h4: 'typo-h4',
  title: 'typo-title',
  body: 'typo-body',
  'body-strong': 'typo-body-strong',
  label: 'typo-label',
  caption: 'typo-caption'
};

export function Typography({ variant = 'body', muted, className = '', children }: TextProps) {
  const cls = [variantClass[variant], muted ? 'typo-muted' : '', className].filter(Boolean).join(' ');
  return <span className={cls}>{children}</span>;
}
