export type User = {
  id?: () => void;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type Login = {
  email: string;
  password: string;
};

export type LoginMessage = {
  message: string;
};

export type UsersAll = User[];
