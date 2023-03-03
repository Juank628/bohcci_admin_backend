import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GREETING } from "./queries/greeting";

const RooQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GREETING
    }
})

export const schema = new GraphQLSchema({
    query: RooQuery,
})
