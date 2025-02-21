import "./app.css";
import Navbar from "./components/Navbar";
import QueryResult from "./components/QueryResult";
import SqlEditor from "./components/SqlEditor";
import SqlTables from "./components/SqlTables";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex p-5">
        <div className="w-60">
          <SqlTables />
        </div>
        <div className="flex-auto">
          <div>
            <SqlEditor />
          </div>
          <div class="mt-5">
            <QueryResult />
          </div>
        </div>
      </div>
    </>
  );
};
