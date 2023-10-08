import { MdAddShoppingCart } from 'react-icons/md'
import { Link } from "react-router-dom"

const ProductItem = ({ product }) => {
  

  return (
    <div className="w-full flex flex-col items-start">
      <Link to={`/${product.slug}`} className="w-full">
        <div className="block overflow-hidden relative h-96">
          <img
            src={product.image}
            alt="IMG-PRODUCT"
            sizes="(max-width: 640px) 100vw, 640px"
            style={{ objectFit: "cover" }}
            loading="lazy"
            className="transition-all duration-500 w-full h-full hover:scale-110"
          />
        </div>
      </Link>

      <div className="w-full flex items-start justify-center pt-4">
        <div className="w-full flex-col flex">
          <div className="text-sm text-slate-500 hover:text-blue-900 pb-1 transition-all duration-500">
            {product.name}
          </div>

          <div className="text-sm text-gray-700 flex items-baseline">
            <span>
              ${`${(product.price * (1 - product.discount / 100)).toFixed(2)}`}
            </span>
            {product.discount > 0 && (
              <>
                <span className="line-through text-red-400 text-xs mx-1">
                  ${product.price}
                </span>
                <span className="leading-[14px] text-[10px] px-1 rounded-xl text-white font-light bg-green-600">
                  -{product.discount}%
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ProductItem