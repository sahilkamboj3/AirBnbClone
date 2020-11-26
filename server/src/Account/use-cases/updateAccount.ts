// import { AccountType } from '../entity/accountTypes'
import { updateQuery } from '../db/dbQueries';
import { pgQuery } from '../db/poolQueryBase';
import UseCaseType from './useCaseType';
import { Pool } from 'pg'
import { ErrorType } from '../../util/types'

export default function makeUpdateAccount ( pool: Pool) {
    return function updateAccount( info: any ): ErrorType {
        const inputs: UseCaseType = {
            pool,
            query: updateQuery()['query'],
            // info: account['account'],
        }

       pgQuery(inputs, info);

       const error: ErrorType = {
           field: "updating account",
           message: "error updating account"
       }

       return error; 
    }
}