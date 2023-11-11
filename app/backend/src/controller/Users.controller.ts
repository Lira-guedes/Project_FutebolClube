import { Request, Response } from 'express';
import UsersService from '../service/Users.service';
import mapStatusHttp from '../utils/mapStatusHttp';

export default class UsersController {
  constructor(
    private usersService = new UsersService(),
  ) { }

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const { status, data } = await this.usersService.login(email, password);
    return res.status(mapStatusHttp(status)).json(data);
  }
}
