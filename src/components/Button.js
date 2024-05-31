import React from "react";

function Button({ buttonLabel, btnType }) {
  return <button className={btnType}>{buttonLabel}</button>;
}

export default Button;
