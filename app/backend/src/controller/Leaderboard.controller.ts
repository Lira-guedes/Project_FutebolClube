import { Request, Response } from 'express';
import LeaderboardService from '../service/Leaderboard.service';
import mapStatusHttp from '../utils/mapStatusHttp';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(),
  ) { }

  public async getAll(_req: Request, res: Response) {
    const { status, data } = await this.leaderboardService.getAll();
    return res.status(mapStatusHttp(status)).json(data);
  }
}
