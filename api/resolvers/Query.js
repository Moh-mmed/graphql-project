import Product from '../models/Product.js'

export default {
  products: async(parent, args, contextValue) => {
    return await Product.find({});
  },
  product: async (parent, args, contextValue) => {
    return await Product.findOne({slug: args.slug});
  }
}
