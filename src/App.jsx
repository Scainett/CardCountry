import { useState } from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import CountriesList from "./Countries/CountriesLists";
import { getCountriesByName } from "./actions/getCountriesByName";
import "./App.css";



function App() {
  const [countries, setCountries] = useState([]);

  const handleSearch = async (name) => {
    const results = await getCountriesByName(name);
    setCountries(results);
  };

  return (
    <div className="App">
      <Header title="CountriesApp" description="Buscador de Países" />
      <Search placeholder="Ingrese el nombre del país..." onSearch={handleSearch} />
      <CountriesList countries={countries} />
    </div>
  );

}

export default App;
