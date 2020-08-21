/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express from 'express';
import axios from 'axios';
import validator from 'validator';
import { BASE_URL } from '../contants';

const fetchURL = (url: string) => axios.get(url).catch((err) => console.log(err));

export const list_countries = (req: express.Request, res: express.Response) => {
  if (validator.isAlpha(<string>req.query.name)) {
    axios.get(BASE_URL.replace('{name}', <string>req.query.name ?? ''))
    .then((response) => {
        res.json(response.data);
    }, () => res.json([]))
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log('Error', err.message);
      }
      console.log(err.config);
    });
  } else {
    res.json([])
  }
};

export const list_array_countries = (req: express.Request, res: express.Response) => {
    const arr: any[] = (req.query.array as string)
        ?.split(',')
        .map((val: string) => fetchURL(BASE_URL.replace('{name}', val)));
    Promise.all(arr)
        .then((data) => {
            res.json(data.map((obj: any) => (obj.data ? obj.data.map((arrObj: any) => arrObj.name) : null)));
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {
            console.log(err.request);
          } else {
            console.log('Error', err.message);
          }
          console.log(err.config);
        });
};
