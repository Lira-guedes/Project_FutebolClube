import { Request, Response, Router } from 'express';
import LeaderboardController from '../controller/Leaderboard.controller';

const leaderboardController = new LeaderboardController();

const router = Router();

router.get('/home', (req: Request, res: Response) => leaderboardController.getAllHome(req, res));
router.get('/away', (req: Request, res: Response) => leaderboardController.getAllAway(req, res));

export default router;
