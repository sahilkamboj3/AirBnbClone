import buildCreateProposedTrade from './createProposedTrade';
import buildGetAllProposedTrades from './getAllProposedTrades';
import buildGetOneProposedTrade from './getOneProposedTrade';
import buildDeleteProposedTrade from './deleteProposedTrade';
import { pool } from '../../db';

export const createProposedTrade = buildCreateProposedTrade(pool);
export const getAllProposedTrades = buildGetAllProposedTrades(pool);
export const getOneProposedTrade = buildGetOneProposedTrade(pool);
export const deleteProposedTrade = buildDeleteProposedTrade(pool);