import { Arg, Field, InputType, Query, Resolver } from 'type-graphql';
import { AccountType } from '../entity/accountTypes';
import { UserResponse } from './types';
import * as cases from '../use-cases';

@InputType()
class GQLAccountInput {
    // @Field(() => Int)
    // id?: number

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    userName: string;

    @Field(() => String)
    email: string;

    @Field()
    number: string;

    @Field()
    password: string;;
}

@Resolver()
export class UserResolver {
    @Query(() => UserResponse)
    async get(): Promise<UserResponse | null> {
        const userFeedback: Promise<UserResponse> = cases.getAccounts();
        return userFeedback;
    }

    @Query(() => UserResponse)
    async one(
        @Arg("username", () => String) username: string,
    ): Promise<UserResponse | null> {
        const userFeedback: Promise<UserResponse> = cases.getAccount(username);
        return userFeedback;
    }

    @Query(() => UserResponse)
    // @Mutation(() => UserResponse)
    async addUser(
        @Arg("info", () => GQLAccountInput) info: GQLAccountInput
    ): Promise<UserResponse | null> {
        const info_ = info as AccountType;
        info_['createdAt'] = 1;
        info_['updatedAt']= 1;
        const userFeedback: Promise<UserResponse> = cases.makeAccount(info_);
        return userFeedback;
    }

    @Query(() => UserResponse) 
    async deleteUser(
        @Arg("username", () => String) username: string
    ): Promise<UserResponse> {
        const userFeedback: UserResponse = cases.deleteAccount(username);
        return userFeedback;
    } 

    // _______________________________________________________________
    // @Mutation(() => UserResponse)
    // async updateUser(@Arg("info", () => AccountType) options: AccountType): Promise<UserResponse> {
    //     const userFeedback: ErrorType = cases.updateAccount(options);
    //     return {
    //         error: userFeedback
    //     }
    // }
}