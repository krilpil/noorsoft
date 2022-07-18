export type UserFormData = {
  email: string;
  password: string;
};

export type UserForgotPasswordData = Pick<UserFormData, 'email'>;

export type UserResetPasswordData = Pick<UserFormData, 'password'> & Record<'code', string>;

export type UserData = {
  isAuth: boolean;
  email: string | null;
  token: string | null;
  id: string | null;
};
