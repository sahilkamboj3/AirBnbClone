import { AccountType } from '../entity/accountTypes'
import { loginQuery } from '../db/dbQueries';
import { pgQuery } from '../db/poolQueryBase';
import UseCaseType from './useCaseType';
import { Pool } from 'pg'
import { UserResponse, LoginCredentials } from '../resolvers/types';

export default function makeLoginAccount ( pool: Pool, passwordHash: any ) {
    return async function loginAccount( creds: LoginCredentials ): Promise<UserResponse> {

        const inputs: UseCaseType = {
            pool,
            query: loginQuery()['query'],
        }

        let info: AccountType = {
            userName: creds['username'],

        } as AccountType;

        const res = await pgQuery(inputs, info);

        let account_ = undefined;
        
        if (res['response'].rows[0]) {

            const acc = res['response'].rows[0];

            if (!passwordHash.verify(creds['password'], acc['password'])) {
                return {
                    error: {
                        field: 'login password',
                        message: 'password invalid'
                    }
                }
            }

            account_ = {
                id: acc['id'],
                firstName: acc['firstname'],
                lastName: acc['lastname'],
                userName: acc['username'],
                email: acc['email'],
                number: acc['number'],
                createdAt: acc['createdat'],
                updatedAt: acc['updatedat']
            } as AccountType;
        }

        return {
            account: account_,
            response: "account logged in"
        }
    }
}