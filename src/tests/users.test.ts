import request from 'supertest';
import App from '@/app';
import { CreateUserDto } from '@dtos/users.dto';
import UserRoute from '@routes/users.route';
import UserService from '@/services/users.service';

const usersRoute = new UserRoute();
const app = new App([usersRoute]);
const userAgent = request.agent(app.getServer());

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
  await new UserService().deleteAllUsers();
});

describe('Testing Users', () => {
  describe('[GET] /users', () => {
    it('response statusCode 200 / findAll', async () => {
      await new UserService().createUser({ username: 'username_findAll', password: 'q1w2e3r4' });

      return userAgent.get(`${usersRoute.path}`).expect(200);
    });
  });

  describe('[GET] /users/:id', () => {
    it('response statusCode 200 / findOne', async () => {
      const user = await new UserService().createUser({ username: 'username_findOne', password: 'q1w2e3r4' });
      const userId = user.id;

      return userAgent.get(`${usersRoute.path}/${userId}`).expect(200);
    });
  });

  describe('[POST] /users', () => {
    it('response statusCode 201 / created', async () => {
      const userData: CreateUserDto = {
        username: 'username_create',
        password: 'q1w2e3r4',
      };

      return userAgent.post(`${usersRoute.path}`).send(userData).expect(201);
    });
  });

  describe('[PUT] /users/:id', () => {
    it('response statusCode 200 / updated', async () => {
      const users = await new UserService().findAllUser();
      const user = users.find(x => x.username === 'username_create');
      const userId = user.id;
      const userData: CreateUserDto = {
        username: 'username_edit',
        password: 'q1w2e3r4',
      };

      return userAgent.put(`${usersRoute.path}/${userId}`).send(userData).expect(200);
    });
  });

  describe('[DELETE] /users/:id', () => {
    it('response statusCode 200 / deleted', async () => {
      const users = await new UserService().findAllUser();
      const user = users.find(x => x.username === 'username_edit');
      const userId = user.id;

      return userAgent.delete(`${usersRoute.path}/${userId}`).expect(200);
    });
  });
});
