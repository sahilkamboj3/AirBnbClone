import { Arg, Query, Resolver, Int, Mutation } from 'type-graphql';
import { AccountType } from '../entity/accountTypes';
import { ErrorType } from '../../util/types'
import { UserResponse } from './types';
import * as cases from '../use-cases';

@Resolver()
export class UserResolver {
    @Query(() => UserResponse)
    async addUser(@Arg("info", () => AccountType) options: AccountType): Promise<UserResponse> {
        const userFeedback: UserResponse = cases.makeAccount(options);
        return userFeedback;
        
    }

    // @Query(() => UserResponse) 
    // async deleteUser(@Arg("id", () => Int) id: number): Promise<UserResponse> {
    //     const userFeedback: ErrorType = cases.deleteAccount(id);
    //     return {
    //         error: userFeedback
    //     }
    // } 

    // @Mutation(() => UserResponse)
    // async updateUser(@Arg("info", () => AccountType) options: AccountType): Promise<UserResponse> {
    //     const userFeedback: ErrorType = cases.updateAccount(options);
    //     return {
    //         error: userFeedback
    //     }
    // }
}