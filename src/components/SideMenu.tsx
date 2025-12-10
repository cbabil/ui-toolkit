import { ReactNode } from 'react';

export type SideMenuItem = {
  label: string;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
  children?: SideMenuItem[];
};

export type SideMenuProps = {
  items: SideMenuItem[];
  active?: string;
  onSelect?: (value: string) => void;
  header?: ReactNode;
  footer?: ReactNode;
  direction?: 'ltr' | 'rtl' | 'auto';
  className?: string;
  width?: number | string;
};

export function SideMenu({ items, active, onSelect, header, footer, direction, className = '', width }: SideMenuProps) {
  return (
    <nav
      className={['ui-sidemenu', className].filter(Boolean).join(' ')}
      dir={direction}
      style={width ? { width } : undefined}
    >
      {header ? <div className="ui-sidemenu__header">{header}</div> : null}
      <ul className="ui-sidemenu__list">
        {items.map((item) => {
          const isActive = item.value === active;
          const isDisabled = item.disabled;
          const hasChildren = item.children && item.children.length > 0;
          return (
            <li
              key={item.value}
              className={[
                'ui-sidemenu__item',
                isActive ? 'is-active' : '',
                isDisabled ? 'is-disabled' : ''
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => {
                if (isDisabled) return;
                onSelect?.(item.value);
              }}
            >
              {item.icon ? <span className="ui-sidemenu__icon">{item.icon}</span> : null}
              <span className="ui-sidemenu__label">{item.label}</span>
              {hasChildren ? (
                <ul className="ui-sidemenu__sublist">
                  {item.children!.map((child) => (
                    <li
                      key={child.value}
                      className={[
                        'ui-sidemenu__subitem',
                        child.value === active ? 'is-active' : '',
                        child.disabled ? 'is-disabled' : ''
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (child.disabled) return;
                        onSelect?.(child.value);
                      }}
                    >
                      {child.label}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
      {footer ? <div className="ui-sidemenu__footer">{footer}</div> : null}
    </nav>
  );
}
