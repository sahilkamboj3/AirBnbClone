"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Id_1 = __importDefault(require("../Id"));
const user_1 = __importDefault(require("./user"));
const makeEncryptedPassword_1 = __importDefault(require("./makeEncryptedPassword"));
let makeEncryptedPassword = makeEncryptedPassword_1.default({ bcrypt, content });
let makeUser = user_1.default({ Id: Id_1.default, makeEncryptedPassword });
module.exports = {
    makeEncryptedPassword,
    makeUser
};
//# sourceMappingURL=index.js.map