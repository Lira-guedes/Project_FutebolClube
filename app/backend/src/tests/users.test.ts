import * as sinon from 'sinon';
import * as chai from 'chai';
import { App } from '../app';
import SequelizeUsers from '../database/models/SequelizeUsers';

// @ts-ignore
import chaiHttp = require('chai-http');
chai.use(chaiHttp);

import { expect } from 'chai';
const { app } = new App();

const user = {
  id: 1,
  username: 'test',
  role: 'user',
  email: 'test@test.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
}

// const users = [user];

const login = {
  email: user.email,
  password: 'secret_user',
}

describe('Users', () => {
  it('Retorna um token se login for correto', async () => {
    sinon.stub(SequelizeUsers, 'findOne').resolves(user as any);

    const { status, body } = await chai.request(app).post('/login').send(login);

    expect(status).to.equal(200);
    expect(body).to.have.property('token');
  });
  it('Retorna um erro se estiver algum campo do login vazio', async () => {
    const { status, body } = await chai.request(app).post('/login').send({
      password: 'secret_user',
    });

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'All fields must be filled' });
  });
  it('Retorna erro se não for retornado um token', async () => {
    const {status, body} = await chai.request(app).get('/login/role/');

    expect(status).to.equal(401);
    expect(body).to.deep.equal({ message: 'Token not found' });
  });
  it('Retorna erro se token for inválido', async () => {
    const { status, body } = await chai.request(app).get('/login/role').set('authorization', `abcde`);
    expect(status).to.equal(401);
    expect(body).to.deep.equal({ message: 'Token must be a valid token' });
  });

});