import sys
import psycopg2
from psycopg2 import errorcodes, ProgrammingError


def print_error(err):
    _, _, traceback = sys.exc_info()  # err_type, err_obj, traceback
    open_brace_idx, close_brace_idx = err.pgerror.index(
        "("), err.pgerror.index(")")
    line_num = traceback.tb_lineno

    print(line_num)
    print(errorcodes.lookup(err.pgcode))
    print(err.pgerror[open_brace_idx + 1: close_brace_idx])


conn = psycopg2.connect(
    "dbname=sports_trader_db user=sahilkamboj host=localhost password=lovebread3")
cur = conn.cursor()

try:
    dic = {
        1: 'Bob',
        2: 'Hope',
        3: 'hope',
        4: 'hp',
        5: 'hp',
        6: 'hp',
    }
    info = [(val) for val in dic.values()]
    res = cur.execute("INSERT INTO account (firstname, lastname, username, email, number, password, createdat, updatedat) VALUES (%s, %s, %s, %s, %s, %s, NOW(), NOW()) RETURNING *;", info)
    all = cur.fetchall()
    conn.commit()
    cur.close()
    conn.close()

except psycopg2.errors.UniqueViolation as err:
    print_error(err)
    conn = None

except ProgrammingError:
    err_type, err_val, traceback = sys.exc_info()
    print(err_val)
