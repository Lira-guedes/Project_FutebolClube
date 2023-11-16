import { ServiceMessage } from './ServiceResponse';

export interface IMatches {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

export interface IMatchesModel {
  findAll(): Promise<IMatches[]>
  findByProgress(inProgress: boolean): Promise<IMatches[]>;
  finishMatch(id: IMatches['id']): Promise<void>
  findById(id: number): Promise<IMatches | null>;
  updateMatch(id: number, body: { homeTeamGoals: number; awayTeamGoals: number }):
  Promise<ServiceMessage>;
  create(data: IMatches): Promise<IMatches>,
}
