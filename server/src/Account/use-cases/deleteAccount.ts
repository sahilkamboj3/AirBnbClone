import { delQuery } from '../db/dbQueries';
import { pgQuery } from '../db/poolQueryBase';
import UseCaseType from './useCaseType';
import { AccountType } from '../entity/accountTypes';
import { Pool } from 'pg';
import { UserResponse } from '../resolvers/types';

export default function makeDeleteAccount ( pool: Pool) {
    return function deleteAccount( username: string ): UserResponse {
        // handle for if account doesn't exist beforehand - TODO

        const inputs: UseCaseType = {
            pool,
            query: delQuery()['query'],
        }

        const info: AccountType = {
           userName: username 
        } as AccountType;

        pgQuery(inputs, info);

        return {
           response: "account deleted"
        }
    }
}