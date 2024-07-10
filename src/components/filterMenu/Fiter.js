import React, { useState } from "react";
import FilterMenu from "./FilterMenu";

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
      {displayFilterMenu && (
        <FilterMenu
          filterItems={filterItems}
          colors={colors}
          setDisplayFilterMenu={setDisplayFilterMenu}
          handleRemoveFilters={handleRemoveFilters}
          windowSize={windowSize}
        />
      )}
      {isMobileView ? (
        <>
          <button onClick={() => setDisplayFilterMenu(true)}>Filter</button>
          {displayFilterMenu && (
            <FilterMenu
              isMobileView={isMobileView}
              filterItems={filterItems}
              colors={colors}
              setDisplayFilterMenu={setDisplayFilterMenu}
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
            handleRemoveFilters={handleRemoveFilters}
          />
        </>
      )}
    </>
  );
}

export default Filter;
