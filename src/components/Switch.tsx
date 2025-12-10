import { InputHTMLAttributes, forwardRef } from 'react';

export type SwitchProps = {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
  direction?: 'ltr' | 'rtl' | 'auto';
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'checked'>;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, onCheckedChange, label, disabled, id, className = '', direction, ...rest }, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).slice(2, 7)}`;
    return (
      <label
        className={['ui-switch', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ')}
        htmlFor={switchId}
        dir={direction}
      >
        <input
          id={switchId}
          ref={ref}
          type="checkbox"
          className="ui-switch__input"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          {...rest}
        />
        <span className="ui-switch__track" aria-hidden>
          <span className="ui-switch__thumb" />
        </span>
        {label ? <span className="ui-switch__label">{label}</span> : null}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
