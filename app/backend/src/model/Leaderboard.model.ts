import { ILeaderboard } from '../Interfaces/ILeader';
import MatchModel from './Matches.model';
import TeamModel from './Team.model';
import { ITeam } from '../Interfaces/ITeam';
import { IMatches } from '../Interfaces/IMatches';

export default class LeaderboardModel {
  constructor(
    private teamModel: TeamModel = new TeamModel(),
    private matchModel: MatchModel = new MatchModel(),
  ) { }

  async finishMatches(): Promise<IMatches[]> { return this.matchModel.findByProgress(false); }
  async findAllTeams(): Promise<ITeam[]> { return this.teamModel.findAll(); }

  async getHome(): Promise<ILeaderboard[]> {
    const allTeams = await this.findAllTeams();
    const finishMatches = await this.finishMatches();

    const leaderboard = allTeams.map(async (team) => {
      const teamMatches = finishMatches.filter((M) => M.homeTeamId === team.id);
      const wins = teamMatches.filter((M) => M.homeTeamGoals > M.awayTeamGoals);
      const draws = teamMatches.filter((M) => M.homeTeamGoals === M.awayTeamGoals);
      const losses = teamMatches.filter((M) => M.homeTeamGoals < M.awayTeamGoals);

      return { name: team.teamName,
        totalPoints: wins.length * 3 + draws.length,
        totalGames: teamMatches.length,
        totalVictories: wins.length,
        totalDraws: draws.length,
        totalLosses: losses.length,
        goalsFavor: teamMatches.reduce((total, matches) => total + matches.homeTeamGoals, 0),
        goalsOwn: teamMatches.reduce((total, matches) => total + matches.awayTeamGoals, 0),
      };
    });
    return Promise.all(leaderboard);
  }

  async getAway(): Promise<ILeaderboard[]> {
    const allTeams = await this.findAllTeams();
    const finishMatches = await this.finishMatches();

    const leaderboard = allTeams.map(async (team) => {
      const teamMatches = finishMatches.filter((M) => M.awayTeamId === team.id);
      const wins = teamMatches.filter((M) => M.awayTeamGoals > M.homeTeamGoals);
      const draws = teamMatches.filter((M) => M.awayTeamGoals === M.homeTeamGoals);
      const losses = teamMatches.filter((M) => M.awayTeamGoals < M.homeTeamGoals);

      return { name: team.teamName,
        totalPoints: wins.length * 3 + draws.length,
        totalGames: teamMatches.length,
        totalVictories: wins.length,
        totalDraws: draws.length,
        totalLosses: losses.length,
        goalsFavor: teamMatches.reduce((total, matches) => total + matches.awayTeamGoals, 0),
        goalsOwn: teamMatches.reduce((total, matches) => total + matches.homeTeamGoals, 0),
      };
    });
    return Promise.all(leaderboard);
  }
}
