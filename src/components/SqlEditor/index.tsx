import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-one_dark";

const SqlEditor = () => {
  const [query, setQuery] = useState<string>("");

  const handleQueryChange = () => {};

  return (
    <div style={{ height: "500px" }}>
      <AceEditor
        mode="sql"
        theme="one_dark"
        name="code-editor"
        value={query}
        onChange={handleQueryChange}
        width="100%"
        height="100%"
        setOptions={{
          fontSize: "16px",
          fontFamily: "JetBrains Mono",
        }}
      />
    </div>
  );
};

export default SqlEditor;
