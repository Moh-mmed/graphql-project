// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = 
`#graphql
  # type User{
  #   name: String!
  #   email: String!
  #   password: String!
  #   isAdmin: Boolean
  # }
  type Product{
    name: String!
    slug: String
    category: String!
    gender: String!
    image: String!
    price: Float!
    discount: Int!
    brand: String!
    rating: Float!
    numReviews: Int!
    countInStock: Int!
    description: String!
    isFeatured: Boolean
    banner: String
  }

  type Query {
    products: [Product]   
    product(slug:String!): Product
  }
`;

export default typeDefs