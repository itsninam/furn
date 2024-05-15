import React, { useEffect, useMemo } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { useParams } from "react-router-dom";

import Loading from "../Loading";
import Product from "./Product";

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

  const selectedProducts = useMemo(() => {
    return products.filter(
      (product) => product.category === selectedProductCategory
    );
  }, [products, selectedProductCategory]);

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
