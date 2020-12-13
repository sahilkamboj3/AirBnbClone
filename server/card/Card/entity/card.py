from types import CardRes, CardType, ErrorType
from util import Util

# handle image url
# try to figure out errors


class Card(Util):
    def __init__(self, info):
        self.info = info  # passed as a dictionary
        self.numerics = [
            "inside",
            "mid",
            "three",
            "passing",
            "steal",
            "block",
        ]

    def return_res(self):
        res = self.is_valid()
        if res.error:
            return res.error, None, None

        return None, self.info, self.create_card()

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
        res = CardRes()

        for numeric in self.numerics:
            if not self.validate_stat(self.info[numeric]):
                err = ErrorType(
                    field=str(numeric),
                    message=str(numeric) + ' not valid'
                )
                res.error = err

                return res

        res.info = self.info

        return res
