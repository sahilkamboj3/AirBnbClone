from datetime import datetime as dt
import json
import asyncio
import websockets

STATE = {
    'num_users': 0
}

USERS = set()


def message():
    return json.dumps({'timestamp': str(dt.now()), **STATE})


async def notify_state():
    if USERS:
        data_to_send = message()
        await asyncio.wait([user.send(data_to_send) for user in USERS])


def increment_users():
    STATE['num_users'] += 1


def decrement_users():
    cur_num_users = STATE['num_users']-1
    STATE['num_users'] = max(0, cur_num_users)


async def register_conn(conn):
    USERS.add(conn)
    increment_users()
    await notify_state()


async def unregister_conn(conn):
    USERS.remove(conn)
    decrement_users()
    await notify_state()


async def notify_msg(conn, data):
    if USERS:
        data = json.dumps(data)
        await asyncio.wait([user.send(data) for user in USERS if user != conn])


def gen_init_info():
    timestamp = str(dt.now())
    init_info = {
        'timestamp': timestamp,
        'message': 'you are now part of the chat'
    }
    return json.dumps(init_info)


async def chat(websocket, path):
    await register_conn(websocket)
    try:
        init_info = gen_init_info()
        await websocket.send(init_info)
        async for message in websocket:
            data = json.loads(message)
            await notify_msg(websocket, data)
    finally:
        print('user disconnected')
        await unregister_conn(websocket)

start_server = websockets.serve(chat, "localhost", 5000)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
