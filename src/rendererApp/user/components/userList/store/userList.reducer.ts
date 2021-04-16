/* eslint-disable @typescript-eslint/indent */
import { routerNavigationAction } from '@ngrx/router-store';
import { Action,createReducer, on } from '@ngrx/store';

import UserListState from '../types/userList.state';
import { getUserListAction, getUserListFailureAction, getUserListSuccessAction } from './actions/getUserList.action';

const initialState: UserListState = {
  isLoading: false,
  error: null,
  data: null
};

const reducer = createReducer(initialState,
  on(getUserListAction,
    (state: UserListState): UserListState => ({
      ...state,
      isLoading: true,
  })),
  on(getUserListSuccessAction,
    (state: UserListState, action): UserListState => ({
      ...state,
      isLoading: false,
      data: action.list
  })),
  on(getUserListFailureAction,
    (state, action): UserListState => ({
      ...state,
      isLoading: false,
      error: action.error
  })),
  on(routerNavigationAction, (): UserListState => initialState),
);

export default function userListReducer(state: UserListState, action: Action): UserListState {
  return reducer(state, action);
}
