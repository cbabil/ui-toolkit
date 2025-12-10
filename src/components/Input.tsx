import { forwardRef, InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className = '', ...rest }, ref) => {
  const classes = ['ui-input', className].filter(Boolean).join(' ');
  return <input ref={ref} className={classes} {...rest} />;
});

Input.displayName = 'Input';
