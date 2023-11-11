import { Response, Request, NextFunction } from 'express';

export default class LoginValidation {
  static validation(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    if (!emailRegex.test(email) || password.length < 6) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    next();
  }
}
