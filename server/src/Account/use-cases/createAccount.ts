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

       const error_ = await pgQuery(inputs, account['account']);

       if (error_) {
            return {
                error: {
                    field: "adding account",
                    message: error_['detail'].toString()
                }
            }
       }

        return {
            account: accountInfo,
        }
    }
}