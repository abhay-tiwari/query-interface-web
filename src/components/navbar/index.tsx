import AutoComplete from "../Autocomplete";
import { useNavbar } from "./operations";

const Navbar = () => {
  const { QueriesData, onQuerySelect } = useNavbar();

  return (
    <div className="container mx-auto h-16 flex border-b border-(--secondary-bg)">
      <div className="flex items-center text-xl">
        <div>Q.I.</div>
      </div>
      <div className="ml-auto py-3 relative">
        {QueriesData.queries && (
          <AutoComplete
            onOptionSelection={onQuerySelect}
            suggestions={QueriesData.queries}
            placeholder="Search Saved Queries"
          />
        )}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
