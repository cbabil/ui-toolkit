import type { Story } from '@ladle/react';
import { Tabs } from './components/Tabs';
import './styles.css';

export default {
  title: 'Components/Tabs'
};

const items = [
  { label: 'Overview', value: 'overview' },
  { label: 'Activity', value: 'activity' },
  { label: 'Settings', value: 'settings', disabled: true }
];

export const Underline: Story = () => (
  <div style={{ padding: 16 }}>
    <Tabs items={items} defaultActive="overview" variant="underline" />
  </div>
);

export const Pill: Story = () => (
  <div style={{ padding: 16 }}>
    <Tabs items={items} defaultActive="overview" variant="pill" />
  </div>
);

export const Primary: Story = () => (
  <div style={{ padding: 16 }}>
    <Tabs items={items} defaultActive="overview" size="compact" />
  </div>
);
