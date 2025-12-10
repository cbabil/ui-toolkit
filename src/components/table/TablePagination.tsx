import { forwardRef } from 'react';

type TablePaginationProps = {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  posY?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageSizeChange?: (size: number) => void;
};

export const TablePagination = forwardRef<HTMLDivElement, TablePaginationProps>(
  ({ currentPage, totalPages, onPrev, onNext, posY, pageSize, pageSizeOptions = [], onPageSizeChange }, ref) => {
    const posLabel = posY !== undefined ? `posY: ${posY.toFixed(0)}px` : 'posY: n/a';
    return (
      <div className="ui-table__pagination" ref={ref}>
        <div className="ui-table__pagination-meta">
          <span>
            Page {currentPage} / {totalPages}
            <span className="ui-table__pagination-pos"> | {posLabel}</span>
          </span>
          {pageSize && pageSizeOptions.length > 0 && onPageSizeChange ? (
            <label className="ui-table__page-size">
              Rows per page
              <select value={pageSize} onChange={(e) => onPageSizeChange(Number(e.target.value))}>
                {pageSizeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </label>
          ) : null}
        </div>
        <div className="ui-table__pagination-actions">
          <button onClick={onPrev} disabled={currentPage <= 1} aria-label="Previous page">
            ‹
          </button>
          <button onClick={onNext} disabled={currentPage >= totalPages} aria-label="Next page">
            ›
          </button>
        </div>
      </div>
    );
  }
);
