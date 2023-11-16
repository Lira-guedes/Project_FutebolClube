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
    return res.status(mapStatusHttp(status)).json(data);
  }

  public async finishMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.matchesService.finishMatch(Number(id));
    return res.status(mapStatusHttp(status)).json(data);
  }

  public async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.matchesService.updateMatch(Number(id), req.body);
    return res.status(mapStatusHttp(status)).json(data);
  }

  public async createMatches(req: Request, res: Response) {
    const match = { ...req.body, inProgress: true };
    const { status, data } = await this.matchesService.createMatches(match);

    if (status === 'NOT_FOUND') return res.status(404).json(data);

    return res.status(201).json(data);
  }
}
