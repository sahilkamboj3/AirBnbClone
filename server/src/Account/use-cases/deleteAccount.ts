// import { AccountType } from '../entity/accountTypes'
import { delQuery } from '../db/dbQueries';
import { pgQuery } from '../db/poolQueryBase';
import UseCaseType from './useCaseType';
import { Pool } from 'pg';
import { ErrorType } from '../../util/types'

export default function makeDeleteAccount ( pool: Pool) {
    // return function deleteAccount( accountInfo: AccountType ): ErrorType  {
    return function deleteAccount( id: number ): ErrorType  {
        // const id: number = accountInfo['id'];

        const inputs: UseCaseType = {
            pool,
            query: delQuery()['query'],
            // info: account['account'],
        }

       pgQuery(inputs, id);

       return {
           field: "testing",
           message: "need to handle for an error when delete doesn't work" 
       }

       // handle for errors
    //    return "something";
    }
}