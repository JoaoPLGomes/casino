import React, { useState } from "react";

import './Exercise1.scss';
import { Store, DispatchConnect } from "../../helpers/types";
import { compose } from "redux";
import { connect } from "react-redux";
import { getCountries } from "../../store/Countries/reselectors";
import { fetchCountries } from "../../store/API/countries";



export const Exercise1 = ({addCountries, getCountries}: any) => {

  const [value, setValue] = useState('')
  const handleChange = (event: any) => {
    setValue(event.target.value);
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    addCountries(value).catch();
  }
  return (
    <>
      <div className="exercise1__container">
        <span className="exercise1__title">Exercise 1 and 3 Page</span>

        <form className="exercise1__form" onSubmit={handleSubmit}>
          <label>
            Name of Country:
            <input type="text" name="name" value={value} onChange={handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="exercise1-countries__container">
        {getCountries.map((country: string, i: number) => <span className="exercise1__country"key={i}>{country}</span>)}
      </div>
    </>
  );
};

const mapStateToProps = (state: Store): any => ({
  getCountries: getCountries(state),
});

const mapDispatchToProps = (dispatch: React.Dispatch<any>): any => ({
  addCountries: async (name: any) => dispatch(fetchCountries(name)),
});

export default compose(
  connect<any,DispatchConnect<any>, any, Store>(mapStateToProps, mapDispatchToProps),
)(Exercise1);
