import "reflect-metadata";
import express from 'express';
import { UserResolver } from './Account/resolvers';
import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
// import cors from 'cors';

const main = async () => {
    const app = express();

    // app.use(cors({"origin": 'http://localhost:3000', credentials: true}));

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ UserResolver ],
            validate: false,
        }),
    })

    apolloServer.applyMiddleware({ app });

    app.get('/', function (_req, res) {
        res.send("home page")
    })

    app.listen(4000, () => console.log('listening on port 4000'));
}

main().catch(err => console.log(err));