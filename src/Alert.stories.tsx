import type { Story } from '@ladle/react';
import { Alert } from './components/Alert';
import './styles.css';

export default {
  title: 'Components/Alert'
};

export const Variants: Story = () => (
  <div style={{ display: 'grid', gap: 12, padding: 16 }}>
    <Alert title="Info" variant="info">This is an informational message.</Alert>
    <Alert title="Success" variant="success">Saved successfully.</Alert>
    <Alert title="Warning" variant="warning">Check your input.</Alert>
    <Alert title="Danger" variant="danger">Something went wrong.</Alert>
  </div>
);
