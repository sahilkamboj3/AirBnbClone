import makeAccount from '../entity';
import { AccountType } from '../entity/accountTypes'
// import { DbQueryType } from '../../db/dbTypes'
import { insertQuery } from '../db/dbQueries';
import { pgQuery } from '../db/poolQueryBase';
import UseCaseType from './useCaseType';
import { Pool } from 'pg'

export default function makeCreateAccount ( pool: Pool, accountInfo: AccountType ) {
    return function createAccount() {
        const account = makeAccount(accountInfo);
        
        if (account['errors']) {
            return "error found";
        }
        const inputs: UseCaseType = {
            pool,
            query: insertQuery()['query'],
            // info: account['account'],
        }

       pgQuery(inputs, account['account']);

       // handle for errors
       return "something";
    }
}