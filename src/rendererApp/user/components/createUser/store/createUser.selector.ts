import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import ErrorType from 'src/rendererApp/shared/types/error.type';

import AppState from '../../../../app.state';
import CreateUserState from '../types/createUser.state';

export const DSG_CreateFeatureSelector = createFeatureSelector<
AppState,
CreateUserState
>('createUser');

export const isSubmittingSelector: MemoizedSelector<AppState, boolean> = createSelector(
  DSG_CreateFeatureSelector,
  (state: CreateUserState) => state.isSubmitting
);

export const errorSelector: MemoizedSelector<AppState, ErrorType> = createSelector(
  DSG_CreateFeatureSelector,
  (state: CreateUserState) => state.error
);