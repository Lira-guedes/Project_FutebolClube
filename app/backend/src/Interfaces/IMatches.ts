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
  findByQuery(q: string): Promise<IMatches[]>
  finishMatch(id: IMatches['id']): Promise<void>
  updateById(id: IMatches['id'], homeTeamGoals: IMatches['homeTeamGoals'],
    awayTeamGoals: IMatches['awayTeamGoals']): Promise<void>
  create(data: Partial<IMatches>): Promise<IMatches>
}
