import { useSqlTables } from "./operations";

const SqlTables = () => {
  const { tables, openSchemaDialog } = useSqlTables();

  return (
    <div className="mr-3">
      <ul>
        {tables?.map((x) => (
          <li>
            <button onClick={openSchemaDialog} className="flex p-2">
              <div className="text-xl mr-3">
                <i className="fa fa-table"></i>
              </div>
              <div>{x.tableName}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SqlTables;
