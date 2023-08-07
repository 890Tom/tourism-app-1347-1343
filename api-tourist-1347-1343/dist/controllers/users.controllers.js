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
exports.all = exports.login = exports.signup = void 0;
const users_service_1 = require("../services/users.service");
const express_validator_1 = require("express-validator");
const httpastatuscode_1 = __importDefault(require("../others/httpastatuscode"));
const signup = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            const result = {
                data: {},
                message: errors.array(),
                isSuccess: true,
                isError: false,
                statusCode: httpastatuscode_1.default.BAD_REQUEST,
            };
            return response.status(httpastatuscode_1.default.BAD_REQUEST).json(result);
        }
        const user = {
            nom: request.body["nom"],
            prenom: request.body["prenom"],
            email: request.body["email"],
            password: request.body["password"],
            salt: "",
        };
        (0, users_service_1.Signup)(user).then((result) => {
            return response.status(httpastatuscode_1.default.CREATED).json(result);
        });
    }
    catch (error) {
        const result = {
            data: {},
            message: error,
            isError: true,
            isSuccess: false,
        };
        return response.status(httpastatuscode_1.default.INTERNAL_SERVER_ERROR).json(result);
    }
});
exports.signup = signup;
const login = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            const result = {
                data: {},
                message: errors.array(),
                isSuccess: true,
                isError: false,
                statusCode: httpastatuscode_1.default.BAD_REQUEST,
            };
            return response.status(httpastatuscode_1.default.BAD_REQUEST).json(result);
        }
        const userRequest = {
            email: request.body["email"],
            password: request.body["password"]
        };
        const login = yield (0, users_service_1.Login)(userRequest);
    }
    catch (error) {
        const result = {
            data: {},
            message: error,
            isError: true,
            isSuccess: false,
        };
        return response.status(httpastatuscode_1.default.INTERNAL_SERVER_ERROR).json(result);
    }
});
exports.login = login;
const all = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, users_service_1.All)();
        return result;
    }
    catch (error) {
        const result = {
            data: {},
            message: error,
            isError: true,
            isSuccess: false,
        };
        return response.status(httpastatuscode_1.default.INTERNAL_SERVER_ERROR).json(result);
    }
});
exports.all = all;
//# sourceMappingURL=users.controllers.js.map