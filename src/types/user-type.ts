export type UserFormData = {
  email: string;
  password: string;
};

export type UserForgotPasswordData = Pick<UserFormData, 'email'>;

export type UserResetPasswordData = Pick<UserFormData, 'password'> & Record<'code', string>;

export type UserData = {
  authorization?: boolean;
  error?: string | null;
  email: string | null;
  token: string | null;
  id: string | null;
};
