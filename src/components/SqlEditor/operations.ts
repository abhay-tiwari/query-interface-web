import { useState } from "react";
import {
  QueryResultResponse,
  QueryService,
} from "../../services/query-service";

const useSqlEditor = () => {
  const [query, setQuery] = useState<string>("-- Write Query here...");
  const [queryResult, setQueryResult] = useState<QueryResultResponse>();

  const handleQueryChange = (queryText: string) => {
    setQuery(queryText);
  };

  const handleExecuteQuery = async () => {
    const queryResultResponse = await QueryService.getQueryResult();
    setQueryResult(queryResultResponse);
  };

  return {
    query,
    handleQueryChange,
    handleExecuteQuery,
    queryResult,
  };
};

export default useSqlEditor;
