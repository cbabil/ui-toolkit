import type { Story } from '@ladle/react';
import './styles.css';

const radii = [
  { name: '8', varName: '--radius-8' },
  { name: '10', varName: '--radius-10' },
  { name: '12', varName: '--radius-12' },
  { name: '16', varName: '--radius-16' },
  { name: 'Pill', varName: '--radius-pill' }
];

export const Scale: Story = () => (
  <div style={{ padding: 16, display: 'grid', gap: 12 }}>
    {radii.map((r) => (
      <div key={r.varName} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 120,
            height: 32,
            background: 'var(--color-accent-primary)',
            borderRadius: `var(${r.varName})`,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 13,
            fontWeight: 600
          }}
        >
          {r.name}
        </div>
        <code style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{r.varName}</code>
      </div>
    ))}
  </div>
);

export default {
  title: 'Foundations/Radius'
};
