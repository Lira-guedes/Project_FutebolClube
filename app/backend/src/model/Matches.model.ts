import SequelizeTeam from '../database/models/SequelizeTeam';
import SequelizeMatches from '../database/models/SequelizeMatches';
import { IMatches, IMatchesModel } from '../Interfaces/IMatches';
// import { ServiceMessage } from '../Interfaces/ServiceResponse';

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

  async finishMatch(id: IMatches['id']): Promise<void> {
    await this.model.update({ inProgress: false }, { where: { id } });
  }

  async updateMatch(id: number, data: Partial<IMatches>): Promise<void> {
    await this.model.update(
      data,
      { where: { id } },
    );
  }

  // async updateMatch(matchId: number, body: { homeTeamGoals: number; awayTeamGoals: number }):
  // Promise<ServiceMessage> {
  //   const match = await this.model.findById(matchId);

  //   if (match) {
  //     await this.model.update(body, { where: { id: matchId } });
  //     return { message: 'Updated' };
  //   }
  //   return { message: 'Match not found' };
  // }
}
