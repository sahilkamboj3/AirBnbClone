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

    def create_card_case(self, inside, mid, three, passing, steal, block):
        card_info = {
            "inside": inside,
            "mid": mid,
            "three": three,
            "passing": passing,
            "steal": steal,
            "block": block,
            "imgurl": "url"
        }

        card_inst = Card(card_info)
        errors, _, card = card_inst.return_res()

        if errors:
            # print(errors[0].message)
            return errors

        query = self.queries.insert_card()
        values = [(val) for val in card_info.values()]

        res = self.rq.run_query(query, values)
        print(res)

        return card_info


us = UseCases()

res = us.create_card_case(
    1, 1, 1, 1, 1, 0
)

print(res)
