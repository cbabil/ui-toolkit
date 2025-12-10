import type { Story } from '@ladle/react';
import './styles.css';

const swatch = (name: string, token: string, text = 'var(--text-primary)') => (
  <div style={{ display: 'grid', gap: 4 }}>
    <div
      style={{
        height: 72,
        width: 140,
        borderRadius: 12,
        background: token,
        border: '1px solid rgba(255,255,255,0.05)',
        boxShadow: '0 8px 22px rgba(0,0,0,0.16)',
        color: text,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600
      }}
    >
      {name}
    </div>
    <code style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{token}</code>
  </div>
);

export const Palette: Story = () => (
  <div style={{ padding: 16, display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
    {swatch('BG', 'var(--color-bg)')}
    {swatch('Surface', 'var(--color-surface)')}
    {swatch('Surface Strong', 'var(--color-surface-strong)')}
    {swatch('Text Primary', 'var(--text-primary)')}
    {swatch('Text Secondary', 'var(--text-secondary)')}
    {swatch('Border', 'var(--color-border)')}
    {swatch('Accent Primary', 'var(--color-accent-primary)')}
    {swatch('Accent Boost', 'var(--color-accent-boost)')}
    {swatch('Success', 'var(--color-success)')}
    {swatch('Warning', 'var(--color-warning)')}
    {swatch('Danger', 'var(--color-danger)')}
  </div>
);

export default {
  title: 'Foundations/Colors'
};
