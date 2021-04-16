import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import UserInterface from 'src/rendererApp/user/types/user.interface';
import UserService from 'src/rendererApp/user/user.service';

import { createUserAction, createUserFailureAction,createUserSuccessAction } from '../actions/createUser.action';

@Injectable()
export default class CreateUserEffect {
  createUser$ = createEffect(() => this.actions$.pipe(
    ofType(createUserAction),
    switchMap(({ userInput }) => {
      return this.userService.create(userInput).pipe(
        map((user: UserInterface) => createUserSuccessAction({ user })),
        catchError((error) => {
          return of(createUserFailureAction(error));
        })
      );
    })
  ));
 
  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}
}
