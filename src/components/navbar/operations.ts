import { useContext } from "react";
import { QueriesContext } from "../../context/query-context";

export const useNavbar = () => {
  const { QueriesData, UpdatedQueriesData } = useContext(QueriesContext);

  const onQuerySelect = (selectedQuery: string | undefined) => {
    if (!selectedQuery) {
      return;
    }

    UpdatedQueriesData({ selectedQuery });
  };

  return {
    QueriesData,
    onQuerySelect,
  };
};
