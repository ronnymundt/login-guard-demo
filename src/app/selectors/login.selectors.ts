import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILoginState } from '../interfaces/login.interface';
import { loginFeatureKey } from '../reducers/login.reducer';

export const SelectLoginState = createFeatureSelector<ILoginState>(loginFeatureKey);
export const SelectLogin = createSelector(
    SelectLoginState,
    (state: ILoginState) => { return state; } 
);