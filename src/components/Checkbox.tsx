import { InputHTMLAttributes, forwardRef } from 'react';

export type CheckboxProps = {
  label?: string;
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  direction?: 'ltr' | 'rtl' | 'auto';
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate, onCheckedChange, className = '', direction, ...rest }, ref) => {
    return (
      <label className={['ui-checkbox', className].filter(Boolean).join(' ')} dir={direction}>
        <input
          ref={ref}
          type="checkbox"
          className="ui-checkbox__input"
          aria-checked={indeterminate ? 'mixed' : rest.checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          {...rest}
        />
        <span className="ui-checkbox__box" aria-hidden />
        {label ? <span className="ui-checkbox__label">{label}</span> : null}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
