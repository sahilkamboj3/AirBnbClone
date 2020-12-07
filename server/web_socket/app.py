from datetime import datetime as dt
import json
import asyncio
import websockets

# STATE = {
#     'num_users': 0
# }

ROOMS = {}


# def message():
#     return json.dumps({'timestamp': str(dt.now()), **STATE})


# async def notify_state():
#     if USERS:
#         data_to_send = message()
#         await asyncio.wait([user.send(data_to_send) for user in USERS])


# def increment_users():
#     STATE['num_users'] += 1


# def decrement_users():
#     cur_num_users = STATE['num_users']-1
#     STATE['num_users'] = max(0, cur_num_users)


async def register_conn(chat_name, conn):
    # USERS.add(conn)
    ROOMS[chat_name].add(conn)
    # increment_users()
    # await notify_state()


def handle_create_chat(chat_name):
    print(chat_name)
    chat = ROOMS.get(chat_name)
    if not chat:
        ROOMS[chat_name] = set()


def delete_chat(chat_name):
    del ROOMS[chat_name]
    print(f'delete chat {chat_name}')


async def unregister_conn(chat_name, conn):
    # USERS.remove(conn)

    USERS = ROOMS[chat_name]
    USERS.remove(conn)
    if len(USERS) == 0:
        delete_chat(chat_name)
        return
    # decrement_users()
    # await notify_state()


async def notify_msg(chat_name, conn, data):
    USERS = ROOMS.get(chat_name)
    if len(USERS) > 1:
        data = json.dumps(data)
        await asyncio.wait([user.send(data) for user in USERS if user != conn])


def gen_init_info():
    timestamp = str(dt.now())
    init_info = {
        'timestamp': timestamp,
        'message': 'you are now part of the chat'
    }
    return json.dumps(init_info)


async def chat(websocket, path: str):
    chat_name = path.replace('/', '')
    handle_create_chat(chat_name)
    await register_conn(chat_name, websocket)
    try:
        init_info = gen_init_info()
        await websocket.send(init_info)
        async for message in websocket:
            data = json.loads(message)
            await notify_msg(chat_name, websocket, data)
    finally:
        print(f'user disconnected from {path}')
        await unregister_conn(chat_name, websocket)

start_server = websockets.serve(chat, "localhost", 5000)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
