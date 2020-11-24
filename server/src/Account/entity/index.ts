import { buildMakeAccount } from './account';
import { isValidEmail, isValidNumber } from './utils';

const makeAccount = buildMakeAccount({ isValidNumber, isValidEmail })
export default makeAccount;