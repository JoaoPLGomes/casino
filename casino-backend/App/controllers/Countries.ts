/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express from 'express';
import axios from 'axios';
import { BASE_URL } from '../contants';

const fetchURL = (url: string) => axios.get(url).catch(() => 'No results');

export const list_countries = (req: express.Request, res: express.Response) => {
    axios.get(BASE_URL.replace('{name}', <string>req.query.name ?? '')).then((response) => {
        res.json(response.data);
    }).catch((err) => res.json(`Error: ${err.name}`));
};

export const list_array_countries = (req: express.Request, res: express.Response) => {
    const arr: any[] = (req.query.array as string)
        ?.split(',')
        .map((val: string) => fetchURL(BASE_URL.replace('{name}', val)));
    Promise.all(arr)
        .then((data) => {
            res.json(data.map((obj: any) => (obj.data ? obj.data.map((arrObj: any) => arrObj.name) : null)));
        })
        .catch((err) => res.json(`Error: ${err.name}`));
};
