import React from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { IoIosCloseCircleOutline } from "react-icons/io";

function CloseButton() {
  const { navigate } = useProducts();
  return (
    <button
      className="close-btn"
      onClick={() => navigate(-1, { replace: true })}
    >
      <IoIosCloseCircleOutline className="close-icon" />
    </button>
  );
}

export default CloseButton;
