import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";

const SearchComponent = ({ searchText, onSearchChange }) => {
  return (
    <div className="flex justify-start items-center gap-2 py-3 px-6 text-[var(--grey)] bg-[var(--darkgrey)] w-[80%] ml-auto mr-auto m-4 rounded-3xl">
      <SearchRoundedIcon />
      <input
        type="text"
        placeholder="Search..."
        className="w-[100%] bg-[var(--darkgrey)] outline-none text-sm text-[var(--grey)]"
        onChange={(e) => onSearchChange(e)}
        value={searchText}
      />
    </div>
  );
};

export default SearchComponent;
