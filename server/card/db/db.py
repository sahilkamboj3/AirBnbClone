import psycopg2
from db_res_type import DBResType


def run_query(query):
    conn = psycopg2.connect(
        "dbname=sports_trader_db user=sahilkamboj host=localhost password=lovebread3")

    cur = conn.cursor()

    cur.execute(query)
    all = cur.fetchall()
    conn.commit()

    cur.close()
    conn.close()
