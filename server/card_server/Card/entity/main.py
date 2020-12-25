from card import Card

info = {
    "inside": 1,
    "mid": 1,
    "three": 1,
    "passing": 1,
    "steal": 1,
    "block": 1
}
print('hello')
card1 = Card(info=info)
errors, info, card1 = card1.return_res()

if errors:
    count = 1
    for error in errors:
        print('Error ' + str(count) + ': ' +
              error.field + ', ' + error.message)
        count += 1
else:
    print(card1.mid)
    print(card1.img_url)


