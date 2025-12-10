import type { Story } from '@ladle/react';
import { useState } from 'react';
import { Checkbox } from './components/Checkbox';
import { Radio } from './components/Radio';
import './styles.css';

export default {
  title: 'Components/Checkbox & Radio'
};

export const Primary: Story = () => {
  const [checked, setChecked] = useState(true);
  const [choice, setChoice] = useState('a');
  return (
    <div style={{ display: 'grid', gap: 16, padding: 16 }}>
      <Checkbox checked={checked} onCheckedChange={setChecked} label="Accept terms" />
      <div style={{ display: 'grid', gap: 8 }}>
        <Radio checked={choice === 'a'} onCheckedChange={() => setChoice('a')} name="r" label="Option A" />
        <Radio checked={choice === 'b'} onCheckedChange={() => setChoice('b')} name="r" label="Option B" />
      </div>
    </div>
  );
};
