import { ReactNode } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export type AlertProps = {
  title?: ReactNode;
  children?: ReactNode;
  variant?: AlertVariant;
  className?: string;
  direction?: 'ltr' | 'rtl' | 'auto';
};

export function Alert({ title, children, variant = 'info', className = '', direction }: AlertProps) {
  const cls = ['ui-alert', `ui-alert--${variant}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} role="status" dir={direction}>
      {title ? <div className="ui-alert__title">{title}</div> : null}
      {children ? <div className="ui-alert__body">{children}</div> : null}
    </div>
  );
}
