import boto3
import psycopg2
import sys


ENDPOINT = "sportstraderdb.cw4bay3sxpib.us-east-2.rds.amazonaws.com" 
PORT = "5432"
USER = "postgres"
REGION = "us-east-2b"
DBNAME = "sportstraderdb"
PASSWORD = "#Lovebread3"

# session = boto3.Session(profile_name="RDSCreds")
client = boto3.client("rds")

token = client.generate_db_auth_token(DBHostname=ENDPOINT, Port=PORT, DBUsername=USER, Region=REGION)

try:
    conn = psycopg2.connect(host=ENDPOINT, port=PORT, database=DBNAME, user=USER, password=PASSWORD)
    cur = conn.cursor()
    # cur.execute("""SELECT now()""")
    # cur.execute("""SELECT * FROM test;""")
    cur.execute("""CREATE TABLE test(id serial primary key, name varchar(55));""")
    conn.commit()
    cur.close()
    conn.close()
    # query_results = cur.fetchall()
    # print(query_results)
except Exception as e:
    print("Database connection failed due to {}".format(e)) 

# to connect through psql
# psql --host=sportstraderdb.cw4bay3sxpib.us-east-2.rds.amazonaws.com --port=5432 --username=postgres --password --dbname=sportstraderdb