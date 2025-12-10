import type { Story } from '@ladle/react';
import { Typography } from './components/Typography';
import './styles.css';

export default {
  title: 'Foundations/Typography'
};

export const Scale: Story = () => (
  <div style={{ display: 'grid', gap: '12px', padding: '16px', maxWidth: 520 }}>
    <Typography variant="h2">Heading H2 / 32</Typography>
    <Typography variant="h3">Heading H3 / 24</Typography>
    <Typography variant="h4">Heading H4 / 20</Typography>
    <Typography variant="title">Section Title / 17</Typography>
    <Typography variant="body">Body text regular / 15px</Typography>
    <Typography variant="body-strong">Body strong / 15px semibold</Typography>
    <Typography variant="label">Label / 13px medium</Typography>
    <Typography variant="caption">Caption / 11px wide</Typography>
    <Typography variant="body" muted>
      Muted body text uses text-secondary color.
    </Typography>
  </div>
);
