import React, { useState } from "react";
import FilterMenu from "./FilterMenu";
import Button from "../Button";

function Filter({ colors, filterItems, handleRemoveFilters, isMobileView }) {
  const [displayFilterMenu, setDisplayFilterMenu] = useState(false);

  const openFilterMenu = () => {
    setDisplayFilterMenu(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {isMobileView ? (
        <>
          <Button
            btnType="secondary"
            buttonLabel="Filter"
            onClick={() => openFilterMenu()}
          />
          {displayFilterMenu && (
            <FilterMenu
              isMobileView={isMobileView}
              filterItems={filterItems}
              colors={colors}
              setDisplayFilterMenu={setDisplayFilterMenu}
              displayFilterMenu={displayFilterMenu}
              handleRemoveFilters={handleRemoveFilters}
            />
          )}
        </>
      ) : (
        <>
          <FilterMenu
            isMobileView={isMobileView}
            filterItems={filterItems}
            colors={colors}
            setDisplayFilterMenu={setDisplayFilterMenu}
            displayFilterMenu={displayFilterMenu}
            handleRemoveFilters={handleRemoveFilters}
          />
        </>
      )}
    </>
  );
}

export default Filter;
