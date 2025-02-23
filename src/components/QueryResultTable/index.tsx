import React from "react";
import { FixedSizeList as List } from "react-window";

export type QueryResultTableProps = {
  rows?: any[];
  headers?: string[];
};

const QueryResultTable = ({ headers, rows }: QueryResultTableProps) => {
  const rowHeight = 80;
  const tableHeight = 800;

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const row = rows ? rows[index] : [];
    return (
      <div style={style} className="flex border-b border-(--border-color)">
        {headers?.map((header) => (
          <div className="flex-1 p-2 text-left" key={header}>
            {row[header]}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="overflow-x-auto max-h-[800px]">
      <div className="sticky top-0 bg-(--primary-bg) flex border-b border-(--border-color)">
        {headers?.map((header) => (
          <div className="flex-1 p-2 text-left" key={header}>
            {header}
          </div>
        ))}
      </div>
      <div className="mt-5 bg-(--primary-bg)">
        {rows?.length ? (
          <List
            height={tableHeight}
            itemCount={rows.length}
            itemSize={rowHeight}
            width="100%"
          >
            {Row}
          </List>
        ) : (
          <div className="flex border-b border-(--border-color)">
            <div className="flex-1 p-2 text-left">No data available</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueryResultTable;
