"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cuid = require("cuid");
const Id = Object.freeze({
    makeId: cuid,
    isValidId: cuid.isCuid
});
exports.default = Id;
//# sourceMappingURL=index.js.map