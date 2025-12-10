import type { Story } from '@ladle/react';
import { Badge } from './components/Badge';
import './styles.css';

export default {
  title: 'Components/Badge'
};

export const Variants: Story = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', padding: 16 }}>
    <Badge>Neutral</Badge>
    <Badge variant="accent">Accent</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="danger">Danger</Badge>
    <Badge size="sm" variant="accent">Small</Badge>
  </div>
);
