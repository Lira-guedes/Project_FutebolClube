import { Request, Response } from 'express';
import LeaderboardService from '../service/Leaderboard.service';
import mapStatusHttp from '../utils/mapStatusHttp';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(),
  ) { }

  public async getAllHome(_req: Request, res: Response) {
    const { status, data } = await this.leaderboardService.getAllHome();
    return res.status(mapStatusHttp(status)).json(data);
  }

  public async getAllAway(_req: Request, res: Response) {
    const { status, data } = await this.leaderboardService.getAllAway();
    return res.status(mapStatusHttp(status)).json(data);
  }
}
