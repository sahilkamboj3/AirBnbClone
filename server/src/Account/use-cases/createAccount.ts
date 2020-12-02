import makeAccount from '../entity';
import { AccountType } from '../entity/accountTypes'
import { insertQuery } from '../db/dbQueries';
import { pgQuery } from '../db/poolQueryBase';
import UseCaseType from './useCaseType';
import { Pool } from 'pg'
import { UserResponse } from '../resolvers/types';

export default function makeCreateAccount ( pool: Pool ) {
    return async function createAccount( accountInfo: AccountType ): Promise<UserResponse> {
        const account = makeAccount(accountInfo);
        
        if (account['errors']) {
            return {
                errors: account['errors'],
            }
        }

        const inputs: UseCaseType = {
            pool,
            query: insertQuery()['query'],
        }

       const res = await pgQuery(inputs, account['account'], "create");

       if (res['error']) {
            return {
                error: {
                    field: "create",
                    message: res['error']
                }
            }
       }

        return {
            account: accountInfo,
        }
    }
}