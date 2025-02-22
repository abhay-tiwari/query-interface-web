import { useState } from "react";

export const useAutocompleteOperation = (
  suggestions: string[],
  onOptionSelection: (selectedOption: string | undefined) => void
) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isListVisible, setIsListVisible] = useState<boolean>(false);

  const handleInputChange = (event: any) => {
    const query = event?.target?.value;
    setInputValue(query);

    if (query) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsListVisible(true);
    } else {
      setFilteredSuggestions([]);
      setIsListVisible(false);
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    onOptionSelection(suggestion);
  };

  return {
    inputValue,
    filteredSuggestions,
    isListVisible,
    handleInputChange,
    handleSelectSuggestion,
  };
};
