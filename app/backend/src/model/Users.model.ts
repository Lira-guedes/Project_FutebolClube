import { IUsers, IUsersModel } from '../Interfaces/IUsers';
import SequelizeUsers from '../database/models/SequelizeUsers';

export default class UserModel implements IUsersModel {
  private model = SequelizeUsers;

  async findByEmail(email: string): Promise<IUsers | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;

    const { id, username, role, password }: IUsers = user;
    return { id, username, role, email, password };
  }
}
