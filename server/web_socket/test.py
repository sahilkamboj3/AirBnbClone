def re():
    raise Exception('hi')


def test():
    try:
        a = re()
        print(a)
    except Exception as e:
        print(e)
        return e


test()
