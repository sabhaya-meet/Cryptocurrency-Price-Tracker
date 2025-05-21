import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setOpen(true)} className="block md:hidden">
        <MenuRoundedIcon className="text-[var(--grey)]  font-bold hover:text-[var(--white)]" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="w-[40vw] bg-[var(--black)] h-[100vh] p-6 gap-3 flex flex-col">
          {" "}
          <a
            href="/"
            className="text-[var(--grey)] font-bold hover:text-[var(--white)]"
          >
            <p>Home</p>
          </a>
          <a
            href=""
            className="text-[var(--grey)] font-bold hover:text-[var(--white)] "
          >
            <p>Compare</p>
          </a>
          <a
            href=""
            className="text-[var(--grey)] font-bold hover:text-[var(--white)]"
          >
            <p>Watchlist</p>
          </a>
          <a
            href=""
            className="text-[var(--grey)] font-bold hover:text-[var(--white)]"
          >
            <p>Dashboard</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
