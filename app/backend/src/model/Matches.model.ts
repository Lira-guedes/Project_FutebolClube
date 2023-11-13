import SequelizeTeam from '../database/models/SequelizeTeam';
import SequelizeMatches from '../database/models/SequelizeMatches';
import { IMatches, IMatchesModel } from '../Interfaces/IMatches';

export default class MatchesModel implements IMatchesModel {
  private model = SequelizeMatches;
  async findAll(): Promise<IMatches[]> {
    const allMatches = await this.model.findAll({
      include: [
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
      ],
    });
    return allMatches;
  }

  async findByProgress(status: boolean): Promise<IMatches[]> {
    const matches = await this.model.findAll({
      where: { inProgress: status },
      include: [
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
      ],
    });

    return matches;
  }
}
