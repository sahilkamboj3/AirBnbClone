import boto3
import psycopg2

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

    # cur.execute("""CREATE TABLE account_db (id SERIAL, firstname varchar(50), lastname varchar(50), username varchar(50) UNIQUE, email varchar(70), number varchar(11), password varchar(50), createdAt timestamp without time zone, updatedAt timestamp without time zone);""")
    # query_results = cur.execute("""SELECT * FROM account_db;""")

    # CREATE TABLE card_db (card_id SERIAL PRIMARY KEY, inside int, mid int, three int, passing int, steal int, block int, imgurl varchar(100), account_id int, createdat timestamp without time zone, updatedat timestamp without time zone);

    query_results = cur.fetchall()
    print(query_results)

    conn.commit()
    cur.close()
    conn.close()
except Exception as e:
    print("Database connection failed due to {}".format(e)) 

# to connect through psql
# psql --host=sportstraderdb.cw4bay3sxpib.us-east-2.rds.amazonaws.com --port=5432 --username=postgres --password --dbname=sportstraderdb