import { DbQueryType } from '../../db/dbTypes'

export const getAllQuery = (): DbQueryType => {
    return {
        query: "SELECT * FROM proposed_trade_db;"
    }
}

export const getOneQuery = (): DbQueryType => {
    return {
        query: "SELECT * FROM proposed_trade_db WHERE id = ($1);"
    }
}

export const getDeleteQuery = (): DbQueryType => {
    return {
        // query: "DELETE * FROM proposed_trade_db WHERE id = ($1) RETURNING *;"
        query: "DELETE FROM proposed_trade_db WHERE id = ($1) RETURNING *;"
    }
}

export const insertQuery = (): DbQueryType => {
    return {
        query: "INSERT INTO proposed_trade_db (from_id, to_id, from_cards, to_cards, createdat, updatedat) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *;"
    }
}

