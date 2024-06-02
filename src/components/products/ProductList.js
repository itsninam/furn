import { useProducts } from "../../contexts/ProductsContext";
import { useParams } from "react-router-dom";

import Loading from "../Loading";
import Product from "./Product";
import { useEffect, useState } from "react";
import FilterMenu from "../filterMenu/FilterMenu";

function ProductList() {
  const { isLoading, products } = useProducts();
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

  const filterItems = (itemCategory, selectedItem) => {
    if (itemCategory === "colors") {
      setFilteredProducts(
        currentProducts.filter((item) =>
          item[`${itemCategory}`].includes(selectedItem)
        )
      );
    } else {
      setFilteredProducts(
        currentProducts.filter(
          (item) => item[`${itemCategory}`] === Boolean(selectedItem)
        )
      );
    }
  };

  const colors = [
    ...new Set(currentProducts.flatMap((product) => product.colors)),
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
      {filteredProducts.length === 0 && "No products found"}
      <ul className="product-list">
        {filteredProducts.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </ul>
    </section>
  );
}

export default ProductList;
