import { useProducts } from "../../contexts/ProductsContext";
import { useParams } from "react-router-dom";

import Loading from "../Loading";
import Product from "./Product";
import { useEffect, useState } from "react";
import FilterMenu from "../filterMenu/FilterMenu";

function ProductList() {
  const { isLoading, products, getCurrentProduct } = useProducts();
  const params = useParams();
  const [filteredProducts, setFilteredProducts] = useState([products]);
  const [curr, setCurr] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.category === params.productCategory)
    );

    setCurr(products.flatMap((product) => product.options));
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

  console.log(curr);

  const cols = [
    ...new Set(
      products.flatMap((product) =>
        product.options.map((option) => option.color)
      )
    ),
  ];

  const handleColor = (color, productId = 0, index = 0) => {
    setIndex(index);
    setSelectedId(productId);
    setCurr(
      filteredProducts.flatMap((product) =>
        product.options.filter((option) => option.color === color)
      )
    );
    setIsFilter(false);
  };

  const filter = (color) => {
    setFilteredProducts(
      products.filter((product) =>
        product.options.some((option) => option.color === color)
      )
    );

    setCurr(
      products.flatMap((product) =>
        product.options.filter((option) => option.color === color)
      )
    );

    setIsFilter(true);
  };

  return (
    <section className="products-page">
      <div className="filter-container">
        <FilterMenu
          cols={cols}
          colors={colors}
          filterItems={filterItems}
          handleRemoveFilters={handleRemoveFilters}
          handleColor={handleColor}
          filter={filter}
        />
      </div>

      <ul className="product-list">
        {filteredProducts.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              handleColor={handleColor}
              isFilter={isFilter}
              selectedId={selectedId}
              curr={curr}
              // current={current}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ProductList;
