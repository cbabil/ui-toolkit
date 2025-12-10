import type { Story } from '@ladle/react';
import './styles.css';

const rows = [
  { name: '2', varName: '--space-2' },
  { name: '4', varName: '--space-4' },
  { name: '6', varName: '--space-6' },
  { name: '8', varName: '--space-8' },
  { name: '12', varName: '--space-12' },
  { name: '16', varName: '--space-16' },
  { name: '24', varName: '--space-24' },
  { name: '32', varName: '--space-32' },
  { name: '40', varName: '--space-40' }
];

export const Scale: Story = () => (
  <div style={{ padding: 16, display: 'grid', gap: 12 }}>
    {rows.map((r) => (
      <div key={r.varName} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: `var(${r.varName})`,
            height: 12,
            background: 'var(--color-accent-primary)',
            borderRadius: 4
          }}
        />
        <div style={{ fontSize: 14, color: 'var(--text-primary)' }}>{r.name}px</div>
        <code style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{r.varName}</code>
      </div>
    ))}
  </div>
);

export default {
  title: 'Foundations/Spacing'
};
