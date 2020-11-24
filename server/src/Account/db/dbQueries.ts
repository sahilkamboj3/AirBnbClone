import { DbQueryType } from '../../db/dbTypes'
import { ErrorType } from '../../util/types';
import { AccountType } from '../entity/accountTypes'

export const getAllQuery  = (): DbQueryType => {
    return {
        query: "select * from account;"
    }
}

export const insertQuery = ({ id, firstName, lastName, email, password, number }: AccountType): DbQueryType  => {
    return {
        query: `insert into account (firstname, lastname, email, password, number) values ($firstName, $lastName, $email, $password, $number);`,
    } 
}

export const updateQuery  = ({ id, firstName, lastName, email, password, number }: AccountType): DbQueryType => {
    return {
        query: `update account set ($firstName, $lastName, $email, $password, $number) where id = ($id)`,
    } 
}

export const delQuery  = ({ id, firstName, lastName, email, password, number }: AccountType): DbQueryType => {
    return {
        query: `delete from account where id = ($id);`
    } 
}

export const getOneQuery  = ({ id, firstName, lastName, email, password, number }: AccountType): DbQueryType => {
    return {
        query: `select * from account where id = ($id);`
    } 
}