import type { Story } from '@ladle/react';
import { Card } from './components/Card';
import './styles.css';

export default {
  title: 'Components/Card'
};

export const Variants: Story = () => (
  <div style={{ display: 'grid', gap: 16, padding: 16, gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))' }}>
    <Card padding="md" elevation="xs">XS elevation</Card>
    <Card padding="md" elevation="sm">SM elevation</Card>
    <Card padding="md" elevation="md">MD elevation</Card>
    <Card padding="md" elevation="lg">LG elevation</Card>
  </div>
);
