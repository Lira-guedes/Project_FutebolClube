import { Request, Response } from 'express';
import TeamService from '../service/Team.service';
import mapStatusHTTP from '../utils/mapStatusHttp';

export default class TeamController {
  constructor(
    private teamService = new TeamService(),
  ) { }

  public async getAll(_req: Request, res: Response) {
    const { status, data } = await this.teamService.getAll();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.teamService.getById(Number(id));
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
