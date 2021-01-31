import sys
from pathlib import Path

parent = Path(__file__).parents[1]
grandparent = Path(__file__).parents[2]
sys.path.append(str(parent))
sys.path.append(str(grandparent))

from entity.card import Card
from db_dir.queries import Queries
from db.db_ import RunQuery
from .s3 import S3Class
import os


class UseCases:
    def __init__(self):
        self.queries = Queries()
        self.rq = RunQuery()
        self.s3_class = S3Class(bucket_name='sports-trader-card-images')

    def create_card_case(self, account_id, inside, mid, three, passing, steal, block, filename):
        REGION = 'us-east-2'
        url = f'https://sports-trader-card-images.s3.{REGION}.amazonaws.com/{filename}'

        self.s3_class.upload_img(filename)

        card_info = {
            "account_id": account_id,
            "inside": inside,
            "mid": mid,
            "three": three,
            "passing": passing,
            "steal": steal,
            "block": block,
            "img_url": url
        }

        card_inst = Card(card_info)
        card_res = card_inst.return_res()

        if card_res.errors:
            return card_res

        query = self.queries.insert_card()
        values = [(val) for val in card_info.values()]
        res = self.rq.run_query(query=query, tuple_=values)

        os.remove(os.path.dirname(__file__) + '/../../media/' + filename)

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

        url = res.response[0][7]
        filename_idx = url.rfind('/')
        filename = url[filename_idx + 1:]

        self.s3_class.delete_img(filename)

        return res

