import React from "react";
import { useProducts } from "../contexts/ProductsContext";

function Banner() {
  const { promoCode, dispatch, isPromoCodeCopied } = useProducts();

  const handleCopyPromoCode = () => {
    navigator.clipboard.writeText(promoCode);
    dispatch({ type: "copy_promo" });

    setTimeout(() => {
      dispatch({ type: "reset_promo" });
    }, 1000);
  };
  return (
    <div className="banner">
      <div className="left-content">
        <p>Flash Sale</p>
      </div>
      <p>Get 20% off</p>
      <div className="right-container">
        <p>
          Redeem code:{" "}
          <span onClick={handleCopyPromoCode}>
            {isPromoCodeCopied ? "Copied!" : promoCode}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Banner;
