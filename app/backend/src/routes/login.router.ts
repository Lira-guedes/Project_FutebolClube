import { Router } from 'express';
import UsersController from '../controller/Users.controller';
import LoginValidation from '../middlewares/LoginValidation';
import TokenValidation from '../middlewares/TokenValidation';

const usersController = new UsersController();
const router = Router();

router.post('/', LoginValidation.validation, (req, res) => usersController.login(req, res));
router.get('/role', TokenValidation.validation, (req, res) =>
  usersController.getRole(req, res, res.locals.user.id));

export default router;
