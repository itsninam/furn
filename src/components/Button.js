import React from "react";

function Button({ buttonLabel, btnType, disabled, onClick }) {
  return (
    <button disabled={disabled} className={btnType} onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

export default Button;
