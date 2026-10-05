import { model, Schema, Types } from 'mongoose';

const activitySchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true, index: true },
    type: {
      type: String,
      enum: ['running', 'walking', 'strength', 'cycling', 'yoga'],
      required: true,
    },
    durationMinutes: { type: Number, required: true, min: 1 },
    distanceKm: { type: Number, min: 0 },
    points: { type: Number, required: true, min: 0 },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export const Activity = model('Activity', activitySchema);
