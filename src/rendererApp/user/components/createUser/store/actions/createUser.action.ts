import { createAction, props } from '@ngrx/store';
import UserInterface from 'src/electron/entities/user/user.interface';
import UserInputInterface from 'src/electron/entities/user/userInput.interface';
import ErrorInterface from '../../../../../shared/types/error.interface';
import createUserActionTypes from '../createUser.action-types';

export const createUserAction = createAction(
  createUserActionTypes.CREATE_USER,
  props<{ userInput: UserInputInterface }>()
);

export const createUserSuccessAction = createAction(
  createUserActionTypes.CREATE_USER_SUCCESS,
  props<{ user: UserInterface }>(),
);

export const createUserFailureAction = createAction(
  createUserActionTypes.CREATE_USER_FAILURE,
  props<{ error: ErrorInterface }>()
);
