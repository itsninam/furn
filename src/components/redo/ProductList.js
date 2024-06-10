import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import Product from "./Product";

function ProductList() {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const colors = [
    ...new Set(
      products.flatMap((product) =>
        product.options.map((option) => option.color)
      )
    ),
  ];

  const filterItems = (color) => {
    const filtered = products
      .map((product) => {
        const filteredOptions = product.options.filter(
          (option) => option.color === color
        );
        if (filteredOptions.length > 0) {
          return { ...product, options: filteredOptions };
        }
        return null;
      })
      .filter((product) => product !== null);
    setFilteredProducts(filtered);
    setIsFilter(true);
  };

  return (
    <div>
      {colors.map((color) => {
        return (
          <p key={color} onClick={() => filterItems(color)}>
            {color}
          </p>
        );
      })}

      {filteredProducts.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            isFilter={isFilter}
            setIsFilter={setIsFilter}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
