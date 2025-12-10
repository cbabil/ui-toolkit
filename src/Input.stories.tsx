import type { Story } from '@ladle/react';
import { useState } from 'react';
import { Input, type InputProps } from './components/Input';
import './styles.css';

export default {
  title: 'Components/Input'
};

export const Primary: Story<InputProps> = (args) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <div style={{ maxWidth: 360, padding: '16px', display: 'grid', gap: 12 }}>
      <Input
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          args.onChange?.(e);
        }}
      />
      <Input value="Project Alpha" placeholder="Disabled…" disabled />
    </div>
  );
};

Primary.args = {
  value: 'Project Alpha',
  placeholder: 'Type here...'
};
