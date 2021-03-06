import React, { useState } from 'react';

import './Exercise2.scss';
import { Store, DispatchConnect } from '../../helpers/types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getCountries } from '../../store/Countries/reselectors';
import { fetchCountriesArr } from '../../store/API/countries';

export const Exercise2 = ({ addCountries, getCountries }: any) => {
    const [value, setValue] = useState('');
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        addCountries(value).catch();
    };
    return (
        <>
            <div className="exercise2__container">
                <span className="exercise2__title">Exercise 2 Page</span>

                <form className="exercise2__form" onSubmit={handleSubmit}>
                    <label>
                        <input type="text" name="name" value={value} className="search__container" onChange={handleChange} placeholder="Separate countries by ','"/>
                    </label>
                    <input type="submit" className="search__button" value="Search" />
                </form>
            </div>
            <div className="exercise2-countries__container">
                {getCountries.map((countries: string[]) => (
                  <div className="exercise2-country__container">
                    {countries?.map((country: string,j: number) =>  <span className="exercise2__country" key={j}>{country}</span>)}
                  </div>
                ))}
            </div>
        </>
    );
};

const mapStateToProps = (state: Store): any => ({
    getCountries: getCountries(state),
});

const mapDispatchToProps = (dispatch: React.Dispatch<any>): any => ({
    addCountries: async (name: any) => dispatch(fetchCountriesArr(name)),
});

export default compose(connect<any, DispatchConnect<any>, any, Store>(mapStateToProps, mapDispatchToProps))(Exercise2);
