import { AccountType } from '../entity/accountTypes'
import { delQuery } from '../db/dbQueries';
import { pgQuery } from '../db/poolQueryBase';
import UseCaseType from './useCaseType';
import { Pool } from 'pg'

export default function makeDeleteAccount ( pool: Pool, accountInfo: AccountType ) {
    return function deleteAccount() {
        const id: number = accountInfo['id'];

        const inputs: UseCaseType = {
            pool,
            query: delQuery()['query'],
            // info: account['account'],
        }

       pgQuery(inputs, id);

       // handle for errors
       return "something";
    }
}