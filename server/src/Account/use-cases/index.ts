import makeCreateAccount from './createAccount';
import makeUpdateAccount from './updateAccount';
import makeDeleteAccount from './deleteAccount';
import { pool } from '../../db'

export const makeAccount = makeCreateAccount(pool, account);
export const updateAccount = makeUpdateAccount(pool, id);
export const deleteAccount = makeDeleteAccount(pool, info);

