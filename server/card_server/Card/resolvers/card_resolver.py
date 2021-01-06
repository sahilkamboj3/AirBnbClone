import graphene
from graphene import ObjectType, String, Schema, Field, Interface


class Error(graphene.ObjectType):
    field = graphene.String()
    message = graphene.String()

    def resolve_field(parent, info):
        return parent['field']

    def resolver_message(parent, info):
        return parent['message']


class Card(graphene.ObjectType):
    inside = graphene.Int()
    mid = graphene.Int()
    three = graphene.Int()
    passing = graphene.Int()
    steal = graphene.Int()
    block = graphene.Int()

    def resolve_inside(parent, info):
        return parent['inside']

    def resolve_mid(parent, info):
        return parent['inside']

    def resolve_three(parent, info):
        return parent['inside']

    def resolve_passing(parent, info):
        return parent['inside']

    def resolve_steal(parent, info):
        return parent['inside']

    def resolve_block(parent, info):
        return parent['inside']


class CardMutation(graphene.Mutation):
    class Arguments:
        card_info = Card()
        action = graphene.String()

    error = Error()
    card = Card()

    def mutate(root, info, card_info, action):
        pass
        # if action == 

# class CardQuery(ObjectType):
#     res = Field(
#         Error,
#         Card
#     )

