from entity import Text


def create_text(text, account_id, chat_id):
    try:
        text(text, account_id, chat_id)
        return
    except Exception as e:
        print(e)


create_text()
