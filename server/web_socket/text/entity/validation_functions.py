from better_profanity import profanity


def valid_text(text):
    return not profanity.contains_profanity(text)
