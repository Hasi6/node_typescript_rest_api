import { Schema, model, Document } from "mongoose";

// User Interface
export interface IProject extends Document {
  title: string;
  user: string;
  description: string;
  image: Buffer;
  technologiesUsed: string[];
  isGroup: number;
  groupMembers: string[];
  startedAt: Date;
  isCompleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// UserType
export type ProjectType = IProject & Document;

const ProjectSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isGroup: {
      type: Boolean,
      default: false
    },
    grupMembers: {
      type: [String]
    },
    startedAt: {
      type: Date
    },
    isCompleted: {
      type: Boolean,
      required: true
    },
    image: {
      type: Buffer
    },
    technologiesUsed: {
      type: [String],
      default: ["React", "Node", "Vue"]
    }
  },
  { timestamps: true }
);

export default model<IProject>("project", ProjectSchema);
