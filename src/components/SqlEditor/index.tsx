import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";

import useSqlEditor from "./operations";
import QueryResult from "../QueryResult";

const SqlEditor = () => {
  const { query, handleQueryChange, handleExecuteQuery, queryResult } =
    useSqlEditor();

  return (
    <div>
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
          onClick={handleExecuteQuery}
          className="bg-white text-blue-500 px-5 py-2 border border-blue-500 rounded-lg mt-5 transition-all hover:bg-blue-500 hover:cursor-pointer hover:text-(--primary-text) focus:bg-blue-500 focus:text-(--text-primary) focus:cursor-pointer"
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
