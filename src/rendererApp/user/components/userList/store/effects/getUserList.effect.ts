import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import UserInterface from 'src/rendererApp/user/types/user.interface';
import UserService from 'src/rendererApp/user/user.service';

import { getUserListAction, getUserListFailureAction, getUserListSuccessAction } from '../actions/getUserList.action';

@Injectable()
export default class GetUserListEffect {
  userList$ = createEffect(() => this.actions$.pipe(
    ofType(getUserListAction),
    switchMap(() => {
      return this.userService.getAll().pipe(
        map((list: UserInterface[]) => getUserListSuccessAction({ list })),
        catchError((error) => {
          return of(getUserListFailureAction(error));
        })
      );
    })
  ));
 
  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}
}
