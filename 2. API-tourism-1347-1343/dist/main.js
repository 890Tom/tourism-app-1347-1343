"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_routes_1 = require("./routes/users.routes");
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./models/connection"));
const app = (0, express_1.default)();
dotenv_1.default.config();
(0, connection_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(users_routes_1.UserRoute);
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello World  ssssdsds!");
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=main.js.map