import { Trash2, Edit2, Upload } from 'lucide-react';

const getIconSize = () =>
  typeof window !== 'undefined'
    ? parseInt(getComputedStyle(document.documentElement).getPropertyValue('--icon-16')) || 16
    : 16;

export const GridActionCell = ({ onEdit, onDelete, onImport }: {
  onEdit?: () => void;
  onDelete?: () => void;
  onImport?: () => void;
}) => (
  <div className="ui-grid-actions">
    <button type="button" aria-label="Edit" onClick={onEdit}>
      <Edit2 size={getIconSize()} />
    </button>
    <button type="button" aria-label="Import" onClick={onImport}>
      <Upload size={getIconSize()} />
    </button>
    <button type="button" aria-label="Delete" onClick={onDelete}>
      <Trash2 size={getIconSize()} />
    </button>
  </div>
);
