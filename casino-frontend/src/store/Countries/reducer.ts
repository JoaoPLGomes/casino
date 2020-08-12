import { handleActions } from 'redux-actions';

import { PropsCountriesReducerType } from './types';

export const initialState: PropsCountriesReducerType = {
  objs: [],
};

export const CountriesReducer = handleActions<any>(
  {
    ADD_COUNTRIES: (state: PropsCountriesReducerType, action: any) => ({
      ...state,
      objs: action.payload.countries,
    }),
  },
  initialState
);
