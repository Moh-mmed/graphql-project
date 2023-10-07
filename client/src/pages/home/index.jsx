import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      slug
      name
      description
    }
  }
`;

function HomePage() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="p-10">
      <h2 className="mb-10">My first Apollo App 🚀</h2>
      <div className="flex flex-wrap gap-4">
        {data.products.map((product) => (
          <div
            key={product.slug}
            className="w-1/5 p-4 border-sky-300 border border- rounded-lg bg-slate-300 shadow-sm"
          >
            <Link to={`/${product.slug}`}>
              <h2 className="text-gray-900 font-semibold text-lg italic">
                {product.name}
              </h2>
              <p>{product.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
