import { Schema, model, Document } from "mongoose";

// User Interface
export interface IProfile extends Document {
  firstName: string;
  lastName: string;
  job: number;
  profileImage: string;
  skills: string[];
  exprience: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// UserType
export type ProfileType = IProfile & Document;

const ProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    job: {
      type: String,
      default: "Student"
    },
    image: {
      type: String
    },
    skills: {
      type: [String],
      default: ["React", "Node", "Vue"]
    }
  },
  { timestamps: true }
);

export default model<IProfile>("profile", ProfileSchema);
