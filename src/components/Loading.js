import React from "react";
import { Oval } from "react-loader-spinner";

function Loading() {
  return (
    <div className="loading-spinner-container">
      <Oval
        visible={true}
        height="48"
        width="48"
        color="#167a92"
        secondaryColor="#e2ddd6"
        ariaLabel="oval-loading"
        strokeWidth="4"
        strokeWidthSecondary="4"
      />
    </div>
  );
}

export default Loading;
