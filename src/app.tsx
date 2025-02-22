import { ToastContainer } from "react-toastify";
import "./app.css";
import Navbar from "./components/Navbar";
import SqlEditor from "./components/SqlEditor";
import SqlTables from "./components/SqlTables";

export const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <div className="flex p-5">
          <div className="w-60">
            <SqlTables />
          </div>
          <div className="flex-auto">
            <div>
              <SqlEditor />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
