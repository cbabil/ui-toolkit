import { InputHTMLAttributes, forwardRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';

export type SearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  allowClear?: boolean;
  onClear?: () => void;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ value, onChange, placeholder = 'Search', disabled, allowClear = true, onClear, className = '', ...rest }, ref) => {
    const classes = ['ui-search', className].filter(Boolean).join(' ');
    const showClear = allowClear && value.trim().length > 0 && !disabled;
    const icon16 = typeof window !== 'undefined'
      ? parseInt(getComputedStyle(document.documentElement).getPropertyValue('--icon-16')) || 16
      : 16;
    const icon14 = typeof window !== 'undefined'
      ? parseInt(getComputedStyle(document.documentElement).getPropertyValue('--icon-14')) || 14
      : 14;
    return (
      <div className={classes}>
        <SearchIcon size={icon16} className="ui-search__icon" aria-hidden />
        <input
          ref={ref}
          className="ui-search__input"
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          {...rest}
        />
        {showClear ? (
          <button
            type="button"
            className="ui-search__clear"
            onClick={() => {
              onClear?.();
              onChange('');
            }}
            aria-label="Clear search"
          >
            <X size={icon14} />
          </button>
        ) : (
          <span style={{ width: icon14 }} />
        )}
      </div>
    );
  }
);

Search.displayName = 'Search';
