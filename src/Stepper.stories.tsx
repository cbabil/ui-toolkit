import type { Story } from '@ladle/react';
import { Stepper } from './components/Stepper';
import './styles.css';

export default {
  title: 'Components/Stepper'
};

const steps = [
  { label: 'Plan', description: 'Define scope' },
  { label: 'Design', description: 'UI & UX' },
  { label: 'Build', description: 'Implementation' },
  { label: 'Launch', description: 'Release' }
];

export const Primary: Story = () => <Stepper steps={steps} currentIndex={1} />;

export const Compact: Story = () => <Stepper steps={steps} currentIndex={1} size="compact" />;
