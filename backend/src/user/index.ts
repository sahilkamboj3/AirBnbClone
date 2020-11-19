import Id from '../Id';
import buildMakeUser from './user';
import makeEncryption from './makeEncryptedPassword';

// function makeEncryption ({ bcrypt, content, saltrounds = 10 }) {
//     const hash = bcrypt.hash(content, saltRounds);
    
//     return Object.freeze({
//         //   getEncryption: () => hash 
//         password: hash
//     })
// }

let makeEncryptedPassword = makeEncryption({ bcrypt, content })
let makeUser = buildMakeUser({ Id, makeEncryptedPassword });

module.exports = {
    makeEncryptedPassword, 
    makeUser
}

// export default makeUser;