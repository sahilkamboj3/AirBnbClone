import { DbQueryType } from '../../db/dbTypes'

export const getAllQuery  = (): DbQueryType => {
    return {
        query: "SELECT * FROM account_db;"
    }
}

export const getOneQuery  = (): DbQueryType => {
    return {
        query: "SELECT * FROM account_db WHERE id = ($1);"
    }
}

export const loginQuery  = (): DbQueryType => {
    return {
        query: "SELECT * FROM account_db WHERE username = ($1) AND password = ($2);"
    }
}

export const insertQuery = (): DbQueryType  => {
    return {
    query: `INSERT INTO account_db (firstname, lastname, username, email, number, password, createdat, updatedat) VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW()) RETURNING *;`,
    } 
}


export const delQuery  = (): DbQueryType => {
    return {
        query: `DELETE FROM account_db WHERE id = ($1);`
    } 
}

// export const updateQuery  = (): DbQueryType => {
//     return {
//         query: `update account_db set ($2, $3, $4, $5, $6) where id = ($1)`,
//     } 
// }