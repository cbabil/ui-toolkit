import { ReactNode, useRef } from 'react';
import { TableColumn } from './Table';
import { CSSProperties } from 'react';

type TableCoreProps = {
  displayedColumns: TableColumn[];
  rows: Record<string, ReactNode>[];
  showRowIndex: boolean;
  currentPage: number;
  rowsPerPage: number;
  sortable: boolean;
  sortKey: string | null;
  sortDir: 'asc' | 'desc';
  onSort: (col: TableColumn) => void;
};

export function TableCore({
  displayedColumns,
  rows,
  showRowIndex,
  currentPage,
  rowsPerPage,
  sortable,
  sortKey,
  sortDir,
  onSort
}: TableCoreProps) {
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const gridTemplate = displayedColumns
    .map((col) => {
      if (col.value === '__rowIndex') return '56px';
      if (col.width) return typeof col.width === 'number' ? `${col.width}px` : col.width;
      return '1fr';
    })
    .join(' ');
  const gridStyle = { gridTemplateColumns: gridTemplate } as CSSProperties;

  return (
    <div
      className={['ui-table', showRowIndex ? 'ui-table--with-index' : ''].filter(Boolean).join(' ')}
      style={gridStyle}
    >
      <div className="ui-table__header" role="row" style={gridStyle}>
        {displayedColumns.map((col) => {
          const sortableCol = sortable && col.sortable !== false;
          const active = sortKey === col.value;
          return (
            <div
              key={col.value}
              className={["ui-table__cell", 'is-header', col.value === '__rowIndex' ? 'is-index' : '', sortableCol ? 'is-sortable' : '', active ? 'is-active' : '']
                .filter(Boolean)
                .join(' ')}
              style={{ width: col.width }}
              onClick={() => onSort(col)}
            >
              <span>{col.label}</span>
              {sortableCol ? <span className="ui-grid-table__sort">{active ? (sortDir === 'asc' ? '▲' : '▼') : '⇅'}</span> : null}
            </div>
          );
        })}
      </div>
      <div className="ui-table__body" ref={bodyRef}>
        {rows.map((row, idx) => (
          <div key={idx} className="ui-table__row" role="row" style={gridStyle}>
            {displayedColumns.map((col) => (
              <div key={col.value} className="ui-table__cell">
                {col.value === '__rowIndex'
                  ? `${(currentPage - 1) * rowsPerPage + idx + 1}.`
                  : row[col.value]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
