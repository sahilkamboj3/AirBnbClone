import buildCreateProposedTrade from './createProposedTrade';
import buildGetAllProposedTrades from './getAllProposedTrades';
import { pool } from '../../db';

export const createProposedTrade = buildCreateProposedTrade(pool);
export const getAllProposedTrades = buildGetAllProposedTrades(pool);