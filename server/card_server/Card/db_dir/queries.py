class Queries:
    def __init__(self):
        pass

    def select_all(self):
        return 'SELECT * FROM card_db;'

    def insert_card(self):
        return 'INSERT INTO card_db (inside, mid, three, passing, steal, block, imgurl, createdat, updatedat) VALUES (%s, %s, %s, %s, %s, %s, %s, NOW(), NOW()) RETURNING *;'
