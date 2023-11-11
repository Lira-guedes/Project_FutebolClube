import { ITeamModel, ITeam } from '../Interfaces/ITeam';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import TeamModel from '../model/Team.model';

export default class TeamService {
  constructor(
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

  public async getAll(): Promise<ServiceResponse<ITeam[]>> {
    const teams = await this.teamModel.findAll();
    return { status: 'SUCCESSFUL', data: teams };
  }

  public async getById(id: ITeam['id']): Promise<ServiceResponse<ITeam>> {
    const team = await this.teamModel.findById(id);
    if (!team) return { status: 'NOT_FOUND', data: { message: `Team ${id} not Found` } };
    return { status: 'SUCCESSFUL', data: team };
  }
}
