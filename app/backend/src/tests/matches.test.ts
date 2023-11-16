import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../../src/app';
import SequelizeMatch from '../database/models/SequelizeMatches';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

const match = {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: true,
    homeTeam: {
        teamName: "São Paulo"
      },
      awayTeam: {
        teamName: "Grêmio"
      }
  }
const matchs = [match];

describe('Matches', function () {
    it('Retorna todas as matches', async function () {
        afterEach(sinon.restore);
        sinon.stub(SequelizeMatch, 'findAll').resolves(matchs as any);

        const { status, body } = await chai.request(app).get('/matches');

        expect(status).to.equal(200);
        expect(body).to.deep.equal(matchs);
    })
    it('Retorna as matches finalizadas', async function () {
        afterEach(sinon.restore);
        sinon.stub(SequelizeMatch, 'findAll').resolves(matchs as any);

        const { status, body } = await chai.request(app).get('/matches?inProgress=false');

        expect(status).to.equal(200);
        expect(body).to.deep.equal(matchs);
    })
    it('Retorna as matches andamento', async function () {
        afterEach(sinon.restore);
        sinon.stub(SequelizeMatch, 'findAll').resolves(matchs as any);

        const { status, body } = await chai.request(app).get('/matches?inProgress=true');

        expect(status).to.equal(200);
        expect(body).to.deep.equal(matchs);
    })
});