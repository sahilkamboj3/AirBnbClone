def send_create_card_mutation(filename):
    from python_graphql_client import GraphqlClient
    import asyncio

    client = GraphqlClient(endpoint="http://localhost:8000/")

    mutation = """
        mutation($filename: String) {
            createCard(card:{inside:98, mid:95, three:83, passing:99, steal:90, block: 70, accountID:1,filename:$filename}) {
                errors {
                    field
                    message
                }
                cards {
                    accountID
                    inside
                    mid
                    three
                    passing
                    steal
                    block
                    imgURL
                }
            }
        }
    """
    variables = {"filename": filename}

    data = asyncio.run(client.execute_async(query=mutation, variables=variables))
    return data
