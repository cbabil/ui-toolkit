import { Settings } from 'lucide-react';
import { Search } from '../Search';
import { TableColumn } from './Table';

type TableToolbarProps = {
  globalSearch: boolean;
  search: string;
  onSearchChange: (value: string) => void;
  showColumnControls: boolean;
  showPicker: boolean;
  onTogglePicker: () => void;
  columns: TableColumn[];
  visible: Record<string, boolean>;
  toggleColumn: (key: string) => void;
  pageSizeOptions: number[];
  rowsPerPage: number;
  onPageSizeChange: (size: number) => void;
};

export function TableToolbar({
  globalSearch,
  search,
  onSearchChange,
  showColumnControls,
  showPicker,
  onTogglePicker,
  columns,
  visible,
  toggleColumn,
  pageSizeOptions,
  rowsPerPage,
  onPageSizeChange
}: TableToolbarProps) {
  if (!globalSearch && !showColumnControls) return null;

  return (
    <div className="ui-table__toolbar">
      {globalSearch ? (
        <Search
          value={search}
          onChange={onSearchChange}
          placeholder="Search all columns"
          allowClear
        />
      ) : null}

      {showColumnControls ? (
        <div className="ui-table__columns">
          <button
            type="button"
            className="ui-table__columns-btn"
            onClick={onTogglePicker}
            aria-label="Manage columns"
          >
            <Settings size={20} />
          </button>
          {showPicker ? (
            <div className="ui-table__columns-popover">
              {columns.map((col) => (
                <label key={col.value} className="ui-table__columns-item">
                  <span>{col.label}</span>
                  <input
                    type="checkbox"
                    checked={visible[col.value] !== false}
                    onChange={() => toggleColumn(col.value)}
                    aria-label={`Toggle ${col.label}`}
                  />
                </label>
              ))}
              <div className="ui-table__columns-divider" />
              <div className="ui-table__columns-item">
                <span>Rows per page</span>
                <select
                  value={rowsPerPage}
                  onChange={(e) => onPageSizeChange(Number(e.target.value))}
                >
                  {pageSizeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
