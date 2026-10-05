import { model, Schema, Types } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true, index: true },
    team: { type: Types.ObjectId, ref: 'Team' },
    points: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
    period: { type: String, required: true, default: 'all-time' },
  },
  { timestamps: true },
);

export const Leaderboard = model('Leaderboard', leaderboardSchema);
