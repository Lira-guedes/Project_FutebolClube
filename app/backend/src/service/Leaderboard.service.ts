import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ILeaderboard } from '../Interfaces/ILeader';
import LeaderboardModel from '../model/Leaderboard.model';

export default class LeaderboardService {
  constructor(
    private leaderboardModel = new LeaderboardModel(),
  ) { }

  public async getAllHome(): Promise<ServiceResponse<ILeaderboard[]>> {
    const leaderHome = await this.leaderboardModel.getHome();
    const leaderboard = leaderHome.map((elem) => (
      { ...elem,
        goalsBalance: elem.goalsFavor - elem.goalsOwn,
        efficiency: ((elem.totalPoints / (elem.totalGames * 3)) * 100).toFixed(2),
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

  public async getAllAway(): Promise<ServiceResponse<ILeaderboard[]>> {
    const leaderAway = await this.leaderboardModel.getAway();
    const leaderboard = leaderAway.map((elemt) => (
      { ...elemt,
        goalsBalance: elemt.goalsFavor - elemt.goalsOwn,
        efficiency: ((elemt.totalPoints / (elemt.totalGames * 3)) * 100).toFixed(2),
      }));
    const scoreLeaderboard = leaderboard.sort((c, d) => {
      if (c.totalPoints > d.totalPoints) return -1;
      if (c.totalPoints < d.totalPoints) return 1;
      if (c.totalVictories > d.totalVictories) return -1;
      if (c.totalVictories < d.totalVictories) return 1;
      if (c.goalsBalance > d.goalsBalance) return -1;
      if (c.goalsBalance < d.goalsBalance) return 1;
      if (c.goalsFavor > d.goalsFavor) return -1;
      if (c.goalsFavor < d.goalsFavor) return 1;
      return 0;
    });
    return { status: 'SUCCESSFUL', data: scoreLeaderboard };
  }
}
