import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Countries() {
  // https://restcountries.eu/rest/v2/all

  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // fetch all data from countries API using axios npm,
  //   used useEffect to only call api once, passed empty array

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const renderCountries = (country, index) => {
    if (searchTerm === "") {
      return (
        <Link className="mainCardLink" to={`/${country.name}`} key={index}>
          <div className="countryCardMain" key={index}>
            <img className="flag" src={country.flag} alt={country.name} />
            <p className="topInfoMain">
              <b>
                {country.name} | {country.nativeName}
              </b>
            </p>
            <p className="topInfoMain">
              <b>Capital: </b>
              {country.capital}
            </p>
            <p className="popInfoMain">
              <b>Population:</b> {country.population.toLocaleString()}
            </p>
          </div>
        </Link>

        // search will only return where search term matches the country.name
      );
    } else if (country.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return (
        <Link className="mainCardLink" to={`/countries-app/${country.name}`}>
          <div className="countryCardMain" key={index}>
            <img className="flag" src={country.flag} alt={country.name} />
            <p className="topInfoMain">
              <b>
                {country.name} | {country.nativeName}
              </b>
            </p>
            <p className="topInfoMain">
              <b>Capital: </b>
              {country.capital}
            </p>
            <p className="popInfoMain">
              <b>Population:</b> {country.population.toLocaleString()}
            </p>
          </div>
        </Link>
      );
    }
  };

  // search functionality

  function handleChange(event) {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }

  return (
    <div className="mainContent">
      <input
        className="searchBar"
        type="text"
        name="search"
        placeholder="Search..."
        onChange={handleChange}
      ></input>
      <div className="countries">{countries.map(renderCountries)}</div>
    </div>
  );
}

export default Countries;
