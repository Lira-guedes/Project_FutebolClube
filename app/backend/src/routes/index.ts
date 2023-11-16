import { Router } from 'express';
import teamRouter from './team.router';
import loginRouter from './login.router';
import matchesRouter from './matches.router';
import leaderboardRouter from './leaderboard.router';

const router = Router();

router.use('/teams', teamRouter);
router.use('/login', loginRouter);
router.use('/matches', matchesRouter);
router.use('/leaderboard', leaderboardRouter);

export default router;
