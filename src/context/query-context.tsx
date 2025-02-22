import { createContext, useEffect, useState } from "react";
import { QueryService } from "../services/query-service";
import { useToast } from "../custom-hooks/toast";

export type QueriesData = {
  queries?: string[];
  selectedQuery?: string;
};

export const QueriesContext = createContext({
  QueriesData: { queries: undefined, selectedQuery: "" },
  UpdatedQueriesData: (queriesData: QueriesData) => {},
});

export const QueriesProvider = ({ children }: any) => {
  const [QueriesData, setQueriesData] = useState<QueriesData>({
    queries: [],
    selectedQuery: "",
  });

  const UpdatedQueriesData = (queriesData: QueriesData) => {
    if (queriesData.selectedQuery) {
      setQueriesData({
        ...QueriesData,
        selectedQuery: queriesData.selectedQuery,
      });
    }

    if (queriesData.queries) {
      setQueriesData({
        ...queriesData,
        selectedQuery: queriesData.selectedQuery,
      });
    }
  };

  const { showToast } = useToast();

  useEffect(() => {
    fetchSavedQueries();
  }, []);

  const fetchSavedQueries = async () => {
    try {
      const response = await QueryService.getSavedQueries();
      setQueriesData({ ...QueriesData, queries: response?.data });
    } catch (err) {
      showToast("Error in Fetching Saved Queries", "error");
    }
  };

  return (
    <QueriesContext.Provider value={{ QueriesData, UpdatedQueriesData }}>
      {children}
    </QueriesContext.Provider>
  );
};
