import { combineReducers } from 'redux';
import { CountriesReducerType } from './Countries/types';
import { CountriesReducer } from './Countries/reducer';

type BaseStoreTypes = CountriesReducerType; // AuthReducerType & ProfileReducerType & MenuReducerType;

const combinedStore = combineReducers<BaseStoreTypes>({
    countries: CountriesReducer,
});

export type combinedType = BaseStoreTypes;

export { combinedStore };
