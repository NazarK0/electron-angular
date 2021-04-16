import CreateUserState from "./user/components/createUser/types/createUser.state";
import UserListState from "./user/components/userList/types/userList.state";

export default interface AppState {
    createUser: CreateUserState,
    userList: UserListState,
}