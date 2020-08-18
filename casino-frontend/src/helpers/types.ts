import { Dispatch } from 'redux';
import * as ReducerTypes from '../store/';

export type Store = ReducerTypes.combinedType;
export type DispatchConnect<T> = (dispatch: Dispatch<any>) => T;

export interface Action<T> {
    type: string;
    payload: T;
}

export interface StringTMap<T> {
    [key: string]: T;
}
