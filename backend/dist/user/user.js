"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildMakeUser({ Id, hashPassword }) {
    return function makeUser({ id = Id.makeId, firstName, lastName, email, username, password, createdOn = Date.now(), modifiedOn = Date.now() } = {}) {
        if (!Id.isValidId(id)) {
            throw new Error("User must have a vaild id.");
        }
        if (!firstName) {
            throw new Error("User must input first name.");
        }
        if (!lastName) {
            throw new Error("User must input last name.");
        }
        if (!email) {
            throw new Error("User must input email.");
        }
        if (!username) {
            throw new Error("User must input username.");
        }
        if (!password) {
            throw new Error("User must input password.");
        }
        else if (password.length < 5) {
            throw new Error("User password must be longer than 5 characters.");
        }
        const encryptedPasssord = hashPassword(password);
        return Object.freeze({
            getId: () => id,
            getFirstName: () => firstName,
            getLastName: () => lastName,
            getEmail: () => email,
            getUsername: () => username,
            getCreatedOn: () => createdOn,
            getModifiedOn: () => modifiedOn,
            getEncryptedPassword: () => encryptedPasssord,
        });
    };
}
exports.default = buildMakeUser;
//# sourceMappingURL=user.js.map