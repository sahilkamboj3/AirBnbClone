import makeCreateAccount from './createAccount';
import makeUpdateAccount from './updateAccount';
import makeDeleteAccount from './deleteAccount';
import { pool } from '../../db'

export const makeAccount = makeCreateAccount(pool);
export const updateAccount = makeUpdateAccount(pool);
export const deleteAccount = makeDeleteAccount(pool);

