import type { Story } from '@ladle/react';
import { useState } from 'react';
import { Switch } from './components/Switch';
import './styles.css';

export default {
  title: 'Components/Switch'
};

export const Primary: Story = () => {
  const [on, setOn] = useState(true);
  return (
    <div style={{ display: 'grid', gap: 12, padding: 16 }}>
      <Switch checked={on} onCheckedChange={setOn} label={`Notifications ${on ? 'On' : 'Off'}`} />
      <Switch checked={false} disabled label="Disabled" />
    </div>
  );
};
