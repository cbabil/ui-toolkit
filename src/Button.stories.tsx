import type { Story } from '@ladle/react';
import { Button, type ButtonProps } from './components/Button';
import './styles.css';

export default {
  title: 'Components/Button'
};

export const Primary: Story<ButtonProps> = (args) => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px' }}>
    <Button {...args}>{args.children}</Button>
  </div>
);

Primary.args = {
  variant: 'primary',
  loading: false,
  children: 'New Project'
};
