import { Field, ObjectType } from 'type-graphql';
import { ErrorType } from '../../util/types'
import { ProposedTradeType } from '../entity/p_trade_type';

@ObjectType()
export class ProposedTradeResponse {
    @Field(() => [ErrorType], { nullable: true })
    errors?: ErrorType[];

    @Field(() => ErrorType, { nullable: true })
    error?: ErrorType;
    
    @Field(() => ProposedTradeType, { nullable: true })
    proposedTrade?: ProposedTradeType;
    
    @Field(() => [ProposedTradeType], { nullable: true })
    proposedTrades?: ProposedTradeType[];

    @Field(() => String, { nullable: true })
    response?: string;
}