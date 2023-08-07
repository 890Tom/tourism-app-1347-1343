"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const userSchema = new Schema({
    id: mongoose_1.default.Types.ObjectId,
    nom: {
        require: true,
        type: String,
    },
    prenom: {
        require: true,
        type: String,
    },
    email: {
        require: true,
        unique: true,
        type: String,
    },
    password: {
        require: true,
        type: String,
    },
    salt: String,
});
const User = mongoose_1.default.model("User", userSchema);
exports.User = User;
//# sourceMappingURL=user.js.map