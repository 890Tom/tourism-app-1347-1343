"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const Paths_1 = __importDefault(require("./constants/Paths"));
const users_controllers_1 = require("../controllers/users.controllers");
const user_middleware_1 = require("../middleware/user.middleware");
const user_validators_1 = __importDefault(require("../validators/user.validators"));
const router = (0, express_1.Router)();
exports.UserRoute = router;
const usersbase = `${Paths_1.default.Base}/${Paths_1.default.Users.Base}`;
const signuppath = `${usersbase}/${Paths_1.default.Users.Signup}`;
const loginpath = `${usersbase}/${Paths_1.default.Users.Login}`;
router.post(signuppath, user_validators_1.default.signup, users_controllers_1.signup);
router.post(loginpath, user_validators_1.default.login, users_controllers_1.login);
router.use(user_middleware_1.UserFilter);
router.get(usersbase, users_controllers_1.all);
//# sourceMappingURL=users.routes.js.map