import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-[100vh] h-[100vh] bg-[var(--black)] text-[var(--blue)]">
      <CircularProgress />
    </div>
  );
};

export default Loader;
