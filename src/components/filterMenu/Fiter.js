import React, { useState } from "react";
import FilterMenu from "./FilterMenu";
import Button from "../Button";

function Filter({
  colors,
  filterItems,
  handleRemoveFilters,
  isMobileView,
  windowSize,
}) {
  const [displayFilterMenu, setDisplayFilterMenu] = useState(false);

  return (
    <>
      {isMobileView ? (
        <>
          <Button
            btnType="secondary"
            buttonLabel="Filter"
            onClick={() => setDisplayFilterMenu(true)}
          />
          {displayFilterMenu && (
            <FilterMenu
              isMobileView={isMobileView}
              filterItems={filterItems}
              colors={colors}
              setDisplayFilterMenu={setDisplayFilterMenu}
              displayFilterMenu={displayFilterMenu}
              handleRemoveFilters={handleRemoveFilters}
              windowSize={windowSize}
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
            windowSize={windowSize}
          />
        </>
      )}
    </>
  );
}

export default Filter;
