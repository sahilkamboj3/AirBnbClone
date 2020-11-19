export default function makeEncryption ({ bcrypt, content, saltRounds = 10 }) {
    const hash = bcrypt.hash(content, saltRounds);

    return Object.freeze({
        password: hash
    })
}