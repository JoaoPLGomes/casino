/* eslint-disable @typescript-eslint/no-explicit-any */
// wiki.js - Wiki route module.
import express from 'express';
import { list_countries, list_array_countries } from '../controllers/Countries';

const router = express.Router();

router.get('/CountriesRest', list_countries);

router.get('/CountriesRestArray', list_array_countries);

export default router;
