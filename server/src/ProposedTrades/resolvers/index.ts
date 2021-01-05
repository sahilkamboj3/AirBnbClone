import * as cases from '../use-cases';
import { Arg, Field, InputType, Query, Resolver, Mutation, Int } from 'type-graphql';
import { ProposedTradeResponse } from './resolverTypes'
import { ProposedTradeType } from '../entity/p_trade_type'

@InputType()
class ProposedTradeInput {
    @Field()
    to_id: number;

    @Field()
    from_id: number;

    @Field(() => [Int])
    to_cards: number[];

    @Field(() => [Int])
    from_cards: number[];
}

@Resolver()
export class ProposedTradeResolver {
    @Query(() => ProposedTradeResponse)
    async getAllProposedTrades(): Promise<ProposedTradeResponse> {
        const res: ProposedTradeResponse = await cases.getAllProposedTrades();
        return res;
    }

    @Mutation(() => ProposedTradeResponse)
    async insertPT(
        @Arg("info", () => ProposedTradeInput) info: ProposedTradeInput,
    ): Promise<ProposedTradeResponse> {
        const res: ProposedTradeResponse = await cases.createProposedTrade(info as ProposedTradeType);
        return res;
    }
}
