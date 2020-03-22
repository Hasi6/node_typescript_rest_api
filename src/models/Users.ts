import { Schema, model, Document } from "mongoose";


// User Interface
export interface IUser extends Document {
  username: String;
  nickNames: string[];
  email: string;
  image: string;
  height: number;
  gender: Gender;
  createdAt?: Date;
  updatedAt?: Date;
}

interface Gender {
  Male: string;
  Female: string;
  Other: string
}


const Gender = Object.freeze({
  Male: 'male',
  Female: 'female',
  Other: 'other',
});


// UserType
export type UserType = IUser & Document


const UsersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    nickNames: {
      type: [String],
      default: []
    },
    height: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      enum: Object.values(Gender)
    },
  },
  { timestamps: true }
);

export default model<IUser>("users", UsersSchema);
