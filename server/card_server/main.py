# from flask import Flask
# from flask_graphql import GraphQLView
from Card.use_cases.main import UseCases as cases
from Card.entity.card_types import CardType
from gen_util.error_type import ErrorType
from ariadne import QueryType, MutationType, gql, make_executable_schema
from ariadne.asgi import GraphQL

cases = cases()

# Define types using Schema Definition Language (https://graphql.org/learn/schema/)
# Wrapping string in gql function provides validation and better error traceback
type_defs = gql("""
    type Error {
        field: String
        message: String
    }

    input CardInput {
        inside: Int
        mid: Int
        three: Int
        passing: Int
        steal: Int
        block: Int
        accountID: Int
    }

    type CardOutput {
        inside: Int
        mid: Int
        three: Int
        passing: Int
        steal: Int
        block: Int
        accountID: Int
    }

    type GQLOutput {
        errors: [Error]
        cards: [CardOutput]
    }

    type Query {
        getAll: GQLOutput!
        getOne(id: Int): GQLOutput!
    }

    type Mutation {
        createCard(card: CardInput!): GQLOutput!
        deleteCard(id: Int): GQLOutput!
    }
    
""")

# Map resolver functions to Query fields using QueryType
query = QueryType()
mutation = MutationType()


@query.field("getAll")
def resolve_get_all(*_):
    res = cases.get_all_cards_case()
    cards = []

    for card in res.response:
        cards.append(CardType(
            inside=card[1],
            mid=card[2],
            three=card[3],
            passing=card[4],
            steal=card[5],
            block=card[6]
        ))
    return {"cards": cards, "errors": None}


@query.field("getOne")
def resolve_get_one(*_, id):
    res = cases.get_one_card_case(id)
    if len(res.response) == 0:
        field = "getOne query"
        message = "ID is not valid"
        error = ErrorType(field=field, message=message)
        return {"cards": None, "errors": [error]}

    card = CardType(
        inside=res.response[0][1],
        mid=res.response[0][2],
        three=res.response[0][3],
        passing=res.response[0][4],
        steal=res.response[0][5],
        block=res.response[0][6]
    )
    return {"cards": [card], "errors": None}


@mutation.field("deleteCard")
def resolve_get_one(*_, id):
    res = cases.delete_card_case(id)
    print(res.response)
    if len(res.response) == 0:
        field = "deleteCard query"
        message = "ID is not valid"
        error = ErrorType(field=field, message=message)
        return {"cards": None, "errors": [error]}

    card = CardType(
        inside=res.response[0][1],
        mid=res.response[0][2],
        three=res.response[0][3],
        passing=res.response[0][4],
        steal=res.response[0][5],
        block=res.response[0][6]
    )
    return {"cards": [card], "errors": None}


@mutation.field("createCard")
def resolve_create_card(*_, card):
    res = cases.create_card_case(
        # account_id=card['accountID'],
        inside=card['inside'],
        mid=card['mid'],
        three=card['three'],
        passing=card['passing'],
        steal=card['steal'],
        block=card['block']
    )

    if res.errors:
        errors = []
        for error in res.errors:
            error = ErrorType(field=error.field, message=error.message)
            errors.append(error)
        return {"cards": None, "errors": errors}

    return {"cards": [card], "errors": None}


schema = make_executable_schema(type_defs, [query, mutation])
app = GraphQL(schema, debug=True)


# app = Flask(__name__)

# app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
#     'graphql',
#     schema=schema,
#     graphiql=True
# ))


# @app.route('/')
# def hello_world():
#     return "hello world"


# if __name__ == '__main__':
#     app.run()
