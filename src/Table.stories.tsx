import type { Story } from '@ladle/react';
import { Table } from './components/table/Table';
import { GridActionCell } from './components/GridActionCell';
import './styles.css';

export default {
  title: 'Components/Table'
};

const columns = [
  { label: 'Name', value: 'name' },
  { label: 'Role', value: 'role' },
  { label: 'Status', value: 'status' },
  { label: 'Actions', value: 'actions', sortable: false, width: 140 }
];

const rows = [
  { name: 'Alice', role: 'Engineer', status: 'Active', actions: <GridActionCell key="a" /> },
  { name: 'Bob', role: 'Designer', status: 'Pending', actions: <GridActionCell key="b" /> },
  { name: 'Carol', role: 'PM', status: 'Disabled', actions: <GridActionCell key="c" /> },
  { name: 'Dave', role: 'Engineer', status: 'Active', actions: <GridActionCell key="d" /> },
  { name: 'Eve', role: 'Engineer', status: 'Pending', actions: <GridActionCell key="e" /> },
  { name: 'Frank', role: 'Support', status: 'Active', actions: <GridActionCell key="f" /> },
  ...Array.from({ length: 101 }).map((_, i) => ({
    name: `User ${i + 7}`,
    role: i % 3 === 0 ? 'Engineer' : i % 3 === 1 ? 'Designer' : 'PM',
    status: ['Active', 'Pending', 'Disabled'][i % 3],
    actions: <GridActionCell key={`row-${i}`} />
  }))
];

export const Primary: Story = () => (
  <div style={{ padding: 16 }}>
    <Table
      columns={columns}
      rows={rows}
      pageSize={15}
      globalSearch
      showColumnControls
      showRowIndex
      showPageSize={false}
    />
  </div>
);
