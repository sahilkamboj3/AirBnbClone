import { buildMakeAccount } from './account';
import { isValidEmail, isValidNumber, buildMakeHashPassword } from './utils';
import passwordHash from 'password-hash';

// const hashPassword: (pw: string) => any = buildMakeHashPassword({ bcrypt })
const makeAccount = buildMakeAccount({ isValidNumber, isValidEmail, passwordHash });
export default makeAccount;
