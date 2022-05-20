import PropTypes from "prop-types";
import SearchResultItem from "../SearchResultItem";
import "./search-results.scss";

const SearchResults = ({ results, onClickHandler }) => (
  <div className="search-results">
    <ul className="search-results__list" role="listbox">
      {results.map((result) => (
        <SearchResultItem
          key={`${result.name}_${result.bookingId}`}
          result={result}
          onClickHandler={onClickHandler}
        />
      ))}
    </ul>
  </div>
);

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      placeType: PropTypes.string,
      name: PropTypes.string,
      iata: PropTypes.string,
      city: PropTypes.string,
      region: PropTypes.string,
      country: PropTypes.string,
    })
  ),
  onClickHandler: PropTypes.func.isRequired,
};

SearchResults.defaultProps = {
  results: [],
};

export default SearchResults;
