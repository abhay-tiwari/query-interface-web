import React from "react";
import Dialog from "../Dialog";
import { useSqlTables } from "./operations";

const SqlTables = () => {
  const {
    tables,
    toggleSchemaDialog,
    isSchemaDialogOpen,
    onTableSelect,
    selectedSchema,
  } = useSqlTables();

  return (
    <div className="mr-3">
      <h2 className="text-lg font-semibold mb-5">Tables </h2>
      <ul>
        {tables?.map((x) => (
          <li>
            <button
              onClick={() => onTableSelect(x.schema)}
              className="flex p-2"
            >
              <div className="text-xl mr-3">
                <i className="fa fa-table"></i>
              </div>
              <div>{x.tableName}</div>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        isOpen={isSchemaDialogOpen}
        onClose={() => toggleSchemaDialog(false)}
        title="Table Schema"
      >
        <table className="w-100">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2 text-left">Field</th>
              <th className="border border-gray-200 p-2 text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            {selectedSchema?.map((x) => {
              return (
                <tr>
                  <td className="border border-gray-200 p-2">{x.fieldName}</td>
                  <td className="border border-gray-200 p-2">{x.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Dialog>
    </div>
  );
};

export default SqlTables;
