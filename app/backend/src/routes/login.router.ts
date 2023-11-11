import { Router } from 'express';
import UsersController from '../controller/Users.controller';
// import Validations from '../middlewares/Validations';

const usersController = new UsersController();

const router = Router();

router.post('/', (req, res) => usersController.login(req, res));

export default router;
