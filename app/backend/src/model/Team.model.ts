import SequelizeTeams from '../database/models/SequelizeTeam';
import { ITeam, ITeamModel } from '../Interfaces/ITeam';

export default class TeamModel implements ITeamModel {
  private model = SequelizeTeams;

  async findAll(): Promise<ITeam[]> {
    const allTeams = await this.model.findAll();
    return allTeams.map(({ id, teamName }) => ({ id, teamName }));
  }

  async findById(id: ITeam['id']): Promise<ITeam | null> {
    const TeamsById = await this.model.findByPk(id);
    if (TeamsById === null) return null;
    const { teamName }: ITeam = TeamsById;
    return { id, teamName };
  }
}
