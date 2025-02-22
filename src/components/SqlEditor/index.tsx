import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";

import useSqlEditor from "./operations";
import QueryResult from "../QueryResult";
import AutoComplete from "../Autocomplete";

const SqlEditor = () => {
  const {
    query,
    handleQueryChange,
    handleExecuteQuery,
    queryResult,
    handleSaveQuery,
    onQuerySelect,
    savedQueries,
  } = useSqlEditor();

  return (
    <div>
      <div className="flex my-4 items-start justify-end">
        <div>
          <AutoComplete
            onOptionSelection={onQuerySelect}
            suggestions={savedQueries}
            placeholder="Search Saved Queries"
          />
        </div>
      </div>
      <AceEditor
        mode="sql"
        theme="one_dark"
        name="code-editor"
        value={query}
        onChange={handleQueryChange}
        width="100%"
        height="300px"
        setOptions={{
          fontSize: "16px",
          fontFamily: "JetBrains Mono",
          enableLiveAutocompletion: true,
          enableBasicAutocompletion: true,
          showPrintMargin: false,
        }}
      />

      <div className="flex justify-end">
        <button
          onClick={handleSaveQuery}
          className="bg-(--secondary-bg) text-(--primary-color) px-5 py-2 border border-(--primary-color) rounded-lg mt-5  mr-3  transition-all hover:bg-(--primary-color) hover:cursor-pointer hover:text-(--primary-text) focus:bg-(--primary-color) focus:text-(--text-primary) focus:cursor-pointer"
        >
          Save Query
        </button>

        <button
          onClick={handleExecuteQuery}
          className=" bg-(--primary-bg) text-(--primary-color) px-5 py-2 border border-(--primary-color) rounded-lg mt-5 transition-all hover:bg-(--primary-color) hover:cursor-pointer hover:text-(--primary-text) focus:bg-(--primary-color) focus:text-(--text-primary) focus:cursor-pointer"
        >
          Execute
        </button>
      </div>

      <div class="mt-5">
        <QueryResult headers={queryResult?.headers} rows={queryResult?.rows} />
      </div>
    </div>
  );
};

export default SqlEditor;
