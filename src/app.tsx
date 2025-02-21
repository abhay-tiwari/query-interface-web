import "./app.css";
import Navbar from "./components/Navbar";
import SqlEditor from "./components/SqlEditor";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex p-5">
        <div className="w-50">Data Source will load here</div>
        <div className="flex-auto">
          <SqlEditor />
        </div>
      </div>
    </>
  );
};
