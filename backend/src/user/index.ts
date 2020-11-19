import Id from '../Id';
import buildMakeUser from './user';
import makeEncryption from './makeEncryptedPassword';

let makeEncryptedPassword = makeEncryption({ bcrypt, content })
let makeUser = buildMakeUser({ Id, makeEncryptedPassword });

module.exports = {
    makeEncryptedPassword, 
    makeUser
}