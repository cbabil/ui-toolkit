import type { Story } from '@ladle/react';
import { useState } from 'react';
import { Search } from './components/Search';
import './styles.css';

export default {
  title: 'Components/Search'
};

export const Primary: Story = () => {
  const [q, setQ] = useState('New Project');
  return (
    <div style={{ padding: 16, display: 'grid', gap: 12 }}>
      <Search value={q} onChange={setQ} placeholder="Search projects" />
      <Search value="" onChange={() => {}} placeholder="Disabled" disabled />
    </div>
  );
};
