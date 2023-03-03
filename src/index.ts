import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';
import { connectDB } from './db';

const app = express();

connectDB()

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}))

app.listen(3000)
