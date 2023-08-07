"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findbyemail = exports.all = exports.signup = void 0;
const user_1 = require("../models/schemas/user");
const mongoose_1 = __importDefault(require("mongoose"));
const signup = (user) => {
    const add = new user_1.User(user);
    return add.save();
};
exports.signup = signup;
const all = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield mongoose_1.default.model("User").find({});
    return response;
});
exports.all = all;
const findbyemail = (email) => {
    const response = mongoose_1.default.model("User").findOne({ email: email });
    return response;
};
exports.findbyemail = findbyemail;
//# sourceMappingURL=user.repository.js.map