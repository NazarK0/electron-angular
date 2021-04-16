import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import ErrorType from 'src/rendererApp/shared/types/error.type';
import UserInterface from 'src/rendererApp/user/types/user.interface';

import AppState from '../../../../app.state';
import UserListState from '../types/userList.state';

export const UserListFeatureSelector = createFeatureSelector<
AppState,
UserListState
>('userList');

export const isLoadingSelector: MemoizedSelector<AppState, boolean> = createSelector(
 UserListFeatureSelector,
  (state: UserListState) => state.isLoading
);

export const errorSelector: MemoizedSelector<AppState, ErrorType> = createSelector(
 UserListFeatureSelector,
  (state: UserListState) => state.error
);

export const userListSelector: MemoizedSelector<AppState, UserInterface[] | null> = createSelector(
 UserListFeatureSelector,
  (state: UserListState) => state.data
);