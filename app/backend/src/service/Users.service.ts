import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import IToken from '../Interfaces/IToken';
import UsersModel from '../model/Users.model';

export default class UserService {
  constructor(
    private usersModel = new UsersModel(),
  ) { }

  public async login(email: string, password: string): Promise<ServiceResponse<IToken>> {
    const user = await this.usersModel.findByEmail(email);

    if (!email || !password) {
      return { status: 'INVALID_DATA', data: { message: 'All fields must be filled' } };
    }
    if (!user || !await bcrypt.compare(password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret');
    return { status: 'SUCCESSFUL', data: { token } };
  }

  public async getRole(id: number): Promise<ServiceResponse<{ role: string }>> {
    const role = await this.usersModel.getRole(id);
    return { status: 'SUCCESSFUL', data: { role } };
  }
}
