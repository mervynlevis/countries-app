import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";

function Country() {
  const [country, setCountry] = useState([]);
  const [countries, setCountries] = useState([]);
  const { name } = useParams();

  const history = useHistory("");

  // get current country info from api call

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => {
        console.log(response.data);
        setCountry(response.data);
      });
  }, []);

  // get all Countries to get border country link from code

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const renderCountry = (country, index) => {
    const languages = country.languages;
    const currency = country.currencies;

    return (
      <div className="countryInfo">
        <Link to="/">
          <button className="backBtn">&lt; Back</button>
        </Link>
        <img className="infoFlag" src={country.flag} alt={country.name} />
        <div className="singleCountryCard" key={index}>
          <p>
            <b>
              {country.name} ( {country.nativeName} )
            </b>
          </p>
          <p>
            <b>Capital:</b> {country.capital}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Subregion:</b> {country.subregion}
          </p>
          <p>
            <b>Population:</b> {country.population.toLocaleString()}
          </p>
          <p>
            <b>Timezone:</b> {country.timezones} &nbsp;
          </p>
          <p>
            <b>Currency:</b>{" "}
            {currency.map((currencyName) => {
              return <span>{currencyName.code} </span>;
            })}
          </p>
          <p>
            <b>Languages:</b>{" "}
            {languages.map((langName) => {
              return <span>{langName.name} </span>;
            })}
          </p>
        </div>
      </div>
    );
  };

  // this function gets the full country name from the border countries, want to use it to redirect to that countries page onClick

  function handleClick(event) {
    console.log(event.target.value);

    countries.map((country) => {
      if (event.target.value === country.alpha3Code) {
        console.log(country.alpha3Code);
        console.log(country.name);
        history.push(`./${country.name}`);
        window.location.reload();
      }
    });
  }

  const renderBorders = (borderCountry, index) => {
    const borders = borderCountry.borders;
    const borderingCountryCodes = borderCountry.borders;
    console.log("codes: " + borderingCountryCodes);

    console.log(countries);

    return (
      <div className="bordering">
        <p>Bordering Countries</p>
        <div className="btn-group">
          {borders.map((borderName) => {
            return (
              <button
                className="border-btn"
                value={borderName}
                onClick={handleClick}
              >
                {borderName}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="mainContent">
      <div className="countriesSingle">
        {country.slice(0, 1).map(renderCountry)}
      </div>
      <div className="borderLinks">
        {country.slice(0, 1).map(renderBorders)}
      </div>
    </div>
  );
}

export default Country;

// `https://restcountries.eu/rest/v2/name/${name}`
// https://restcountries.eu/rest/v2/alpha/${country.alpha3Code}
