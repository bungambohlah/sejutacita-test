import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';
import { RequestWithUser } from '@/interfaces/auth.interface';
import { HttpException } from '@/exceptions/HttpException';
import { Roles } from '@/models/roles.model';

class UsersController {
  public userService = new userService();

  public getUsers = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      // if user try want to get this findAll api
      // then user role can see the currently user itself
      if (req.user && req.user.role && req.user.role.name === 'user') {
        const findUserData: User = await this.userService.findUserById(req.user.id);
        res.status(200).json({ data: [findUserData], message: 'findAll' });
      } else {
        const findAllUsersData: User[] = await this.userService.findAllUser();
        res.status(200).json({ data: findAllUsersData, message: 'findAll' });
      }
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);

      if (req.user && req.user.role && req.user.role.name === 'user') {
        if (Number(req.user.id) === userId) {
          const findUserData: User = await this.userService.findUserById(req.user.id);
          res.status(200).json({ data: findUserData, message: 'findAll' });
        } else {
          next(new HttpException(403, 'Forbidden access'));
        }
      } else {
        const findOneUserData: User = await this.userService.findUserById(userId);

        res.status(200).json({ data: findOneUserData, message: 'findOne' });
      }
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDto = req.body;
      const userRole = await Roles.query().where('name', 'user').first();
      const user: Omit<User, 'id'> = userData;
      user.role_id = userRole.id;
      const createUserData: User = await this.userService.createUser(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const userData: User = req.body;
      const updateUserData: User = await this.userService.updateUser(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const deleteUserData: User = await this.userService.deleteUser(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };

  public deleteAllUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const deletedCount = await this.userService.deleteAllUsers();

      res.status(200).json({ data: `${deletedCount} already deleted`, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
