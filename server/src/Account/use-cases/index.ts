import makeCreateAccount from './createAccount';
import makeGetAccounts from './getAllAccounts';
// import makeUpdateAccount from './updateAccount';
// import makeDeleteAccount from './deleteAccount';
import { pool } from '../../db'

export const makeAccount = makeCreateAccount(pool);
export const getAccounts = makeGetAccounts(pool);
// export const updateAccount = makeUpdateAccount(pool);
// export const deleteAccount = makeDeleteAccount(pool);

