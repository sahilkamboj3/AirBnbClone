from flask import Flask
from Card.resolvers.card_resolver import CardMutation
from flask_graphql import GraphQLView
import graphene
# import sys

# print(sys.path)


app = Flask(__name__)
schema = graphene.Schema(mutation=CardMutation)

app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
    'graphql',
    schema=schema,
    graphiql=True
))


@app.route('/')
def hello_world():
    return "hello world"


if __name__ == '__main__':
    app.run()
