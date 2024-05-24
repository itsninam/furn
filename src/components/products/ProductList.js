import { useProducts } from "../../contexts/ProductsContext";
import { useParams } from "react-router-dom";

import Loading from "../Loading";
import Product from "./Product";

function ProductList() {
  const { isLoading, products } = useProducts();
  const params = useParams();

  const selectedProducts = products.filter(
    (product) => product.category === params.productCategory
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <ul>
        {selectedProducts.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </ul>
    </section>
  );
}

export default ProductList;
