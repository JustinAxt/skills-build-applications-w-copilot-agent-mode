import mongoose, { Types } from 'mongoose';
import { connectDatabase } from '../config/database';
import { Activity as activity } from '../models/activity';
import { Leaderboard as leaderboard } from '../models/leaderboard';
import { Team as team } from '../models/team';
import { User as user } from '../models/user';
import { Workout as workout } from '../models/workout';

const userIds = [
  new Types.ObjectId('650000000000000000000001'),
  new Types.ObjectId('650000000000000000000002'),
  new Types.ObjectId('650000000000000000000003'),
  new Types.ObjectId('650000000000000000000004'),
];
const teamIds = [
  new Types.ObjectId('650000000000000000000011'),
  new Types.ObjectId('650000000000000000000012'),
];
const activityIds = [
  new Types.ObjectId('650000000000000000000021'),
  new Types.ObjectId('650000000000000000000022'),
  new Types.ObjectId('650000000000000000000023'),
  new Types.ObjectId('650000000000000000000024'),
  new Types.ObjectId('650000000000000000000025'),
];
const leaderboardIds = [
  new Types.ObjectId('650000000000000000000031'),
  new Types.ObjectId('650000000000000000000032'),
  new Types.ObjectId('650000000000000000000033'),
  new Types.ObjectId('650000000000000000000034'),
];
const workoutIds = [
  new Types.ObjectId('650000000000000000000041'),
  new Types.ObjectId('650000000000000000000042'),
  new Types.ObjectId('650000000000000000000043'),
  new Types.ObjectId('650000000000000000000044'),
];

/**
 * Seed the octofit_db database with test data.
 * Fixed fixture IDs make reruns repeatable without removing unrelated records.
 */
async function seedDatabase(): Promise<void> {
  try {
    await connectDatabase();

    await Promise.all([
      user.deleteMany({ _id: { $in: userIds } }),
      team.deleteMany({ _id: { $in: teamIds } }),
      activity.deleteMany({ _id: { $in: activityIds } }),
      leaderboard.deleteMany({ _id: { $in: leaderboardIds } }),
      workout.deleteMany({ _id: { $in: workoutIds } }),
    ]);

    const users = await user.create([
      {
        _id: userIds[0],
        name: 'Avery Chen',
        username: 'avery.moves',
        email: 'avery.chen@example.com',
        points: 245,
      },
      {
        _id: userIds[1],
        name: 'Jordan Rivera',
        username: 'jordan.runs',
        email: 'jordan.rivera@example.com',
        points: 210,
      },
      {
        _id: userIds[2],
        name: 'Sam Patel',
        username: 'sam.strong',
        email: 'sam.patel@example.com',
        points: 185,
      },
      {
        _id: userIds[3],
        name: 'Taylor Brooks',
        username: 'taylor.trails',
        email: 'taylor.brooks@example.com',
        points: 160,
      },
    ]);

    const teams = await team.create([
      {
        _id: teamIds[0],
        name: 'Trail Blazers',
        description: 'A team that enjoys outdoor runs and walks.',
        members: [userIds[0], userIds[1]],
        points: 455,
      },
      {
        _id: teamIds[1],
        name: 'Power Pals',
        description: 'A team building strength through consistent training.',
        members: [userIds[2], userIds[3]],
        points: 345,
      },
    ]);

    const activities = await activity.create([
      {
        _id: activityIds[0],
        user: userIds[0],
        type: 'running',
        durationMinutes: 32,
        distanceKm: 4.8,
        points: 80,
        completedAt: new Date('2026-10-01T16:30:00.000Z'),
      },
      {
        _id: activityIds[1],
        user: userIds[1],
        type: 'walking',
        durationMinutes: 45,
        distanceKm: 3.2,
        points: 55,
        completedAt: new Date('2026-10-02T17:00:00.000Z'),
      },
      {
        _id: activityIds[2],
        user: userIds[2],
        type: 'strength',
        durationMinutes: 40,
        points: 70,
        completedAt: new Date('2026-10-03T15:15:00.000Z'),
      },
      {
        _id: activityIds[3],
        user: userIds[3],
        type: 'cycling',
        durationMinutes: 35,
        distanceKm: 9.5,
        points: 65,
        completedAt: new Date('2026-10-04T14:00:00.000Z'),
      },
      {
        _id: activityIds[4],
        user: userIds[0],
        type: 'yoga',
        durationMinutes: 25,
        points: 40,
        completedAt: new Date('2026-10-05T07:00:00.000Z'),
      },
    ]);

    const leaderboardEntries = await leaderboard.create([
      { _id: leaderboardIds[0], user: userIds[0], team: teamIds[0], points: 245, rank: 1 },
      { _id: leaderboardIds[1], user: userIds[1], team: teamIds[0], points: 210, rank: 2 },
      { _id: leaderboardIds[2], user: userIds[2], team: teamIds[1], points: 185, rank: 3 },
      { _id: leaderboardIds[3], user: userIds[3], team: teamIds[1], points: 160, rank: 4 },
    ]);

    const workouts = await workout.create([
      {
        _id: workoutIds[0],
        user: userIds[0],
        title: 'Steady Start Run',
        category: 'cardio',
        description: 'A comfortable run with an easy warm-up and cool-down.',
        durationMinutes: 30,
        difficulty: 'beginner',
      },
      {
        _id: workoutIds[1],
        user: userIds[1],
        title: 'Bodyweight Basics',
        category: 'strength',
        description: 'Practice squats, wall push-ups, and gentle core exercises.',
        durationMinutes: 25,
        difficulty: 'beginner',
      },
      {
        _id: workoutIds[2],
        user: userIds[2],
        title: 'Mobility Reset',
        category: 'flexibility',
        description: 'A light full-body mobility session after activity.',
        durationMinutes: 20,
        difficulty: 'beginner',
      },
      {
        _id: workoutIds[3],
        user: userIds[3],
        title: 'Interval Ride',
        category: 'cardio',
        description: 'Alternate relaxed cycling with short, energetic intervals.',
        durationMinutes: 35,
        difficulty: 'intermediate',
      },
    ]);

    console.log(
      `Database seeding complete: ${users.length} users, ${teams.length} teams, ${activities.length} activities, ${leaderboardEntries.length} leaderboard entries, and ${workouts.length} workouts.`,
    );
  } catch (error) {
    console.error('Error seeding octofit_db:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

void seedDatabase();
