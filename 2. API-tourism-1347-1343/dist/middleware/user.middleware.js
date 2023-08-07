"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFilter = void 0;
const httpastatuscode_1 = __importDefault(require("../others/httpastatuscode"));
const filter = (request, response, next) => {
    const header = request.headers["authorization"];
    const token = header && header.split(" ")[1];
    if (token === null) {
        const message = {
            data: {},
            message: "Veuillez d'abord vous identifier",
            isError: false,
            isSuccess: true,
            statusCode: httpastatuscode_1.default.UNAUTHORIZED
        };
        return response.status(httpastatuscode_1.default.UNAUTHORIZED).json(message);
    }
};
exports.UserFilter = filter;
//# sourceMappingURL=user.middleware.js.map