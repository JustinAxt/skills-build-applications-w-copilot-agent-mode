import { model, Schema, Types } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    team: { type: Types.ObjectId, ref: 'Team' },
    points: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);
