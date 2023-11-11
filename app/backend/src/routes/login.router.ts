import { Router } from 'express';
import UsersController from '../controller/Users.controller';
import LoginValidation from '../middlewares/LoginValidation';

const usersController = new UsersController();
const router = Router();

router.post('/', LoginValidation.validation, (req, res) => usersController.login(req, res));

export default router;
