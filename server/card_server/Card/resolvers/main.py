from graphene import ObjectType, String, Schema, Field

# class Query(ObjectType):
#     hello = String(name=String(default_value='stranger'))
#     goodbye = String()

#     def resolve_hello(root, info, name):
#         return "Hi {}".format(name)
    
#     def resolve_goodbye(root, info):
#         return 'Bye'


# query = '{ hello }'
# query2 = '{ hello(name:"Sahil") }'
# query3 = '{ goodbye }'
# schema = Schema(query=Query)

# res = schema.execute(query)
# res2 = schema.execute(query2)
# res3 = schema.execute(query3)

# print(res)
# print(res2)
# print(res3)


# class Person(ObjectType):
#     first_name = String()
#     last_name = String()
#     full_name = String()

#     def resolve_full_name(parent, info):
#         print('parent p')
#         print(parent)
#         print('info p')
#         print(info)
#         full_name = parent['fullName']
#         first_name = full_name.split(' ')[0]
#         last_name = full_name.split(' ')[1]
#         return "{} {}".format(first_name, last_name)

#     def resolve_first_name(parent, info):
#         full_name = parent['fullName']
#         return full_name.split(' ')[0]

#     def resolve_last_name(parent, info):
#         full_name = parent['fullName']
#         return full_name.split(' ')[1]


# class Query2(ObjectType):
#     me = Field(Person)

#     def resolve_me(parent, info):
#         print('parent q')
#         print(parent)

#         def get_human(name):
#             print('here2')
#             print('parent after here 2')
#             print(parent)
#             return {"fullName": name}

#         print('here')
#         return get_human(name="Sahil Kamboj")


# schema2 = Schema(Query2)
# query_string = 'query { me { fullName firstName lastName } }'
# result = schema2.execute(query_string)
# print(result)





from collections import namedtuple

PersonValueObject = namedtuple("Person", ["first_name", "last_name"])


class Person(ObjectType):
    first_name = String()
    last_name = String()


class Query(ObjectType):
    me = Field(Person)
    my_best_friend = Field(Person)

    def resolve_me(parent, info):
        # always pass an object for `me` field
        obj = PersonValueObject(first_name="Luke", last_name="Skywalker")
        print(type(obj))
        print(obj)
        return obj

    def resolve_my_best_friend(parent, info):
        # always pass a dictionary for `my_best_fiend_field`
        return {"first_name": "R2", "last_name": "D2"}
        # return PersonValueObject(first_name="Default", last_name="Value")


schema = Schema(query=Query)
result = schema.execute('''
    {
        me { firstName lastName }
        myBestFriend { firstName lastName }
    }
''')
# With default resolvers we can resolve attributes from an object..
# assert result.data["me"] == {"firstName": "Luke", "lastName": "Skywalker"}

# With default resolvers, we can also resolve keys from a dictionary..
# assert result.data["myBestFriend"] == {"firstName": "R2", "lastName": "D2"}
print(result)


