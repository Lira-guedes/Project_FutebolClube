import { Request, Response } from 'express';
import MatchesService from '../service/Matches.service';
import mapStatusHttp from '../utils/mapStatusHttp';

export default class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) { }

  public async getAll(req: Request, res: Response) {
    const { status, data } = await this.matchesService.getAll();
    return res.status(mapStatusHttp(status)).json(data);
  }

  public async getByProgress(req: Request, res: Response) {
    const { inProgress } = req.query;
    const { status, data } = await this.matchesService.getByProgress(inProgress === 'true');
    res.status(mapStatusHttp(status)).json(data);
  }
}