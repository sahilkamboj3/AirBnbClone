class Queries:
    def __init__(self):
        pass

    def select_all(self):
        return 'SELECT * FROM card_db;'

    def select_one(self):
        return 'SELECT * FROM card_db WHERE card_id = %s;'

    def insert_card(self):
        return 'INSERT INTO card_db (account_id, inside, mid, three, passing, steal, block, imgurl, createdat, updatedat) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, NOW(), NOW()) RETURNING *;'
    
    def delete_card(self):
        return 'DELETE FROM card_db WHERE card_id = %s RETURNING *;'
    
