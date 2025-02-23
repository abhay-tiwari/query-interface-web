import { useAutocompleteOperation } from "./operations";

interface AutoCompleteProps {
  suggestions: string[];
  placeholder?: string;
  onOptionSelection: (selectedOption: string | undefined) => void;
}

const AutoComplete = ({
  suggestions,
  placeholder,
  onOptionSelection,
}: AutoCompleteProps) => {
  const {
    inputValue,
    filteredSuggestions,
    isListVisible,
    handleSelectSuggestion,
    handleInputChange,
    autocompleteRef,
  } = useAutocompleteOperation(suggestions, onOptionSelection);
  return (
    <div className="relative w-full" ref={autocompleteRef}>
      <input
        className="p-2 h-full border border-(--text-primary) rounded-lg transition-all hover:border-(--primary-color) focus:border-(--primary-color)"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder ? placeholder : "Search..."}
      />
      {isListVisible && filteredSuggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-(--primary-bg) border border-(--text-primary) rounded-md max-h-40 overflow-y-auto mt-1 z-100">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={(event) => {
                event.preventDefault();
                handleSelectSuggestion(suggestion);
              }}
              className="px-2 py-1 bg-(--primary-bg) cursor-pointer transition hover:bg-(--text-primary) hover:text-(--primary-bg)"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
