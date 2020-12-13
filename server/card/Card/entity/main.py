from card import Card

info = {
    "inside": 1,
    "mid": 1,
    "three": 1,
    "passing": -1,
    "steal": 1,
    "block": 1
}
card1 = Card(info=info)
error, info, card1 = card1.return_res()
if error:
    print(error.field)
    print(error.message)
else:
    print(card1.mid)
