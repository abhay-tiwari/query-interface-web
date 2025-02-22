import { useEffect, useState } from "react";
import {
  QueryResultResponse,
  QueryService,
} from "../../services/query-service";
import { useToast } from "../../custom-hooks/toast";

const useSqlEditor = () => {
  const [query, setQuery] = useState<string>("-- Write Query here...");
  const [queryResult, setQueryResult] = useState<QueryResultResponse>();
  const [savedQueries, setSavedQueries] = useState([]);

  useEffect(() => {
    getSavedQueries();
  }, []);

  const handleQueryChange = (queryText: string) => {
    setQuery(queryText);
  };

  const handleExecuteQuery = async () => {
    const queryResultResponse = await QueryService.getQueryResult();
    setQueryResult(queryResultResponse);
  };

  const handleSaveQuery = async () => {
    const { showToast } = useToast();

    const body = {
      queryText: query,
    };

    try {
      const saveQueryResponse = await QueryService.saveQuery(body);
      showToast("Query is saved successfully", "success");
    } catch (err) {
      showToast("Something went wrong!", "error");
    }
  };

  const getSavedQueries = async () => {
    const { showToast } = useToast();
    try {
      const savedQueriesResponse = await QueryService.getSavedQueries();
      setSavedQueries(savedQueriesResponse.data);
    } catch (err) {
      showToast("Something went wrong!");
    }
  };

  const onQuerySelect = async () => {};

  return {
    query,
    handleQueryChange,
    handleExecuteQuery,
    handleSaveQuery,
    queryResult,
    onQuerySelect,
    savedQueries,
  };
};

export default useSqlEditor;
