import { ReactNode, useState } from 'react';

export type TabItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type TabsProps = {
  items: TabItem[];
  active?: string;
  defaultActive?: string;
  onChange?: (value: string) => void;
  direction?: 'ltr' | 'rtl' | 'auto';
  className?: string;
  variant?: 'primary' | 'underline' | 'pill';
  size?: 'default' | 'compact';
};

export function Tabs({
  items,
  active,
  defaultActive,
  onChange,
  direction,
  className = '',
  variant = 'primary',
  size = 'default'
}: TabsProps) {
  const [internal, setInternal] = useState(defaultActive ?? items.find((i) => !i.disabled)?.value ?? '');
  const current = active ?? internal;

  const change = (v: string) => {
    const item = items.find((i) => i.value === v);
    if (!item || item.disabled) return;
    onChange?.(v);
    if (active === undefined) setInternal(v);
  };

  return (
    <div
      className={['ui-tabs', `ui-tabs--${variant}`, size === 'compact' ? 'ui-tabs--compact' : '', className]
        .filter(Boolean)
        .join(' ')}
      dir={direction}
      role="tablist"
    >
      {items.map((item) => {
        const isActive = item.value === current;
        return (
          <button
            key={item.value}
            type="button"
            className={[
              'ui-tab',
              isActive ? 'is-active' : '',
              item.disabled ? 'is-disabled' : '',
              size === 'compact' ? 'ui-tab--compact' : ''
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => change(item.value)}
            disabled={item.disabled}
            role="tab"
            aria-selected={isActive}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
