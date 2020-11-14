import { Pool } from 'pg';

const pool: Pool = new Pool({
    user: "postgres",
    password: "lovebread3",
    database: "my_art",
    host: "localhost",
    port: 5432
})

module.exports = pool;
// module.exports = {
//     query: (text: string, params: any) => {
//         return pool.query(text, params, (err, res) => {
//             if (err) {
//                 console.error(err.message);
//             }
//         });
//     },
// }