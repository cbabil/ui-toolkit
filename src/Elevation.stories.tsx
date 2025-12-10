import type { Story } from '@ladle/react';
import './styles.css';

const elevs = [
  { name: 'XS', varName: '--elev-xs' },
  { name: 'SM', varName: '--elev-sm' },
  { name: 'MD', varName: '--elev-md' },
  { name: 'LG', varName: '--elev-lg' }
];

export const Scale: Story = () => (
  <div style={{ padding: 16, display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
    {elevs.map((e) => (
      <div key={e.varName} style={{ display: 'grid', gap: 8 }}>
        <div
          style={{
            height: 80,
            borderRadius: 12,
            background: 'var(--color-surface)',
            boxShadow: `var(${e.varName})`,
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            fontWeight: 600
          }}
        >
          {e.name}
        </div>
        <code style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{e.varName}</code>
      </div>
    ))}
  </div>
);

export default {
  title: 'Foundations/Elevation'
};
