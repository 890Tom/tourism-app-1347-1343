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
exports.All = exports.Login = exports.Signup = void 0;
const user_repository_1 = require("../repository/user.repository");
const passwordUtil_1 = __importDefault(require("../utils/passwordUtil"));
const user_1 = require("../models/schemas/user");
const httpastatuscode_1 = __importDefault(require("../others/httpastatuscode"));
const Signup = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const password = yield passwordUtil_1.default.getHash(user.password);
        const toadd = new user_1.User();
        toadd.nom = user.nom;
        toadd.prenom = user.prenom;
        toadd.email = user.email;
        toadd.password = password;
        const _signup = (0, user_repository_1.signup)(toadd);
        const result = {
            data: _signup,
            message: "Utilisateur ajouté",
            isSuccess: true,
            isError: false,
            statusCode: httpastatuscode_1.default.CREATED,
        };
        return result;
    }
    catch (error) {
        throw error;
    }
});
exports.Signup = Signup;
const Login = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        throw error;
    }
});
exports.Login = Login;
const All = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAll = yield (0, user_repository_1.all)();
        const result = {
            data: getAll,
            message: "Liste des utilisateurs",
            isError: false,
            isSuccess: true,
        };
        return result;
    }
    catch (error) {
        throw error;
    }
});
exports.All = All;
//# sourceMappingURL=users.service.js.map