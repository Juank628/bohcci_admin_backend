import { GraphQLString, GraphQLFloat, GraphQLInputType } from 'graphql';
import { Products } from '../../Entities/Products';

export const CREATE_PRODUCT = {
  type: GraphQLString,
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    sale: { type: GraphQLFloat },
    price: { type: GraphQLFloat },
    stock: { type: GraphQLString },
    family: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    const { name, description, sale, price, stock, family, createdAt, updatedAt } = args;
    const result = await Products.insert({
      name,
      description,
      sale,
      price,
      stock,
      family,
      createdAt,
      updatedAt,
    });
    console.log(result);
    return 'product created';
  },
};
