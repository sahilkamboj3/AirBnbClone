import { insertQuery } from '../db/queries';
import makeProposedTrade from "../entity";
import { ProposedTradeType, PTResType } from '../entity/p_trade_type';
import { Pool } from 'pg';
import { ProposedTradeResponse } from '../resolvers/resolverTypes';
import { pgQuery } from '../../Account/db/poolQueryBase';
import UseCaseType from './UseCaseType'

export default function buildCreateProposedTrade ( pool: Pool ) {
    return async function createProposedTrade (proposedTradeInfo: ProposedTradeType): Promise<ProposedTradeResponse> {
        const trade: PTResType = makeProposedTrade(proposedTradeInfo);

        if (trade['errors']) {
            return {
                errors: trade['errors']
            }
        }

        const inputs: UseCaseType = {
            query: insertQuery()['query'],
            pool: pool
        }
        let info = {
            from_id: proposedTradeInfo.from_id,
            to_id: proposedTradeInfo.to_id,
            from_cards: proposedTradeInfo.from_cards,
            to_cards: proposedTradeInfo.to_cards
        }

        const res = await pgQuery(inputs, info);

        if (res["error"]) {
            return {
                error: {
                    field: "create trade",
                    message: res["error"]
                }
            }
        }
        const tradeRes = res['response'].rows[0];
        const trade_: ProposedTradeType = {
            id: tradeRes['id'],
            from_id: tradeRes['from_id'],
            to_id: tradeRes['from_id'],
            from_cards: tradeRes['from_cards'],
            to_cards: tradeRes['to_cards'],
            createdAt: tradeRes['createdat'],
            updatedAt: tradeRes['updatedat']
        } as ProposedTradeType;

        return {
            proposedTrade: trade_,
            response: "trade added"
        }
    }
}