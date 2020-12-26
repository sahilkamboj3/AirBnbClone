import sys
from pathlib import Path

parent = Path(__file__).parents[1]
grandparent = Path(__file__).parents[2]
sys.path.append(str(grandparent))
sys.path.append(str(parent))

from .card_types import IsValidRes, CardType, CardRes
from .card_util import Util

from gen_util.error_type import ErrorType
# handle image url and account foreign key 


class Card(Util):
    def __init__(self, info):
        self.info = info  # info is a dictionary
        self.numerics = [
            "inside",
            "mid",
            "three",
            "passing",
            "steal",
            "block",
        ]

    def return_res(self):
        is_valid_res = self.is_valid()
        if is_valid_res.errors:
            return CardRes(is_valid_res.errors, None, None)

        return CardRes(None, info=self.info, card=self.create_card())

    def create_card(self):
        card = CardType(
            inside=self.info['inside'],
            mid=self.info['mid'],
            three=self.info['three'],
            passing=self.info['passing'],
            steal=self.info['steal'],
            block=self.info['block']
        )

        return card

    def is_valid(self):
        res = IsValidRes()
        errors = []

        for numeric in self.numerics:
            if not self.validate_stat(self.info[numeric]):  # self.validate_stat() from parent Util class 
                if self.info[numeric] > 100:
                    problem = ' too high'
                else:
                    problem = ' too low'

                err = ErrorType(
                    field=str(numeric),
                    message=str(numeric) + problem
                )
                errors.append(err)

        if len(errors) > 0:
            res.errors = errors
        else:
            res.info = self.info

        return res
