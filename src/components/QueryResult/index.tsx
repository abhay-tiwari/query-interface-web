export type QueryResultProps = {
  rows?: any[];
  headers?: string[];
};

const QueryResult = ({ headers, rows }: QueryResultProps) => {
  return (
    <div className="max-h-[800px] overflow-y-auto">
      <table class="w-100">
        <thead>
          <tr>
            {headers?.map((x) => (
              <th className="border border-gray-200 p-2 text-left">{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row) => {
            return (
              <tr>
                {headers?.map((x) => {
                  return (
                    <td className="border border-gray-200 p-2 text-left">
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

export default QueryResult;
