import PropTypes from "prop-types";
import CountryCard from "../Components/CountryCard";

function CountriesList({ countries }) {
  if (countries.length === 0) {
    return <p>No se encontraron países</p>;
  }

  return (
    <div className="countries-list">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}

CountriesList.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default CountriesList;
