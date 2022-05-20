import { useState, useEffect } from "react";
import Search from "@mui/icons-material/Search";
import InputField from "../InputField";
import SearchResults from "../SearchResults";
import "./search-tool.scss";

const MIN_SEARCH_CHARS = 2;

const SearchTool = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const getDatas = async () => {
      const response = await fetch(
        `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=5&solrTerm=${searchInput}`
      );
      const data = await response.json();
      const results = data?.results?.docs;
      setSuggestions(results);
    };

    if (searchInput.length < MIN_SEARCH_CHARS) return;

    getDatas();
  }, [searchInput]);

  const onSearchChange = (event) => {
    const { value } = event?.target;
    setSearchInput(value);

    const shouldShowSuggestions = value.length >= MIN_SEARCH_CHARS;
    setShowSuggestions(shouldShowSuggestions);
  };
  const onFocus = () => {
    const shouldShowSuggestions = searchInput.length >= MIN_SEARCH_CHARS;
    setShowSuggestions(shouldShowSuggestions);
  };
  const onBlur = () => setShowSuggestions(false);
  const onSuggestionClick = (givenName) => setSearchInput(givenName);

  return (
    <div id="search-tool" className="search-suggestions">
      <InputField
        label="Pick-up Location"
        icon={<Search />}
        inputProps={{
          onFocus,
          onBlur,
          onChange: onSearchChange,
          value: searchInput,
        }}
      />
      {showSuggestions && (
        <SearchResults results={suggestions} onClickHandler={onSuggestionClick} />
      )}
    </div>
  );
};

export default SearchTool;
