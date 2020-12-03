import { getOneQuery } from '../db/dbQueries';
import { pgQuery } from '../db/poolQueryBase';
import UseCaseType from './useCaseType';
import { Pool } from 'pg'
import { UserResponse } from '../resolvers/types';
import { AccountType } from '../entity/accountTypes';

export default function makeGetOneAccount ( pool: Pool ) {
    return async function getOneAccount ( username: string ): Promise<UserResponse> {
        const inputs: UseCaseType = {
            pool,
            query: getOneQuery()['query'],
        }

        const info: AccountType = {
            userName: username
        } as AccountType;

        const res = await pgQuery(inputs, info);
        let acc = res['response'].rows[0];

        const account: AccountType = {
            firstName: acc['firstname'],
            lastName: acc['lastname'],
            userName: acc['username'],
            email: acc['email'],
            number: acc['number'],
            createdAt: acc['createdat'],
            updatedAt: acc['updatedat']
        } as AccountType;

        return {
            account,
            response: "account returned"
        }
    }
}