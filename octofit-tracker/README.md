# OctoFit Tracker

OctoFit Tracker is initialized as a React/Vite presentation tier, an Express/TypeScript API tier, and a MongoDB data tier accessed with Mongoose.

## Run locally

Install dependencies in each tier:

```bash
npm install --prefix octofit-tracker/frontend
npm install --prefix octofit-tracker/backend
```

Start MongoDB on port `27017`, then run the API and frontend in separate terminals:

```bash
npm run dev --prefix octofit-tracker/backend
npm run dev --prefix octofit-tracker/frontend
```

The frontend uses port `5173`, the API uses port `8000`, and the MongoDB connection defaults to `mongodb://localhost:27017/octofit_db`. Set `MONGODB_URI` to override the database connection string. The API health endpoint is available at `http://localhost:8000/api/health`. In Codespaces, the API reports its public URL based on `CODESPACE_NAME`.

The API reads users, teams, activities, leaderboard entries, and workouts from MongoDB at `/api/users/`, `/api/teams/`, `/api/activities/`, `/api/leaderboard/`, and `/api/workouts/`.

Seed the database with repeatable sample data:

```bash
npm run seed --prefix octofit-tracker/backend
```

The seed script replaces only its own fixed-ID sample records, preserving unrelated data.
