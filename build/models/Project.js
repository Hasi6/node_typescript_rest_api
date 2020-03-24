"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ProjectSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.default = mongoose_1.model("project", ProjectSchema);
