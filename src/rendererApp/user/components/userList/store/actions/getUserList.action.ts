import { createAction, props } from '@ngrx/store';
import UserInterface from 'src/electron/entities/user/user.interface';
import UserInputInterface from 'src/electron/entities/user/userInput.interface';
import ErrorInterface from '../../../../../shared/types/error.interface';
import userListActionTypes from '../userList.action-types';

export const getUserListAction = createAction(
  userListActionTypes.GET_USER_LIST
);

export const getUserListSuccessAction = createAction(
  userListActionTypes.GET_USER_LIST_SUCCESS,
  props<{ list: UserInterface[] }>(),
);

export const getUserListFailureAction = createAction(
  userListActionTypes.GET_USER_LIST_FAILURE,
  props<{ error: ErrorInterface }>()
);
