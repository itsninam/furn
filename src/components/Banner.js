import React from "react";

function Banner() {
  return (
    <div className="banner">
      <div className="left-content">
        <p>Flash Sale</p>
      </div>
      <p>Get 20% off</p>
      <div className="right-container">
        <p>
          Redeem code:{" "}
          <span
            onClick={() => {
              navigator.clipboard.writeText("LoremIpsum");
            }}
          >
            LoremIpsum
          </span>
        </p>
      </div>
    </div>
  );
}

export default Banner;
