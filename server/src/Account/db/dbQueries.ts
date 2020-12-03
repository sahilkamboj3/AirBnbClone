import { DbQueryType } from '../../db/dbTypes'

export const getAllQuery  = (): DbQueryType => {
    return {
        query: "SELECT * FROM account;"
    }
}

export const insertQuery = (): DbQueryType  => {
    return {
        query: `INSERT INTO account (firstname, lastname, username, email, number, password, createdat, updatedat) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
    } 
}

// export const updateQuery  = (): DbQueryType => {
//     return {
//         query: `update account set ($2, $3, $4, $5, $6) where id = ($1)`,
//     } 
// }

// export const delQuery  = (): DbQueryType => {
//     return {
//         query: `delete from account where id = ($1);`
//     } 
// }

// export const getOneQuery = (): DbQueryType => {
//     return {
//         query: `select * from account where id = ($1);`
//     } 
// }

// export const insertQuery = ({ id, firstName, lastName, email, password, number }: AccountType): DbQueryType  => {
//     return {
//         query: `insert into account (firstname, lastname, email, password, number) values ($firstName, $lastName, $email, $password, $number);`,
//     } 
// }

// export const updateQuery  = ({ id, firstName, lastName, email, password, number }: AccountType): DbQueryType => {
//     return {
//         query: `update account set ($firstName, $lastName, $email, $password, $number) where id = ($id)`,
//     } 
// }

// export const delQuery  = ({ id }: AccountType): DbQueryType => {
//     return {
//         query: `delete from account where id = ($id);`
//     } 
// }

// export const getOneQuery  = ({ id }: AccountType): DbQueryType => {
//     return {
//         query: `select * from account where id = ($id);`
//     } 
// }