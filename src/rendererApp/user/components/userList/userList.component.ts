import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import UserInterface from "src/electron/entities/user/user.interface";
import AppState from "src/rendererApp/app.state";
import ErrorType from "src/rendererApp/shared/types/error.type";
import { getUserListAction } from "./store/actions/getUserList.action";
import { errorSelector, isLoadingSelector, userListSelector } from "./store/userList.selector";

@Component({
    selector: 'app-user-list',
    templateUrl: './userList.component.html',
    styleUrls: [
        './userList.component.scss',
    ]
})
export default class UserList implements OnInit {
    isLoading$!: Observable<boolean>;
    error$!: Observable<ErrorType>;
    users$!: Observable<UserInterface[] | null>;
   
    constructor(
      private store: Store<AppState>,
    ) { }
  
    fetchData(): void {
      this.store.dispatch(getUserListAction());
    }
  
    initializeValues(): void {
      this.isLoading$ = this.store.pipe(select(isLoadingSelector));
      this.error$ = this.store.pipe(select(errorSelector));
      this.users$ = this.store.pipe(select(userListSelector));
    }
      
    ngOnInit(): void {
        this.initializeValues();
        this.fetchData();
      
    }
}
