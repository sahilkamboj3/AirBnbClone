import { buildMakeAccount } from './account';
import { isValidEmail, isValidNumber, buildMakeHashPassword } from './utils';
import bcrypt from 'bcrypt';

const makeAccount = buildMakeAccount({ isValidNumber, isValidEmail }, buildMakeHashPassword({ bcrypt }))
export default makeAccount;
