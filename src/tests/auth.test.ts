import request from 'supertest';
import App from '@/app';
import { CreateUserDto } from '@dtos/users.dto';
import AuthRoute from '@routes/auth.route';
import UserService from '@/services/users.service';

const authRoute = new AuthRoute();
const app = new App([authRoute]);
const userAgent = request.agent(app.getServer());

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
  await new UserService().deleteAllUsers();
});

describe('Testing Auth', () => {
  describe('[POST] /signup', () => {
    it('response should have the Create userData', () => {
      const userData: CreateUserDto = {
        username: 'username_auth',
        password: 'q1w2e3r4',
      };

      return userAgent.post('/signup').send(userData).expect(201);
    });

    it('response should not have the Create userData, max 100 char for username', () => {
      const userData: CreateUserDto = {
        username:
          'username_authusername_authusername_authusername_authusername_authusername_authusername_authusername_authusername_authusername_auth',
        password: 'q1w2e3r4',
      };

      return userAgent.post('/signup').send(userData).expect(400);
    });

    it('response should not have the Create userData, min 3 char for username', () => {
      const userData: CreateUserDto = {
        username: 'us',
        password: 'q1w2e3r4',
      };

      return userAgent.post('/signup').send(userData).expect(400);
    });
  });

  describe('[POST] /login', () => {
    it('response should have the Set-Cookie header with the Authorization token', async () => {
      const userData: CreateUserDto = {
        username: 'username_auth',
        password: 'q1w2e3r4',
      };

      return userAgent
        .post('/login')
        .send(userData)
        .expect('Set-Cookie', /^Authorization=.+/);
    });
  });

  // error: StatusCode : 404, Message : Authentication token missing
  describe('[POST] /logout', () => {
    it('logout Set-Cookie Authorization=; Max-age=0', () => {
      return userAgent.post('/logout').expect('Set-Cookie', /^Authorization=\;/);
    });
  });
});
