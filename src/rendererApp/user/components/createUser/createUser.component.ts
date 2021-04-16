import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import AppState from "src/rendererApp/app.state";
import UserInputInterface from "../../types/userInput.interface";
import { getUserListAction } from "../userList/store/actions/getUserList.action";
import { createUserAction } from "./store/actions/createUser.action";

@Component({
    selector: 'app-user-create',
    templateUrl: './createUser.component.html',
    styleUrls:[
        './createUser.component.scss'
    ]
})
export default class CreateUser {
    isSubmitting: boolean = false;
    form: FormGroup = new FormGroup({});

    constructor(
        private fb: FormBuilder,
        private store: Store<AppState>,
      ) {}

      initializeForm(): void {  
        this.form  = this.fb.group({
          login: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(30),
          ]),
          password: new FormControl('', [
            Validators.maxLength(200)
          ]),
        });
      }
        
      ngOnInit(): void {
        this.initializeForm();
      }
        
      onSubmit(): void {
        // console.log(this.form.value);
        const input: UserInputInterface = this.form.value;
        this.store.dispatch(createUserAction({ userInput: input }));
        this.store.dispatch(getUserListAction());
        this.form.reset();
      }
    
}