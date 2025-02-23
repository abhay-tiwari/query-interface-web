import { useContext } from "react";
import { QueriesContext } from "@/context/query-context";

export const useNavbar = () => {
  const { QueriesData, UpdateQueriesData } = useContext(QueriesContext);

  const onQuerySelect = (selectedQuery: string | undefined) => {
    if (!selectedQuery) {
      return;
    }

    UpdateQueriesData({ queries: QueriesData.queries, selectedQuery });
  };

  return {
    QueriesData,
    onQuerySelect,
  };
};
