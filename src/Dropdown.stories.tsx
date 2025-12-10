import type { Story } from '@ladle/react';
import { useState } from 'react';
import { Dropdown, type DropdownOption, type DropdownProps } from './components/Dropdown';
import './styles.css';

export default {
  title: 'Components/Dropdown'
};

const sampleOptions: DropdownOption[] = [
  { label: 'Disabled', value: 'disabled' },
  { label: 'Alpha', value: 'alpha' },
  { label: 'Bravo', value: 'bravo' },
  { label: 'Charlie', value: 'charlie' },
  { label: 'Delta', value: 'delta' }
];

export const Primary: Story<DropdownProps> = (args) => {
  const [val, setVal] = useState(args.value ?? 'alpha');
  return (
    <div style={{ padding: 16, maxWidth: 320 }}>
      <Dropdown
        {...args}
        value={val}
        onChange={(v) => {
          setVal(v);
          args.onChange?.(v);
        }}
      />
    </div>
  );
};

Primary.args = {
  options: sampleOptions,
  value: 'alpha',
  placeholder: 'Choose an option',
  label: 'Project'
};
