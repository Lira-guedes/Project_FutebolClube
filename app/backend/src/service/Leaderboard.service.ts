import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ILeaderboard } from '../Interfaces/ILeader';
import LeaderboardModel from '../model/Leaderboard.model';

export default class LeaderboardService {
  constructor(
    private leaderboardModel = new LeaderboardModel(),
  ) { }

  public async getAll(): Promise<ServiceResponse<ILeaderboard[]>> {
    const leaderboard = await this.leaderboardModel.getHome();
    return { status: 'SUCCESSFUL', data: leaderboard };
  }
}
