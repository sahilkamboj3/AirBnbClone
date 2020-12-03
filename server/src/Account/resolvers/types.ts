import { Field, ObjectType } from 'type-graphql';
import { ErrorType } from '../../util/types'
import { AccountType } from '../entity/accountTypes';

@ObjectType()
export class UserResponse {
    @Field(() => [ErrorType], { nullable: true })
    errors?: ErrorType[];

    @Field(() => ErrorType, { nullable: true })
    error?: ErrorType;
    
    @Field(() => AccountType, { nullable: true })
    account?: AccountType;
    
    @Field(() => [AccountType], { nullable: true })
    accounts?: AccountType[];

    @Field(() => String, { nullable: true })
    response?: string;
}