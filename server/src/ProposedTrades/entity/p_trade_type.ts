import { ErrorType } from '../../util/types'
import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export class ProposedTradeType {
    @Field(() => Int, { nullable: true })
    from_id: number;
    
    @Field(() => Int, { nullable: true })
    to_id: number;
    
    @Field(() => [Int], { nullable: true })
    from_cards: number[];
    
    @Field(() => [Int], { nullable: true })
    to_cards: number[];

    @Field(() => String, {nullable:true})
    createdAt: string;
    
    @Field(() => String, {nullable:true}) 
    updatedAt: string;
    
}

@ObjectType()
export class PTResType {
    @Field(() => [ErrorType], { nullable: true })
    errors?: ErrorType[];

    @Field(() => ProposedTradeType, { nullable: true })
    trade?: ProposedTradeType
}
