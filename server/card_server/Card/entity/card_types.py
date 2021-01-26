class IsValidRes:
    def __init__(self):
        self.errors = None
        self.info = None

class CardRes:
    def __init__(self, errors=None, info=None, card=None):
        self.errors = errors
        self.info = info
        self.card = card

class CardType:
    def __init__(self, account_id, inside, mid, three, passing, steal, block, img_url=None):
    # def __init__(self, account_id, inside, mid, three, passing, steal, block, img_url=None):
        self.account_id = account_id
        self.inside = inside
        self.mid = mid
        self.three = three
        self.passing = passing
        self.steal = steal
        self.block = block
        self.img_url = img_url


