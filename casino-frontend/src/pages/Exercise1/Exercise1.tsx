import React, { useState } from "react";

import './Exercise1.scss';



export const Exercise1 = () => {

  const [value, setValue] = useState('')
  const handleChange = (event: any) => {
    setValue(event.target.value);
  }
  const handleSubmit = (event: any) => {
    console.log(value)
    event.preventDefault();
  }

  return (
    <div className="exercise1__container">
      <span className="exercise1__title">Exercise 1 Page</span>

      <form className="exercise1__form" onSubmit={handleSubmit}>
        <label>
          Name of Country:
          <input type="text" name="name" value={value} onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
