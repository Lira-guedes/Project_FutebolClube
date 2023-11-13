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
  // findByQuery(q: string): Promise<IMatches[]>
  // finishMatch(id: IMatches['id']): Promise<void>
  // update(id: number, data: Partial<IMatches>): Promise<void>;
  // create(data: Partial<IMatches>): Promise<IMatches>
}
