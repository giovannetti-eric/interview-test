export type Users = User[];

export interface User {
  age: number;
  country: string;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
}
