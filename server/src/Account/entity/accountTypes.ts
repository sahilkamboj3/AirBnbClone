import { Field, ObjectType, Int } from 'type-graphql';
import { ErrorType } from '../../util/types';

@ObjectType()
export class AccountType {
    @Field(() => Int)
    id: number

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    userName: string;

    @Field()
    email: string;

    @Field()
    number: string;

    password: string;
    
    // @Field(() => String)
    // createdAt: Date;
    
    // @Field(() => String) 
    // updatedAt: Date;

    @Field(() => Int)
    createdAt: number;
    
    @Field(() => Int) 
    updatedAt: number;
}

@ObjectType()
export class AccountResType {
    @Field(() => [ErrorType], {nullable: true})
    errors?: ErrorType[];

    @Field(() => AccountType, {nullable: true})
    account?: AccountType
}
