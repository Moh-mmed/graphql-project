import { useQuery, gql } from "@apollo/client";
import ProductItem from "../../components/ProductItem";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      slug
      name
      description
      image
      price
      discount
    }
  }
`;

function HomePage() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="mt-6 px-10 pb-16 max-sm:px-4">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-12">
        {data.products.length > 0 ? (
          data.products.map((product) => {
            return <ProductItem product={product} key={product.slug} />;
          })
        ) : (
          <div className="p-2 capitalize text-center">no product found</div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
