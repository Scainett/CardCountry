import PropTypes from "prop-types";
import "./CountryCard.css";

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.flags.png} alt={country.name.common} />
      <h3>{country.name.common}</h3>
      {country.capital && <p><strong>Capital:</strong> {country.capital[0]}</p>}
      {country.population && <p><strong>Población:</strong> {country.population.toLocaleString()}</p>}
      {country.region && <p><strong>Región:</strong> {country.region}</p>}
    </div>
  );
}

CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.object.isRequired,
    flags: PropTypes.object.isRequired,
    capital: PropTypes.array,
    population: PropTypes.number,
    region: PropTypes.string,
  }).isRequired,
};

export default CountryCard;
