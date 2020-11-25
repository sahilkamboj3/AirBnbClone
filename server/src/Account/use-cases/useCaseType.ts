import { Pool } from "pg";
// import { AccountResType } from '../entity/accountTypes'
// import { DbQueryType } from '../../db/dbTypes'

export default interface UseCaseType {
    pool: Pool,
    query: string, 
    // info: AccountResType['account'] 
}