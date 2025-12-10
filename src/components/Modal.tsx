import { ReactNode, useEffect } from 'react';

export type ModalProps = {
  open: boolean;
  onClose?: () => void;
  title?: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  width?: number | string;
  showClose?: boolean;
};

export function Modal({
  open,
  onClose,
  title,
  icon,
  children,
  footer,
  width = 520,
  showClose = true
}: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="ui-modal__overlay" onClick={onClose}>
      <div
        className="ui-modal"
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {(title || icon || showClose) ? (
          <div className="ui-modal__header">
            <div className="ui-modal__heading">
              {icon ? <span className="ui-modal__icon" aria-hidden>{icon}</span> : null}
              {title ? <div className="ui-modal__title">{title}</div> : null}
            </div>
            {showClose ? (
              <button className="ui-modal__close" onClick={onClose} aria-label="Close modal">
                ×
              </button>
            ) : null}
          </div>
        ) : null}
        <div className="ui-modal__body">{children}</div>
        {footer ? <div className="ui-modal__footer">{footer}</div> : null}
      </div>
    </div>
  );
}
