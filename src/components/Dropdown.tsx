import { useEffect, useMemo, useRef, useState } from 'react';

export type DropdownOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type DropdownProps = {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  label?: string;
  menuMaxHeight?: number;
  direction?: 'ltr' | 'rtl' | 'auto';
};

export function Dropdown({
  options,
  value,
  placeholder = 'Select...',
  disabled,
  onChange,
  label,
  menuMaxHeight = 240,
  direction
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const enabledOptions = useMemo(() => options.filter((o) => !o.disabled), [options]);

  const selectedOption = options.find((o) => o.value === value);

  const toggle = () => {
    if (disabled) return;
    setOpen((o) => !o);
  };

  const close = () => setOpen(false);

  const select = (opt: DropdownOption) => {
    if (opt.disabled) return;
    onChange?.(opt.value);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      // focus selected or first enabled
      const selectedIdx = options.findIndex((o) => o.value === value && !o.disabled);
      const idx = selectedIdx >= 0 ? selectedIdx : options.findIndex((o) => !o.disabled);
      setFocusedIndex(idx);
      setTimeout(() => menuRef.current?.querySelector<HTMLElement>('li[tabindex="0"]')?.focus(), 0);
    }
  }, [open, options, value]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        buttonRef.current?.focus();
      }
      if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
        const dir = e.key === 'ArrowDown' ? 1 : -1;
        let idx = focusedIndex;
        for (let i = 0; i < options.length; i++) {
          idx = (idx + dir + options.length) % options.length;
          if (!options[idx].disabled) break;
        }
        setFocusedIndex(idx);
      }
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (focusedIndex >= 0 && options[focusedIndex]) select(options[focusedIndex]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, focusedIndex, options]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!open) return;
      if (
        buttonRef.current && !buttonRef.current.contains(e.target as Node) &&
        menuRef.current && !menuRef.current.contains(e.target as Node)
      ) {
        close();
      }
    };
    window.addEventListener('mousedown', onClick);
    return () => window.removeEventListener('mousedown', onClick);
  }, [open]);

  return (
    <div className="ui-dropdown" dir={direction}>
      {label ? (
        <div className="ui-dropdown__row">
          <label className="ui-dropdown__label">{label}</label>
          <div className="ui-dropdown__control">
            <button
              ref={buttonRef}
              type="button"
              className="ui-dropdown__button"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={toggle}
              disabled={disabled}
            >
              <span className="ui-dropdown__value">{selectedOption?.label ?? placeholder}</span>
              <span className="ui-dropdown__chevron" aria-hidden>
                ▾
              </span>
            </button>
            {open ? (
              <ul
                ref={menuRef}
                className="ui-dropdown__menu"
                role="listbox"
                style={{ maxHeight: menuMaxHeight }}
              >
                {options.map((opt, idx) => {
                  const focused = idx === focusedIndex;
                  const selected = opt.value === value;
                  return (
                    <li
                      key={opt.value}
                      role="option"
                      aria-selected={selected}
                      tabIndex={opt.disabled ? -1 : 0}
                      className={[
                        'ui-dropdown__option',
                        selected ? 'is-selected' : '',
                        focused ? 'is-focused' : '',
                        opt.disabled ? 'is-disabled' : ''
                      ].join(' ')}
                      onMouseEnter={() => !opt.disabled && setFocusedIndex(idx)}
                      onClick={() => select(opt)}
                    >
                      {opt.label}
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="ui-dropdown__control">
          <button
            ref={buttonRef}
            type="button"
            className="ui-dropdown__button"
            aria-haspopup="listbox"
            aria-expanded={open}
            onClick={toggle}
            disabled={disabled}
          >
            <span className="ui-dropdown__value">{selectedOption?.label ?? placeholder}</span>
            <span className="ui-dropdown__chevron" aria-hidden>
              ▾
            </span>
          </button>
          {open ? (
            <ul
              ref={menuRef}
              className="ui-dropdown__menu"
              role="listbox"
              style={{ maxHeight: menuMaxHeight }}
            >
              {options.map((opt, idx) => {
                const focused = idx === focusedIndex;
                const selected = opt.value === value;
                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={selected}
                    tabIndex={opt.disabled ? -1 : 0}
                    className={[
                      'ui-dropdown__option',
                      selected ? 'is-selected' : '',
                      focused ? 'is-focused' : '',
                      opt.disabled ? 'is-disabled' : ''
                    ].join(' ')}
                    onMouseEnter={() => !opt.disabled && setFocusedIndex(idx)}
                    onClick={() => select(opt)}
                  >
                    {opt.label}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      )}
    </div>
  );
}
