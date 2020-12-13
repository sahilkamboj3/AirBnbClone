class Util:
    def __init__(self):
        pass

    def validate_stat(self, num):
        if num >= 0 and num <= 100:
            return True
        return False

    def is_null(self, attr):
        if not attr:
            return False
        return True
