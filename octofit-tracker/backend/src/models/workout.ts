import { model, Schema, Types } from 'mongoose';

const workoutSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', index: true },
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: ['cardio', 'strength', 'flexibility', 'recovery'],
      required: true,
    },
    description: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
    },
  },
  { timestamps: true },
);

export const Workout = model('Workout', workoutSchema);
