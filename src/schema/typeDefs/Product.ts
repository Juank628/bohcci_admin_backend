import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat, GraphQLInt } from 'graphql';

export const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    sale: { type: GraphQLFloat },
    price: { type: GraphQLFloat },
    stock: { type: GraphQLString },
    family: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
});
