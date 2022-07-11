import React from "react";
import { useState } from "react";

const InputCountry = ({ text, setText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="pl-14 bg-slate-300">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search a country name"
            value={text}
            onChange={handleChange}
            className="w-64 rounded-md py-2 outline-none"
          />
          <button className="bg-black text-white rounded-md px-4 py-2">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default InputCountry;
