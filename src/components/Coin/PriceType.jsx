import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

export default function TogglePriceType({ priceType, handlePriceTypeChange }) {
  return (
    <div className="flex justify-end items-center m-4 sm:p-2">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid",
            borderColor: "var(--blue)",
            color: "var(--blue)",
          },
          "& .MuiToggleButton-root": {
            color: "var(--blue)",
            borderColor: "var(--blue)",
          },
          "& .MuiToggleButton-root.Mui-selected": {
            color: "var(--green)",
            borderColor: "var(--green)",
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-btn">
          Price
        </ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn">
          Market Cap
        </ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-btn">
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
