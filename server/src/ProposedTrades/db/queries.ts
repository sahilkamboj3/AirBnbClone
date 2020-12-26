// export const selectAllQuery = "SELECT * FROM proposed_trade_db;"
// export const addQuery = "INSERT INTO proposed_trade_db (from_id, to_id, from_cards, to_cards, createdat, updatedat) VALUES ($1, $2, $3, $4, NOW(), NOW());"

import { DbQueryType } from '../../db/dbTypes'

export const getAllQuery  = (): DbQueryType => {
    return {
        query: "SELECT * FROM proposed_trade_db;"
    }
}

export const insertQuery  = (): DbQueryType => {
    return {
        query: "INSERT INTO proposed_trade_db (from_id, to_id, from_cards, to_cards, createdat, updatedat) VALUES ($1, $2, $3, $4, NOW(), NOW());"
    }
}

