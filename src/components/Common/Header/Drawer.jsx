import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setOpen(true)} className="block md:hidden">
        <MenuRoundedIcon className="text-[var(--grey)]  font-bold hover:text-[var(--white)]" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="w-[40vw] bg-[var(--black)] h-[100vh] p-6 gap-3 flex flex-col">
          <Link
            to="/"
            className="text-[var(--grey)] font-bold hover:text-[var(--white)]"
          >
            <p>Home</p>
          </Link>
          <Link
            to="/compare"
            className="text-[var(--grey)] font-bold hover:text-[var(--white)] "
          >
            <p>Compare</p>
          </Link>
          <Link
            to="/watchlist"
            className="text-[var(--grey)] font-bold hover:text-[var(--white)]"
          >
            <p>Watchlist</p>
          </Link>
          <Link
            to="/dashboard"
            className="text-[var(--grey)] font-bold hover:text-[var(--white)]"
          >
            <p>Dashboard</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
