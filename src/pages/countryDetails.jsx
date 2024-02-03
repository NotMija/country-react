import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const fetchCountryDetails = async (id) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  const data = await response.json();
  return data;
};

const CountryDetails = () => {
  const { id } = useParams();
  const { data: country } = useQuery(['country', id], () => fetchCountryDetails(id));

  if (!country) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h2>{country.name?.common}</h2>
      {/* Mostrar otros detalles del país según sea necesario */}
    </div>
  );
};

export default CountryDetails;

