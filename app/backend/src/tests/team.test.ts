import * as sinon from 'sinon';
import * as chai from 'chai';
import { App } from '../app';
import SequelizeTeam from '../database/models/SequelizeTeam';

// @ts-ignore
import chaiHttp = require('chai-http');
chai.use(chaiHttp);

import { expect } from 'chai';
const { app } = new App();

const team = {
  id: 1,
  teamName: 'Cruzeiro',
}
const teams = [team];

describe('Teams', () => {
  it('Retorna teams', async () => {
    sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any);

    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(teams);
  });
});
