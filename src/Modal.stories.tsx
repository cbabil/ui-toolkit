import type { Story } from '@ladle/react';
import { useState } from 'react';
import { Info, AlertTriangle, CheckCircle, XOctagon, ShieldAlert } from 'lucide-react';
import { Modal } from './components/Modal';
import { Button } from './components/Button';
import './styles.css';

export default {
  title: 'Components/Modal'
};

export const Primary: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 16, display: 'grid', gap: 12 }}>
      <span
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
        style={{ color: 'var(--color-accent-primary)', cursor: 'pointer', width: 'fit-content' }}
      >
        Open modal
      </span>
      <Modal open={open} onClose={() => setOpen(false)} title="Modal title" footer={null}>
        This is modal content.
      </Modal>
    </div>
  );
};

export const Confirm: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 16, display: 'grid', gap: 12 }}>
      <span
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
        style={{ color: 'var(--color-accent-primary)', cursor: 'pointer', width: 'fit-content' }}
      >
        Open modal (OK/Cancel)
      </span>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm action"
        footer={
          <>
            <Button onClick={() => setOpen(false)} className="ui-btn--ghost">
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>OK</Button>
          </>
        }
      >
        Are you sure you want to proceed?
      </Modal>
    </div>
  );
};

export const Notice: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 16, display: 'grid', gap: 12 }}>
      <span
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
        style={{ color: 'var(--color-accent-primary)', cursor: 'pointer', width: 'fit-content' }}
      >
        Open modal (icon + OK)
      </span>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        icon={<Info size={18} />}
        title="Information"
        footer={<Button onClick={() => setOpen(false)}>Got it</Button>}
      >
        Changes have been saved successfully.
      </Modal>
    </div>
  );
};

export const Warning: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 16, display: 'grid', gap: 12 }}>
      <span
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
        style={{ color: 'var(--color-accent-primary)', cursor: 'pointer', width: 'fit-content' }}
      >
        Open modal (warning)
      </span>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        icon={<AlertTriangle size={18} color="var(--color-warning-strong)" />}
        title="Warning"
        footer={
          <>
            <Button onClick={() => setOpen(false)} className="ui-btn--ghost">
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Proceed</Button>
          </>
        }
      >
        This action may affect live users. Proceed with caution.
      </Modal>
    </div>
  );
};

export const Success: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 16, display: 'grid', gap: 12 }}>
      <span
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
        style={{ color: 'var(--color-accent-primary)', cursor: 'pointer', width: 'fit-content' }}
      >
        Open modal (success)
      </span>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        icon={<CheckCircle size={18} color="var(--color-success-strong)" />}
        title="Success"
        footer={<Button onClick={() => setOpen(false)}>Close</Button>}
      >
        Your changes have been applied.
      </Modal>
    </div>
  );
};

export const Error: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 16, display: 'grid', gap: 12 }}>
      <span
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
        style={{ color: 'var(--color-accent-primary)', cursor: 'pointer', width: 'fit-content' }}
      >
        Open modal (error)
      </span>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        icon={<XOctagon size={18} color="var(--color-danger-strong)" />}
        title="Error"
        footer={
          <>
            <Button onClick={() => setOpen(false)} className="ui-btn--ghost">
              Close
            </Button>
          </>
        }
      >
        Something went wrong. Please try again or contact support.
      </Modal>
    </div>
  );
};

export const Critical: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 16, display: 'grid', gap: 12 }}>
      <span
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
        style={{ color: 'var(--color-accent-primary)', cursor: 'pointer', width: 'fit-content' }}
      >
        Open modal (critical)
      </span>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        icon={<ShieldAlert size={18} color="var(--color-danger-strong)" />}
        title="Critical"
        footer={
          <>
            <Button onClick={() => setOpen(false)} className="ui-btn--ghost">
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Force proceed</Button>
          </>
        }
      >
        This operation is irreversible. Double-check before continuing.
      </Modal>
    </div>
  );
};
