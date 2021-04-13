import ErrorType from '../../../../shared/types/error.type';

export default interface CreateUserState {
  isSubmitting: boolean;
  error: ErrorType;
}
