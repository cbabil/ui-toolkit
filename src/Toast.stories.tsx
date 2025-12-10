import type { Story } from '@ladle/react';
import { Toast } from './components/Toast';
import './styles.css';

export default {
  title: 'Components/Toast'
};

export const Primary: Story = () => {
  return (
    <div style={{ padding: 16, display: 'grid', gap: 12 }}>
      <Toast title="Saved" message="Your changes have been saved." variant="success" icon="✓" />
    </div>
  );
};

export const Variants: Story = () => (
  <div style={{ padding: 16, display: 'grid', gap: 12, maxWidth: 400 }}>
    <Toast title="Heads up" message="We’re syncing your data." variant="info" icon="ℹ" />
    <Toast title="Saved" message="Your changes have been saved." variant="success" icon="✓" />
    <Toast title="Warning" message="Connection is unstable." variant="warning" icon="!" />
    <Toast title="Error" message="Something went wrong. Try again." variant="danger" icon="⚠" />
  </div>
);
