import { Pool } from 'pg';
import { getAllQuery } from '../db/queries';
import UseCaseType from './UseCaseType';
import { pgQuery } from '../../Account/db/poolQueryBase';
import { ProposedTradeResponse } from '../resolvers/resolverTypes';
import { ProposedTradeType } from '../entity/p_trade_type';

export default function buildGetAllProposedTrades(pool: Pool) {
    return async function getAllProposedTrades (): Promise<ProposedTradeResponse> {
        const inputs: UseCaseType = {
            query: getAllQuery()['query'],
            pool: pool
        }

        const res = await pgQuery(inputs);
        const proposedTrades: ProposedTradeType[] = [];

        for (let i = 0; i < res['response'].rows.length; i++) {
            let trade = res['response'].rows[i];
            proposedTrades.push({
                id: trade['id'],
                from_id: trade['from_id'],
                to_id: trade['to_id'],
                from_cards: trade['from_cards'],
                to_cards: trade['to_cards'],
                createdAt: trade['createdat'],
                updatedAt: trade['updatedat']
            } as ProposedTradeType);
        }

        return {
            proposedTrades: proposedTrades,
            response: "all proposed trades returned"
        }

    }
}