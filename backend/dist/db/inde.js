"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    password: "lovebread3",
    database: "my_art",
    host: "localhost",
    port: 5432
});
module.exports = pool;
//# sourceMappingURL=inde.js.map