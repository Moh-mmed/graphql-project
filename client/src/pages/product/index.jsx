import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GiRoundStar } from "react-icons/gi";

const GET_PRODUCT = gql`
  query GetProduct($slug: String!) {
    product(slug: $slug) {
      slug
      name
      image
      description
      price
      discount
      numReviews
      rating
      countInStock
      brand
    }
  }
`;
const ProductPage = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {return <p>Error : {error.message}</p>}

  const {
    name,
    image,
    description,
    price,
    discount,
    numReviews,
    rating,
    countInStock,
    brand
  } = data.product; 
  
  return (
    <section className="px-10 py-5 max-sm:px-4">
      <div className="py-4 flex justify-between items-center">
        <Link to="/" className="text-gray-500 hover:text-gray-700">
          &lt; Back to Shop
        </Link>
      </div>
      <div className="flex flex-wrap my-8">
        <div className="flex w-full md:w-[50%] md:mr-[5%] mb-10">
          <img src={image} alt={name} width={800} height={100} />
        </div>
        <div className="w-full md:w-[45%]">
          <div className="text-sm">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {name}
              <span className="text-gray-700 mb-4 text-base font-normal">
                | {brand}
              </span>
            </h1>
            <h3 className="flex items-baseline text-2xl font-medium text-gray-800 mb-2">
              <span>${`${(price * (1 - discount / 100)).toFixed(2)}`}</span>
              {discount > 0 && (
                <>
                  <span className="text-[#ccc] mx-1 text-base">|</span>
                  <span className="line-through text-base mr-1 text-red-500">
                    ${price}
                  </span>
                  <span className="leading-3 text-[10px] px-2 py-1 rounded-xl text-white font-light bg-green-600">
                    discount {discount}%
                  </span>
                </>
              )}
            </h3>
            <p className="text-gray-500 mb-4">{description}</p>
            <p className="text-gray-700 mb-2 h-6 flex items-center">
              <GiRoundStar className="h-6 mr-1 -mt-1" />
              <span>
                {rating}/{numReviews}
              </span>
            </p>
            <div
              className={`inline-block text-xs px-2 py-1 rounded-xl text-white font-light ${
                countInStock > 0 ? "bg-green-600" : "bg-[#ff3131]"
              }`}
            >
              {countInStock > 0 ? "Available" : "Out of Stock"}
            </div>
          </div>
        </div>
      </div>
      <div className="border mt-8 p-10 border-solid border-[#e6e6e6]">
        <p className="text-[#666] font-light text-sm">{description}</p>
      </div>
    </section>
  );
};
export default ProductPage