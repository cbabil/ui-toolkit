import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { TableToolbar } from './TableToolbar';
import { TableCore } from './TableCore';
import { TablePagination } from './TablePagination';

export type TableColumn = {
  label: string;
  value: string;
  sortable?: boolean;
  width?: string | number;
};

export type TableProps = {
  columns: TableColumn[];
  rows: Record<string, ReactNode>[];
  showRowIndex?: boolean;
  sortable?: boolean;
  pageSize?: number;
  page?: number;
  onPageChange?: (page: number) => void;
  globalSearch?: boolean;
  showColumnControls?: boolean;
  onColumnManage?: () => void;
  pageSizeOptions?: number[];
  showPageSize?: boolean;
};

export function Table({
  columns,
  rows,
  showRowIndex = false,
  sortable = true,
  pageSize = 10,
  page,
  onPageChange,
  globalSearch = false,
  showColumnControls = false,
  onColumnManage,
  pageSizeOptions = [10, 15, 20, 25],
  showPageSize = true
}: TableProps) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [internalPage, setInternalPage] = useState(1);
  const [search, setSearch] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [visible, setVisible] = useState<Record<string, boolean>>(
    () => columns.reduce((acc, c) => ({ ...acc, [c.value]: true }), {} as Record<string, boolean>)
  );
  const [pageSizeState, setPageSizeState] = useState(pageSize);
  const rowHeight = 44; // fixed per-row height for layout sizing
  const [lockedMiddleHeight, setLockedMiddleHeight] = useState(rowHeight * pageSize);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [paginationY, setPaginationY] = useState<number | undefined>(undefined);
  const currentPage = page ?? internalPage;
  const rowsPerPage = pageSizeState;
  useEffect(() => {
    setLockedMiddleHeight(rowHeight * rowsPerPage);
  }, [rowsPerPage]);

  useEffect(() => {
    const y = paginationRef.current?.getBoundingClientRect().top;
    if (y !== undefined) setPaginationY(y);
  }, [currentPage, rowsPerPage, lockedMiddleHeight]);

  const displayedColumns = useMemo(() => {
    const base = columns.filter((c) => visible[c.value] !== false);
    return showRowIndex ? [{ label: '#', value: '__rowIndex', sortable: false }, ...base] : base;
  }, [columns, visible, showRowIndex]);

  const globallyFiltered = useMemo(() => {
    if (!globalSearch || !search.trim()) return rows;
    const q = search.toLowerCase();
    return rows.filter((row) =>
      displayedColumns.some((col) => {
        const cell = row[col.value];
        const text = typeof cell === 'string' ? cell : String(cell ?? '');
        return text.toLowerCase().includes(q);
      })
    );
  }, [rows, search, globalSearch, displayedColumns]);

  const sortedRows = useMemo(() => {
    if (!sortable || !sortKey) return globallyFiltered;
    return [...globallyFiltered].sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      const sa = typeof va === 'string' ? va : String(va ?? '');
      const sb = typeof vb === 'string' ? vb : String(vb ?? '');
      return sortDir === 'asc' ? sa.localeCompare(sb) : sb.localeCompare(sa);
    });
  }, [globallyFiltered, sortKey, sortDir, sortable]);

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / rowsPerPage));
  const paged = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return sortedRows.slice(start, start + rowsPerPage);
  }, [sortedRows, currentPage, rowsPerPage]);

  const goToPage = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (page !== undefined) onPageChange?.(next);
    else setInternalPage(next);
  };

  const handleSort = (col: TableColumn) => {
    if (!sortable || col.sortable === false) return;
    if (sortKey === col.value) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortKey(col.value);
      setSortDir('asc');
    }
  };

  const toggleColumn = (key: string) => {
    setVisible((prev) => {
      const nextVisible = { ...prev, [key]: !prev[key] };
      // Ensure at least one column remains visible
      if (Object.values(nextVisible).filter(Boolean).length === 0) return prev;
      return nextVisible;
    });
  };

  return (
    <div
      className="ui-table-wrap ui-table-layout"
      style={{ gridTemplateRows: `auto ${lockedMiddleHeight}px auto` }}
    >
      <TableToolbar
        globalSearch={globalSearch}
        search={search}
        onSearchChange={(val) => {
          setSearch(val);
          setInternalPage(1);
        }}
        showColumnControls={showColumnControls}
        showPicker={showPicker}
        onTogglePicker={() => setShowPicker((v) => !v)}
        columns={columns}
        visible={visible}
        toggleColumn={toggleColumn}
        pageSizeOptions={pageSizeOptions}
        rowsPerPage={rowsPerPage}
        onPageSizeChange={(size) => {
          setPageSizeState(size);
          setInternalPage(1);
        }}
      />

      <div className="ui-table-middle">
        <TableCore
          displayedColumns={displayedColumns}
          rows={paged}
          showRowIndex={showRowIndex}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          sortable={sortable}
          sortKey={sortKey}
          sortDir={sortDir}
          onSort={handleSort}
        />

      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={() => goToPage(currentPage - 1)}
        onNext={() => goToPage(currentPage + 1)}
        posY={paginationY}
        ref={paginationRef}
        pageSize={showPageSize ? rowsPerPage : undefined}
        pageSizeOptions={pageSizeOptions}
        onPageSizeChange={(sz) => {
          setPageSizeState(sz);
          goToPage(1);
        }}
      />
      </div>
    </div>
  );
}
