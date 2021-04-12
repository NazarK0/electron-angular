import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import CreateUser from "./components/createUser/createUser.component";
import UserList from "./components/userList/userList.component";
import { UserService } from "./user.service";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import UserPage from "./components/@userPage/userPage.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import userRoutes from "./user.routes";

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        RouterModule.forChild(userRoutes),
        ReactiveFormsModule,
    ],
    declarations: [
        CreateUser,
        UserList,
        UserPage,
    ],
    providers: [UserService]
})
export default class UserModule {}