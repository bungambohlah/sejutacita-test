import { NextFunction, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { RequestWithUser } from '@interfaces/auth.interface';

const authorizationMiddleware = async (roles: string[], req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    if (req.user) {
      // Check if array of authorized roles includes the user's role
      const roleName: string = req.user.role && req.user.role.name;
      if (roles.indexOf(roleName) > -1) next();
      else next(new HttpException(403, 'Forbidden access'));
    } else {
      next(new HttpException(401, 'Wrong authentication token'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export default authorizationMiddleware;
