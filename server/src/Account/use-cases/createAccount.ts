import makeAccount from '../entity';
import { AccountType } from '../entity/accountTypes'
// import { DbQueryType } from '../../db/dbTypes'
import { insertQuery } from '../db/dbQueries';
import { pgQuery } from '../db/poolQueryBase';
import UseCaseType from './useCaseType';
import { Pool } from 'pg'
import { UserResponse } from '../resolvers/types';
import { ErrorType } from '../../util/types'

export default function makeCreateAccount ( pool: Pool ) {
    return function createAccount( accountInfo: AccountType ): UserResponse {
        const account = makeAccount(accountInfo);
        
        if (account['errors']) {
            const error: ErrorType = {
                field: "creating an account",
                message: "error making the account, please try again"
            }

            return {
                error,
            }
            // return "error found";
        }

        const inputs: UseCaseType = {
            pool,
            query: insertQuery()['query'],
        }

       pgQuery(inputs, account['account']);

       // handle for errors
    //    return accountInfo;
        return {
            account: accountInfo,
        }
    }
}