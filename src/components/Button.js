import React from "react";

function Button({ buttonLabel, btnType, disabled }) {
  return (
    <button disabled={disabled} className={btnType}>
      {buttonLabel}
    </button>
  );
}

export default Button;
