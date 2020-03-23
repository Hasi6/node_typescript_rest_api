"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ProfileSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.default = mongoose_1.model("profile", ProfileSchema);
