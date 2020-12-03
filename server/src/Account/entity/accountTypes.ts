import { Field, ObjectType, Int } from 'type-graphql';
import { ErrorType } from '../../util/types';

@ObjectType()
export class AccountType {
    // @Field(() => Int)
    // id: number

    @Field(() => String, {nullable: true})
    firstName: string;

    @Field(() => String, {nullable: true})
    lastName: string;

    @Field(() => String, {nullable: true})
    userName: string;

    @Field(() => String, {nullable: true})
    email: string;

    @Field(() => String, {nullable: true})
    number: string;

    password: string;
    
    // @Field(() => String)
    // createdAt: Date;
    
    // @Field(() => String) 
    // updatedAt: Date;

    @Field(() => Int, {nullable:true})
    createdAt: number;
    
    @Field(() => Int, {nullable:true}) 
    updatedAt: number;
}

@ObjectType()
export class AccountResType {
    @Field(() => [ErrorType], {nullable: true})
    errors?: ErrorType[];

    @Field(() => AccountType, {nullable: true})
    account?: AccountType
}
