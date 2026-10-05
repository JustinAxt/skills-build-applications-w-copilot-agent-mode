import express from 'express';
import { Activity } from './models/activity';
import { Leaderboard } from './models/leaderboard';
import { Team } from './models/team';
import { User } from './models/user';
import { Workout } from './models/workout';

const app = express();

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api' });
});

app.get('/api/users/', async (_request, response) => {
  response.json(await User.find().populate('team').sort({ name: 1 }).lean());
});

app.get('/api/teams/', async (_request, response) => {
  response.json(await Team.find().populate('members').sort({ name: 1 }).lean());
});

app.get('/api/activities/', async (_request, response) => {
  response.json(
    await Activity.find().populate('user').sort({ completedAt: -1 }).lean(),
  );
});

app.get('/api/leaderboard/', async (_request, response) => {
  response.json(
    await Leaderboard.find()
      .populate('user team')
      .sort({ points: -1, rank: 1 })
      .lean(),
  );
});

app.get('/api/workouts/', async (_request, response) => {
  response.json(await Workout.find().populate('user').sort({ title: 1 }).lean());
});

app.use(
  (
    error: unknown,
    _request: express.Request,
    response: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error('API request failed:', error);
    response.status(500).json({ error: 'Internal server error' });
  },
);

export default app;
