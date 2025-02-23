import { useEffect, useState } from "react";
import {
  QueryResultResponse,
  QueryService,
} from "../../services/query-service";
import { useToast } from "@/custom-hooks/toast";
import { useContext } from "react";
import { QueriesContext } from "@/context/query-context";

const useSqlEditor = () => {
  const [queryResult, setQueryResult] = useState<QueryResultResponse>();
  const { QueriesData } = useContext(QueriesContext);
  const [query, setQuery] = useState<string>("-- Write Query here...");

  const { showToast } = useToast();

  useEffect(() => {
    setQuery(QueriesData.selectedQuery);
  }, [QueriesData]);

  const handleQueryChange = (queryText: string) => {
    setQuery(queryText);
  };

  const handleExecuteQuery = async () => {
    if (!query) {
      showToast("Empty query cannot be executed", "error");
      return;
    }

    const body = {
      query,
    };

    const queryResultResponse = await QueryService.executeQuery(body);
    setQueryResult(queryResultResponse);
  };

  const handleSaveQuery = async () => {
    const { showToast } = useToast();

    if (!query) {
      showToast("Empty Query cannot be saved.", "error");
      return;
    }

    const savedQueries: string[] =
      QueriesData.queries === undefined ? [] : QueriesData.queries;

    if (savedQueries && savedQueries.indexOf(query) != -1) {
      showToast("Query already exists in saved queries", "error");
      return;
    }

    const body = {
      queryText: query,
    };

    try {
      await QueryService.saveQuery(body);
      showToast("Query is saved successfully", "success");
    } catch (err) {
      showToast("Something went wrong!", "error");
    }
  };

  return {
    query,
    handleQueryChange,
    handleExecuteQuery,
    handleSaveQuery,
    queryResult,
  };
};

export default useSqlEditor;
