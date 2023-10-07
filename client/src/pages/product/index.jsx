import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_PRODUCT = gql`
  query GetProduct($slug: String!) {
    product(slug: $slug) {
      slug
      name
      description
    }
  }
`;
const ProductPage = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug },
  });
  console.log(slug);
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error : {error.message}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="mb-5">Product page</h1>
      <div className="p-4 border-sky-100 border border- rounded-lg bg-slate-200 shadow-sm">
        <h2 className="text-gray-900 font-semibold text-lg italic">
          {data.product.name}
        </h2>
        <p>{data.product.description}</p>
      </div>
    </div>
  );
};
export default ProductPage