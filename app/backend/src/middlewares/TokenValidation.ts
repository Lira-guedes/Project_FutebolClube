import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export default class TokenValidation {
  static async validation(req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const [, token] = authorization.split(' ');

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
      res.locals.user = decoded;
      return next();
    } catch (err) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
