export type QueryResultTableProps = {
  rows?: any[];
  headers?: string[];
};

const QueryResultTable = ({ headers, rows }: QueryResultTableProps) => {
  return (
    <div class="overflow-x-auto max-h-[800px]">
      <table class="min-w-full table-auto">
        <thead class="sticky top-0 bg-(--primary-bg)">
          <tr>
            {headers?.map((x) => (
              <th className="border border-(--border-color) p-2 text-left">
                {x}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row) => {
            return (
              <tr>
                {headers?.map((x) => {
                  return (
                    <td className="border border-(--border-color) p-2 text-left">
                      {row[x]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default QueryResultTable;
