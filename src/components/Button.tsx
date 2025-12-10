import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

type Variant = 'primary' | 'ghost';

export type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Minimal CSS-first approach to avoid reliance on Tailwind build inside Ladle.
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = 'primary', loading = false, leftIcon, rightIcon, className = '', fullWidth, disabled, ...rest },
    ref
  ) => {
    const base = 'ui-btn no-drag';
    const variantClass = variant === 'ghost' ? 'ui-btn--ghost' : '';
    const widthClass = fullWidth ? 'w-full' : '';
    const loadingClass = loading ? 'cursor-wait' : '';
    const classes = [base, variantClass, widthClass, loadingClass, className].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading}
        {...rest}
      >
        {leftIcon ? <span aria-hidden>{leftIcon}</span> : null}
        <span>{loading ? 'Loading…' : children}</span>
        {rightIcon ? <span aria-hidden>{rightIcon}</span> : null}
      </button>
    );
  }
);

Button.displayName = 'Button';
