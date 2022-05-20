import PropTypes from "prop-types";
import "./search-result-item.scss";

const typeMap = {
  A: "Airport",
  C: "City",
  T: "Station",
};

const SearchResultItem = ({ result, onClickHandler }) => {
  const { placeType, name, iata, city, region, country } = result;

  const title = placeType === "A" ? `${name} (${iata})` : name;
  const caption = [city, region, country].filter(Boolean).join(", ");

  const placeTypeName = typeMap[placeType];
  const isAirport = placeType === "A";

  return (
    <li aria-selected="true" role="option" className="search-result-item">
      <div role="button" tabIndex="0" onMouseDown={() => onClickHandler(`${title}, ${caption}`)}>
        <div className="search-result-item-wrapper">
          {placeType && (
            <span
              data-testid="badge"
              className={`search-result-item__badge ${
                isAirport && "search-result-item__badge--airport"
              }`}
            >
              {placeTypeName || "Other"}
            </span>
          )}
          <div className="search-result-item__body">
            <p className="search-result-item__title">{title}</p>
            <p className="search-result-item__caption">{caption}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

SearchResultItem.propTypes = {
  result: PropTypes.shape({
    placeType: PropTypes.string,
    name: PropTypes.string,
    iata: PropTypes.string,
    city: PropTypes.string,
    region: PropTypes.string,
    country: PropTypes.string,
  }),
  onClickHandler: PropTypes.func.isRequired,
};

SearchResultItem.defaultProps = {
  result: {},
};

export default SearchResultItem;
