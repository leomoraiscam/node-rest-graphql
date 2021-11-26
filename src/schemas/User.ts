import mongoose, { Schema ,Document } from 'mongoose';

export type UserAttributes = {
  name: string;
  username: string;
  createdAt: Date;
};

export type UserModel = Document & UserAttributes;

const UserSchema = new Schema({
  name: String,
  username: String,
  createdAt: {
    type: 'Date',
    default: Date.now
  }
});

export default mongoose.model<UserModel>('User', UserSchema)