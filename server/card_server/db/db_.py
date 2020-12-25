import sys
from pathlib import Path

parent = Path(__file__).parents[1]
grandparent = Path(__file__).parents[2]

sys.path.append(parent)
sys.path.append(grandparent)

import psycopg2
from psycopg2 import errorcodes, ProgrammingError
# from util_types import ErrorType, DBResType
from gen_util.error_type import ErrorType


class DBResType:
    # def __init__(self, status, res, error):
    def __init__(self):
        # self.status = status
        # self.res = res
        # self.error = error
        self.status = None
        self.response = None
        self.error = None

class RunQuery:
    def __init__(self):
        pass

    def run_query(self, query, tuple_):
        conn = psycopg2.connect(
            "dbname=sports_trader_db user=sahilkamboj host=localhost password=lovebread3")
        res = DBResType()
        cur = conn.cursor()

        try:
            if tuple_:
                cur.execute(query, tuple_)
            else:
                cur.execute(query)

            response = cur.fetchall()
            conn.commit()
            cur.close()
            conn.close()

            res.response = response
            res.status = 200

        except psycopg2.errors.UniqueViolation as err:
            err = self.print_unique_error(err)
            conn = None

            res.error = err
            res.status = 400

        except ProgrammingError:
            err_type, err_val, traceback = sys.exc_info()
            conn = None
            print(err_val)

        except psycopg2.errors as err:
            err = self.print_other_error(err)
            conn = None
            res.error = err
            res.status = 400

        return res

    def print_unique_error(self, err):
        open_brace_idx, close_brace_idx = err.pgerror.index(
            "("), err.pgerror.index(")")

        field = 'Inputting to db'
        message = 'Attribute ' + \
            str(err.pgerror[open_brace_idx +
                            1: close_brace_idx]) + ' not unique.'
        err = ErrorType(field=field, message=message)

        return err

    def print_other_error(self, err):
        field = self.query
        message = errorcodes.lookup(err.pgcode)
        err = ErrorType(field=field, message=message)

        return err
