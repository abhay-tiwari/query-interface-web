import { useToast } from "../custom-hooks/toast";

const API_BASE_URL = "http://localhost:3001/api/";

export type QueryResultResponse = {
  headers: string[];
  rows: any[];
  visualizationData?: any[];
};

export const QueryService = {
  executeQuery: async (body: {
    query: string;
  }): Promise<QueryResultResponse | undefined> => {
    const { showToast } = useToast();
    try {
      const response = await fetch(`${API_BASE_URL}/execute-query`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        showToast("Error in api response", "error");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      showToast("Something went wrong", "error");
    }
  },

  saveQuery: async (body: any): Promise<any> => {
    const { showToast } = useToast();

    try {
      const response = await fetch(`${API_BASE_URL}save-query`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        showToast("Error in saving query", "error");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      showToast("Something went wrong");
    }
  },

  getSavedQueries: async (): Promise<{ data: string[] } | undefined> => {
    const { showToast } = useToast();
    try {
      const response = await fetch(`${API_BASE_URL}get-saved-queries`);
      if (!response.ok) {
        showToast("Error in fetching saved queries", "error");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
      showToast("Error in fetching saved queries", "error");
    }
  },
};
