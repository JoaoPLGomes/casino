import { Store } from '../../helpers/types';

export const getCountries = (state: Store) => state.countries.objs;
