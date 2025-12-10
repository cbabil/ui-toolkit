import type { Story } from '@ladle/react';
import { Skeleton } from './components/Skeleton';
import './styles.css';

export default {
  title: 'Components/Skeleton'
};

export const Primary: Story = () => (
  <div style={{ padding: 16, display: 'grid', gap: 16, maxWidth: 360 }}>
    <Skeleton height={14} />
    <Skeleton height={14} width="80%" />
    <Skeleton height={14} width="60%" />
    <Skeleton height={56} radius={12} />
  </div>
);
