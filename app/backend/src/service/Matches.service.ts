import { IMatches, IMatchesModel } from '../Interfaces/IMatches';
import { ServiceResponse, ServiceMessage } from '../Interfaces/ServiceResponse';
import MatchesModel from '../model/Matches.model';

export default class MatchesService {
  constructor(
    private matchesModel: IMatchesModel = new MatchesModel(),
  ) { }

  public async getAll(): Promise<ServiceResponse<IMatches[]>> {
    const allMatches = await this.matchesModel.findAll();
    return { status: 'SUCCESSFUL', data: allMatches };
  }

  public async getByProgress(inProgress: boolean): Promise<ServiceResponse<IMatches[]>> {
    const matches = await this.matchesModel.findByProgress(inProgress);
    return { status: 'SUCCESSFUL', data: matches };
  }

  public async finishMatch(id: number): Promise<ServiceResponse<ServiceMessage>> {
    await this.matchesModel.finishMatch(id);

    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }

  public async updateMatch(matchId: number, body: { homeTeamGoals: number; awayTeamGoals: number }):
  Promise<ServiceResponse<ServiceMessage>> {
    const matcheUpdated = await this.matchesModel.updateMatch(matchId, body);
    return { status: 'SUCCESSFUL', data: matcheUpdated };
  }

  public async createMatches(data: IMatches): Promise<ServiceResponse<IMatches>> {
    const newMatches = await this.matchesModel.create(data);
    return { status: 'SUCCESSFUL', data: newMatches };
  }
}
