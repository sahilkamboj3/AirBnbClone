class CardRes:
    def __init__(self):
        self.error = None
        self.info = None


class CardType:
    def __init__(self, inside, mid, three, passing, steal, block, img_url=None):
        self.inside = inside
        self.mid = mid
        self.three = three
        self.passing = passing
        self.steal = steal
        self.block = block
        self.img_url = img_url


class ErrorType:
    def __init__(self, field=None, message=None):
        self.field = field
        self.message = message
