import { useState } from "react";

const useSqlEditor = () => {
    const [query, setQuery] = useState<string>("-- Write Query here...");

  const handleQueryChange = (queryText: string) => {
    setQuery(queryText);
  };

  return {
    query, handleQueryChange
  }
}

export default useSqlEditor;