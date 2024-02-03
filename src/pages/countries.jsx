// Countries.js
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return data;
};

const Countries = () => {
  const { data: countries } = useQuery('countries', fetchCountries);

  return (
    <div>
      <h2>Countries</h2>
      <ul>
        {countries &&
          countries.map((country) => (
            <li key={country.cca2}>
              <Link to={`/country/${country.cca2}`}>{country.name.common}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Countries;
