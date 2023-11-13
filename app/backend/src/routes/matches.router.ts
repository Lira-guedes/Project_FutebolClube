import { Request, Router, Response } from 'express';
import MatchesController from '../controller/Matches.controller';

const matchesController = new MatchesController();
const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.query.inProgress) {
    matchesController.getByProgress(req, res);
  } else {
    matchesController.getAll(req, res);
  }
});
export default router;
