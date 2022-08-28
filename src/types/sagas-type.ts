export type actionType<Payload = string> = {
  type: string;
  payload: Payload;
};

export type resetPasswordFormType = {
  password: string;
  code: string;
};
