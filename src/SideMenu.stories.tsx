import type { Story } from '@ladle/react';
import { Home, Settings, Users } from 'lucide-react';
import { SideMenu } from './components/SideMenu';
import './styles.css';

export default {
  title: 'Components/SideMenu'
};

const items = [
  { label: 'Home', value: 'home', icon: <Home size={16} /> },
  {
    label: 'Users',
    value: 'users',
    icon: <Users size={16} />,
    children: [
      { label: 'All Users', value: 'users-all' },
      { label: 'Invites', value: 'users-invites' }
    ]
  },
  { label: 'Settings', value: 'settings', icon: <Settings size={16} /> },
  { label: 'Disabled', value: 'disabled', disabled: true }
];

export const Primary: Story = () => (
  <div style={{ padding: 16 }}>
    <SideMenu items={items} active="home" header="Navigation" footer="v1.0" />
  </div>
);
