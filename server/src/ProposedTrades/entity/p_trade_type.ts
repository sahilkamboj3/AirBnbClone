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
    
}

@ObjectType()
export class PTResType {
    @Field(() => [ErrorType], { nullable: true })
    errors?: ErrorType[];

    @Field(() => ProposedTradeType, { nullable: true })
    trade?: ProposedTradeType
}

// export interface ProposedTradeType {
//     from_id: number,
//     to_id: number,
//     from_cards: number[],
//     to_cards: number[],
// }

// export interface PTResType {
//     errors: ErrorType[],
//     trade: ProposedTradeType
// }