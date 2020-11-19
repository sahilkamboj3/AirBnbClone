"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeEncryption({ bcrypt, content, saltRounds = 10 }) {
    const hash = bcrypt.hash(content, saltRounds);
    return Object.freeze({
        password: hash
    });
}
exports.default = makeEncryption;
//# sourceMappingURL=makeEncryptedPassword.js.map