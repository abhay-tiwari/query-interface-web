import React from "react";
import { createContext, useEffect, useState } from "react";
import { QueryService } from "@/services/query-service";
import { useToast } from "@/custom-hooks/toast";

type QueriesData = {
  queries: string[];
  selectedQuery: string;
};

type QueriesContextType = {
  QueriesData: QueriesData;
  UpdateQueriesData: (queriesData: QueriesData) => void;
};

export const QueriesContext = createContext<QueriesContextType>({
  QueriesData: { queries: [""], selectedQuery: "" },
  UpdateQueriesData: () => {},
});

export const QueriesProvider = ({ children }: any) => {
  const [QueriesData, setQueriesData] = useState<QueriesData>({
    queries: [],
    selectedQuery: "",
  });

  const UpdateQueriesData = (queriesData: QueriesData) => {
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
      setQueriesData({
        ...QueriesData,
        queries: response?.data ? response.data : [],
      });
    } catch (err) {
      showToast("Error in Fetching Saved Queries", "error");
    }
  };

  return (
    <QueriesContext.Provider value={{ QueriesData, UpdateQueriesData }}>
      {children}
    </QueriesContext.Provider>
  );
};
