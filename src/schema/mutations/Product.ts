import { GraphQLString, GraphQLFloat } from 'graphql';
import { Products } from '../../Entities/Products';
import { ProductType } from '../typeDefs/Product';

export const CREATE_PRODUCT = {
  type: ProductType,
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    sale: { type: GraphQLFloat },
    price: { type: GraphQLFloat },
    stock: { type: GraphQLString },
    family: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    const { name, description, sale, price, stock, family } = args;
    const result = await Products.insert({
      name,
      description,
      sale,
      price,
      stock,
      family,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log(result);
    return {...args, id: result.identifiers[0].id};
  },
};
