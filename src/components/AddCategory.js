import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setcategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      setcategories((categories) => [inputValue, ...categories]);
      setinputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>{inputValue}</h2>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};
