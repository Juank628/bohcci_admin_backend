import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';


export const app = express();

dotenv.config()
const corsOptions = {
    origin: process.env.CORS_URL,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))
