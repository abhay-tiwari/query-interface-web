const API_BASE_URL = "http://localhost:3001/api/";

export type QueryResultResponse = {
  headers: string[];
  rows: any[];
};

export const QueryService = {
  getQueryResult: async (): Promise<QueryResultResponse | undefined> => {
    try {
      const response = await fetch(`${API_BASE_URL}/query-result`);
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
