import { useProducts } from "../../contexts/ProductsContext";
import { useParams } from "react-router-dom";

import Loading from "../Loading";
import Product from "./Product";
import { useEffect, useState } from "react";
import FilterMenu from "../filterMenu/FilterMenu";

function ProductList() {
  const { isLoading, products, setIsProductFiltered } = useProducts();
  const params = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.category === params.productCategory)
    );
  }, [products, params.productCategory]);

  const currentProducts = products.filter(
    (product) => product.category === params.productCategory
  );

  const filterItems = (color) => {
    const filtered = currentProducts
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
    setIsProductFiltered(true);
  };

  const colors = [
    ...new Set(
      currentProducts.flatMap((product) =>
        product.options.map((option) => option.color)
      )
    ),
  ];

  const handleRemoveFilters = () => {
    setFilteredProducts(currentProducts);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="products-page">
      <div className="filter-container">
        <FilterMenu
          colors={colors}
          filterItems={filterItems}
          handleRemoveFilters={handleRemoveFilters}
        />
      </div>
      <ul className="product-list">
        {filteredProducts.length === 0
          ? "No products found"
          : filteredProducts.map((product) => {
              return (
                <Product
                  product={product}
                  key={product.id}
                  currentProducts={currentProducts}
                />
              );
            })}
      </ul>
    </section>
  );
}

export default ProductList;
