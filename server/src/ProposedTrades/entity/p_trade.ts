import { ProposedTradeType, PTResType } from './p_trade_type';
import { ErrorType } from '../../util/types'

export default function buildMakeProposedTrade () {
    return function makeProposedTrade({ from_id, to_id, from_cards, to_cards, createdAt = Date.now().toString(), updatedAt = Date.now().toString() }: ProposedTradeType): PTResType {
        const errors: ErrorType[] = []

        if (from_cards.length == 0) {
            const err: ErrorType = {
                field: 'from card',
                message: 'From has nocards being traded'
            }

            errors.push(err);
        }
        else if (to_cards.length == 0) {
            const err: ErrorType = {
                field: 'to card',
                message: 'To has no cards being traded'
            }
            errors.push(err);
        }
        
        if (errors.length > 0) {
            return {
                errors,
            }
        }

        const trade: ProposedTradeType = {
            from_id,
            to_id,
            from_cards,
            to_cards,
            createdAt: Date.now().toString(),
            updatedAt: Date.now().toString()
        }

        return {
           trade 
        }
    }
}