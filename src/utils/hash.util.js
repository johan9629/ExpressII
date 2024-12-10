import { genSaltSync, hashSync, compareSync } from "bcrypt";

function createHashUtil(pasword) {
    const salt = genSaltSync(10)
    const hashPassword = hashSync(pasword, salt)
    return hashPassword
}

function verifyHashUtil(password, dbPass) {
    const verify = compareSync(password, dbPass)
    return verify
}

export { createHashUtil, verifyHashUtil }