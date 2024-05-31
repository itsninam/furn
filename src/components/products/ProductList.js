import { useProducts } from "../../contexts/ProductsContext";
import { useParams } from "react-router-dom";

import Loading from "../Loading";
import Product from "./Product";
import { useEffect, useState } from "react";

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

  if (isLoading) {
    return <Loading />;
  }

  const filterColor = (itemCategory, selectedItem) => {
    setFilteredProducts(
      currentProducts.filter((item) =>
        item[`${itemCategory}`].includes(selectedItem)
      )
    );
  };

  const filterPrice = (itemCategory, selectedItem) => {
    setFilteredProducts(
      currentProducts.filter((item) => item[`${itemCategory}`] === selectedItem)
    );
  };

  const colors = [
    ...new Set(currentProducts.flatMap((product) => product.colors)),
  ];

  return (
    <section className="products-page">
      <div className="filter-container">
        <p>Filter</p>
        <button onClick={() => setFilteredProducts(currentProducts)}>
          Remove filters
        </button>
        <ul>
          <li>
            <span>Colors</span>
            <ul>
              {colors.map((color) => {
                return (
                  <li key={color} onClick={() => filterColor("colors", color)}>
                    {color}
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <span>Sale</span>
            <ul>
              <li onClick={() => filterPrice("saleItem", true)}>Under 500</li>
              <li>Limited time</li>
            </ul>
          </li>
        </ul>
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
