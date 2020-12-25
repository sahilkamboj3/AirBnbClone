class DBResType:
    # def __init__(self, status, res, error):
    def __init__(self):
        # self.status = status
        # self.res = res
        # self.error = error
        self.status = None
        self.response = None
        self.error = None


class ErrorType:
    def __init__(self, field, message):
        self.field = None
        self.message = None
