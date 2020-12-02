// import { delQuery } from '../db/dbQueries';
// import { pgQuery } from '../db/poolQueryBase';
// import UseCaseType from './useCaseType';
import { Pool } from 'pg';
import { UserResponse } from '../resolvers/types';

export default function makeDeleteAccount ( pool: Pool) {
    return function deleteAccount( id: number ): UserResponse {
        // handle for if account doesn't exist beforehand - TODO

    //     const inputs: UseCaseType = {
    //         pool,
    //         query: delQuery()['query'],
    //     }

    //    pgQuery(inputs, id);

       return {
           response: "account deleted"
      }
    }
}