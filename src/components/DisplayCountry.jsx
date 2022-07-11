import React from "react";

const DisplayCountry = ({ country, text }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 justify-items-center px-10 md:grid-cols-2 lg:grid-cols-3 bg-slate-300">
        {country
          .filter((countries) => {
            if (text === "") {
              return countries;
            } else if (
              countries.name.common.toLowerCase().includes(text.toLowerCase())
            ) {
              return countries;
            }
          })
          .map((countries) => (
            <div className="pt-10 rounded-md shadow-2xl">
              <img className="w-96" src={countries.flags.png} alt="" />
              <p>Name: {countries.name.common}</p>
              <p>Capital: {countries.capital}</p>
              <p>Region: {countries.region}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default DisplayCountry;
