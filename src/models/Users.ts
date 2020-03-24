import { Schema, model, Document } from "mongoose";

// User Interface
export interface IUser extends Document {
  firstName: String;
  nickNames: string[];
  email: string;
  age: number;
  image: string;
  height: number;
  gender: Gender;
  createdAt?: Date;
  updatedAt?: Date;
}

interface Gender {
  Male: string;
  Female: string;
  Other: string;
}

const Gender = Object.freeze({
  Male: "male",
  Female: "female",
  Other: "other"
});

// UserType
export type UserType = IUser & Document;

const UsersSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    profile: {
      type: Schema.Types.ObjectId,
      ref: "profile"
    },
    projects: {
      type: [Schema.Types.ObjectId],
      ref: "project"
    },
    age: {
      type: Number,
      required: true
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
      type: String
    },
    gender: {
      type: String,
      enum: Object.values(Gender),
      required: true
    }
  },
  { timestamps: true }
);

export default model<IUser>("users", UsersSchema);
