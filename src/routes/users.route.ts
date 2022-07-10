import { NextFunction, Response, Router } from 'express';
import UsersController from '@controllers/users.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authorizationMiddleware from '@middlewares/authorization.middleware';
import { RequestWithUser } from '@/interfaces/auth.interface';
import authMiddleware from '@/middlewares/auth.middleware';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // only admin can see the full of users
    // user just see the user itself
    this.router.get(
      `${this.path}`,
      authMiddleware,
      (req: RequestWithUser, res: Response, next: NextFunction) => authorizationMiddleware(['admin', 'user'], req, res, next),
      this.usersController.getUsers,
    );
    this.router.get(
      `${this.path}/:id(\\d+)`,
      authMiddleware,
      (req: RequestWithUser, res: Response, next: NextFunction) => authorizationMiddleware(['admin', 'user'], req, res, next),
      this.usersController.getUserById,
    );
    // admin can do the rest like create, update, and delete
    this.router.post(
      `${this.path}`,
      authMiddleware,
      (req: RequestWithUser, res: Response, next: NextFunction) => authorizationMiddleware(['admin'], req, res, next),
      validationMiddleware(CreateUserDto, 'body'),
      this.usersController.createUser,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      authMiddleware,
      (req: RequestWithUser, res: Response, next: NextFunction) => authorizationMiddleware(['admin'], req, res, next),
      validationMiddleware(CreateUserDto, 'body', true),
      this.usersController.updateUser,
    );
    this.router.delete(
      `${this.path}/:id(\\d+)`,
      authMiddleware,
      (req: RequestWithUser, res: Response, next: NextFunction) => authorizationMiddleware(['admin'], req, res, next),
      this.usersController.deleteUser,
    );
  }
}

export default UsersRoute;
