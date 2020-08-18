import { createActions } from 'redux-actions';

export const { addCountries } = createActions({
    ADD_COUNTRIES: (countries: any) => ({ countries }),
});
