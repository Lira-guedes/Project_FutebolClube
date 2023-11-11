export interface IUsers {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}
export interface IUsersModel {
  findByEmail(email: string): Promise<IUsers | null>;
}
