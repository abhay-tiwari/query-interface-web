import { SqlTable } from "../components/SqlTables/operations";

const API_BASE_URL = "https://query-interface-backend.onrender.com/api/";

export const SqlTableService = {
  getSqlTables: async (): Promise<SqlTable[] | undefined> => {
    try {
      const response = await fetch(`${API_BASE_URL}/sql-tables`);
      if (!response.ok) {
        console.log("err in api response");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};
