import React, { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductsContext";

function Banner() {
  const { promoCode, dispatch, isPromoCodeCopied } = useProducts();
  const [flashSale, setFlashSale] = useState(false);

  const handleCopyPromoCode = () => {
    navigator.clipboard.writeText(promoCode);
    dispatch({ type: "copy_promo" });

    setTimeout(() => {
      dispatch({ type: "reset_promo" });
    }, 1000);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlashSale(!flashSale);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [flashSale]);

  return (
    <div className="banner">
      <div className="left-content">
        <p className="flash-sale">
          {!flashSale ? (
            "Summer Flash Sale!"
          ) : (
            <span className="discount">Get 20% off</span>
          )}
        </p>
      </div>
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
