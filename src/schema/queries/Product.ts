import { GraphQLList } from "graphql";
import { Products } from "../../Entities/Products";
import { ProductType } from "../typeDefs/Product";

export const GET_ALL_PRODUCTS = {
    type: new GraphQLList(ProductType),
    resolve: async() => {
        const result = await Products.find();
        return result
    }
}