import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ILeaderboard } from '../Interfaces/ILeader';
import LeaderboardModel from '../model/Leaderboard.model';

export default class LeaderboardService {
  constructor(
    private leaderboardModel = new LeaderboardModel(),
  ) { }

  public async getAll(): Promise<ServiceResponse<ILeaderboard[]>> {
    const leaderHome = await this.leaderboardModel.getHome();
    const leaderboard = leaderHome.map((item) => (
      { ...item,
        goalsBalance: item.goalsFavor - item.goalsOwn,
        efficiency: ((item.totalPoints / (item.totalGames * 3)) * 100).toFixed(2),
      }));
    const scoreLeaderboard = leaderboard.sort((a, b) => {
      if (a.totalPoints > b.totalPoints) return -1;
      if (a.totalPoints < b.totalPoints) return 1;
      if (a.totalVictories > b.totalVictories) return -1;
      if (a.totalVictories < b.totalVictories) return 1;
      if (a.goalsBalance > b.goalsBalance) return -1;
      if (a.goalsBalance < b.goalsBalance) return 1;
      if (a.goalsFavor > b.goalsFavor) return -1;
      if (a.goalsFavor < b.goalsFavor) return 1;
      return 0;
    });
    return { status: 'SUCCESSFUL', data: scoreLeaderboard };
  }
}
