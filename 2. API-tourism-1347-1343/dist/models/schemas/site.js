"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Site = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const siteSchema = new Schema({
    coordonne: {
        longitude: Number,
        latitude: Number,
    },
});
const Site = mongoose_1.default.model("Site", siteSchema);
exports.Site = Site;
//# sourceMappingURL=site.js.map