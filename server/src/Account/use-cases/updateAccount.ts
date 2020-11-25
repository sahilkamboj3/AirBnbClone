// import { AccountType } from '../entity/accountTypes'
import { updateQuery } from '../db/dbQueries';
import { pgQuery } from '../db/poolQueryBase';
import UseCaseType from './useCaseType';
import { Pool } from 'pg'

export default function makeUpdateAccount ( pool: Pool, info: any ) {
    return function updateAccount() {
        const inputs: UseCaseType = {
            pool,
            query: updateQuery()['query'],
            // info: account['account'],
        }

       pgQuery(inputs, info);

       // handle for errors
       return "something";
    }
}