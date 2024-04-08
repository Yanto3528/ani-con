export type ActionSuccess = {
  status: 'success';
  message: string;
};

export type ActionError = {
  status: 'error';
  message: string;
  errors: {
    path: string;
    message: string;
  }[];
};

export type ActionState = ActionSuccess | ActionError | null;
