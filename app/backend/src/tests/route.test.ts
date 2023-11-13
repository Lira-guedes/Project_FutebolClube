import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { App } from '../app';

chai.use(chaiHttp);

const { expect } = chai;
const app = new App().app

describe('Route test', () => {
    it('Testa se Route / funciona', async () => {
      const res = await chai.request(app).get('/');
      expect(res.body).to.deep.equal({ ok: true });
    });
});
