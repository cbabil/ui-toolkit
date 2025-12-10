import { ReactNode } from 'react';

export type ToastVariant = 'info' | 'success' | 'warning' | 'danger';

export type ToastProps = {
  title?: ReactNode;
  message?: ReactNode;
  variant?: ToastVariant;
  onClose?: () => void;
  icon?: ReactNode;
};

export function Toast({ title, message, variant = 'info', onClose, icon }: ToastProps) {
  return (
    <div className={["ui-toast", `ui-toast--${variant}`].join(' ')} role="status">
      {icon ? <div aria-hidden className="ui-toast__icon">{icon}</div> : <div aria-hidden style={{ width: 0 }} />}
      <div className="ui-toast__content">
        {title ? <div className="ui-toast__title">{title}</div> : null}
        {message ? <div className="ui-toast__message">{message}</div> : null}
      </div>
      {onClose ? (
        <button className="ui-toast__close" onClick={onClose} aria-label="Close toast">
          ×
        </button>
      ) : null}
    </div>
  );
}
