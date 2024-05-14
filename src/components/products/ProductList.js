import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import Loading from "../Loading";
import Product from "./Product";
import { useParams } from "react-router-dom";

function ProductList() {
  const { isLoading, products, selectedProductCategory, dispatch } =
    useProducts();
  const params = useParams();

  useEffect(() => {
    dispatch({
      type: "select_product_category",
      payload: params.productCategory,
    });
  }, [dispatch, params.productCategory]);

  if (isLoading) {
    return <Loading />;
  }

  const selectedProducts = products.filter(
    (product) => product.category === selectedProductCategory
  );

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
