import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GREETING } from "./queries/greeting";
import { CREATE_PRODUCT } from "./mutations/Product";

const RooQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GREETING
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createProduct: CREATE_PRODUCT
    },
})

export const schema = new GraphQLSchema({
    query: RooQuery,
    mutation: Mutation,
})
