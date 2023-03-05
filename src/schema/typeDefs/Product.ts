import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

export const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    sale: { type: GraphQLString },
    price: { type: GraphQLString },
    stock: { type: GraphQLString },
    family: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
});
