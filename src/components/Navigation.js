import React from "react";
import Header from "./Header";
import TotalCartItems from "./products/TotalCartItems";

function Navigation() {
  return (
    <nav>
      <div className="wrapper">
        <Header />
        <TotalCartItems />
      </div>
    </nav>
  );
}

export default Navigation;
