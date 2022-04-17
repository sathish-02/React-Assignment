import React from "react";
import { useState } from "react";
import axios from "axios";

export const Country = () => {
  const [country, setCountry] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setCountry({
      ...country,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/city", country).then((e) => {
      setCountry({
        country: "",
      });
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          style={{
            margin: "10px 2px 10px 8px",
            border: "2px solid transparent",
            padding: "5px",
          }}
        >
          Country
        </label>
        <input
          type="text"
          onChange={handleChange}
          name="country"
          value={country.country}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
