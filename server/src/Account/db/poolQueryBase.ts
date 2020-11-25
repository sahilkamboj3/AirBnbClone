import UseCaseType from '../use-cases/useCaseType';
import { AccountResType } from '../entity/accountTypes'

// export const pgQuery = async ({ pool, query, info }: UseCaseType) => {
export const pgQuery = async ({ pool, query }: UseCaseType, info: any) => {
    const inputs = [];

    for (const [,value] of Object.entries(info)) {
        inputs.push(value);
    }

    const res = await pool.query(query, inputs, (err, result) => {
        if (err) {
            return console.error('Error executing query', err.stack);
          }
          console.log(result.rows[0]);
    });
    await pool.end()

    return res;
}