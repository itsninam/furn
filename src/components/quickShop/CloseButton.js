import React from "react";
import { useProducts } from "../../contexts/ProductsContext";

function CloseButton() {
  const { navigate } = useProducts();
  return (
    <button
      className="close-btn"
      onClick={() => navigate(-1, { replace: true })}
    >
      CLose
    </button>
  );
}

export default CloseButton;
