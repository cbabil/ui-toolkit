import { InputHTMLAttributes, forwardRef } from 'react';

export type RadioProps = {
  label?: string;
  onCheckedChange?: (checked: boolean) => void;
  direction?: 'ltr' | 'rtl' | 'auto';
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, onCheckedChange, className = '', direction, ...rest }, ref) => {
    return (
      <label className={['ui-radio', className].filter(Boolean).join(' ')} dir={direction}>
        <input
          ref={ref}
          type="radio"
          className="ui-radio__input"
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          {...rest}
        />
        <span className="ui-radio__outer" aria-hidden>
          <span className="ui-radio__inner" />
        </span>
        {label ? <span className="ui-radio__label">{label}</span> : null}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
