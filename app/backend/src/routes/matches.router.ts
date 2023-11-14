import { Request, Router, Response } from 'express';
import TokenValidation from '../middlewares/TokenValidation';
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
router.patch('/:id/finish', TokenValidation.validation, (_req: Request, res: Response) => {
  matchesController.finishMatch(_req, res);
});
// router.patch('/:id', TokenValidation.validation, (req: Request, res: Response) => {
//   matchesController.updateMatch(req, res);
// });

export default router;
