import UserInterface from 'src/electron/entities/user/user.interface';
import ErrorType from '../../../../shared/types/error.type';

export default interface UserListState {
  isLoading: boolean;
  data: UserInterface[] | null;
  error: ErrorType;
}
