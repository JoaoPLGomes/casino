import { addCountries } from '../Countries/action';

export const fetchCountries = (name: string) => async (dispatch: any, getState: () => any) => {
    const url = `http://127.0.0.1:8000/api/v1/CountriesRest?name=${name}`;
    return fetch(url)
        .then(async (response: any) => {
            if (response.ok) {
                return response
                    .json()
                    .then((json: any) => {
                        return dispatch(addCountries(json.map((country: any) => country.name)));
                    })
                    .catch((error: any) => console.log(error));
            }
        })
        .catch((error: any) => console.log(error));
};

export const fetchCountriesArr = (countries: string) => async (dispatch: any, getState: () => any) => {
    const url = `http://127.0.0.1:8000/api/v1/CountriesRestArray?array=${countries}`;
    return fetch(url)
        .then(async (response: any) => {
            if (response.ok) {
                return response
                    .json()
                    .then((json: any) => {
                        return dispatch(addCountries(json));
                    })
                    .catch((error: any) => console.log(error));
            }
        })
        .catch((error: any) => console.log(error));
};
