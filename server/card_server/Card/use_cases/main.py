import sys
from pathlib import Path

parent = Path(__file__).parents[1]
grandparent = Path(__file__).parents[2]
sys.path.append(str(parent))
sys.path.append(str(grandparent))

from entity.card import Card
from db_dir.queries import Queries
from db.db_ import RunQuery


class UseCases:
    def __init__(self):
        self.queries = Queries()
        self.rq = RunQuery()

    def create_card_case(self, inside, mid, three, passing, steal, block, url="url"):
        card_info = {
            "account_id": 1,
            "inside": inside,
            "mid": mid,
            "three": three,
            "passing": passing,
            "steal": steal,
            "block": block,
            "imgurl": url
        }

        card_inst = Card(card_info)
        card_res = card_inst.return_res()

        if card_res.errors:
            return card_res

        query = self.queries.insert_card()
        values = [(val) for val in card_info.values()]
        res = self.rq.run_query(query=query, tuple_=values)

        return res

    def get_all_cards_case(self):
        query = self.queries.select_all()
        res = self.rq.run_query(query=query)
        
        return res

    def get_one_card_case(self, id):
        query = self.queries.select_one()
        res = self.rq.run_query(query=query, tuple_=[(id)])
        return res

    def delete_card_case(self, id):
        query = self.queries.delete_card()
        res = self.rq.run_query(query=query, tuple_=[(id)])

        return res


# us = UseCases()
# print('create card')
# res = us.create_card_case(
#    1, 9, 9, 1, 1, 1, 1
# )
# try:
#     if res.errors:
#         for err in res.errors:
#             print(err.field, err.message)
# except AttributeError:
#     print(res.response)

# for err in res:
#     print(err.field + ': ' + err.message)
# print(res)

# print('get cards')
# res = us.get_all_cards_case()
# print(res.response)

# print('get one card')
# res = us.get_one_card_case(1)
# print(res.response)

# print('delete card')
# res = us.delete_card_case(2)
