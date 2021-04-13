/* eslint-disable @typescript-eslint/indent */
import { routerNavigationAction } from '@ngrx/router-store';
import { Action,createReducer, on } from '@ngrx/store';

import CreateUserState from '../types/createUser.state';
import { createUserAction, createUserFailureAction,createUserSuccessAction } from './actions/createUser.action';

const initialState: CreateUserState = {
  isSubmitting: false,
  error: null,
};

const reducer = createReducer(initialState,
  on(createUserAction,
    (state: CreateUserState): CreateUserState => ({
      ...state,
      isSubmitting: true,
  })),
  on(createUserSuccessAction,
    (state: CreateUserState): CreateUserState => ({
      ...state,
      isSubmitting: false,
  })),
  on(createUserFailureAction,
    (state, action): CreateUserState => ({
      ...state,
      isSubmitting: false,
      error: action.error
  })),
  on(routerNavigationAction, (): CreateUserState => initialState),
);

export default function createUserReducer(state: CreateUserState, action: Action): CreateUserState {
  return reducer(state, action);
}
