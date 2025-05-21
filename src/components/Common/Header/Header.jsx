import React from "react";
import AnchorTemporaryDrawer from "./Drawer";
import Button from "../Button";

const Header = () => {
  return (
    <div className="flex bg-black justify-end md:justify-between items-center py-[1.5rem] px-[3rem] z-[100] sticky top-0">
      {/* Desktop nav: hidden on small screens, visible md and up */}
      <div className="hidden flex-1 md:flex bg-black justify-between items-center">
        <h1>
          CryptoTracker<span className="text-[var(--blue)]">.</span>
        </h1>
        <div className="flex justify-end items-center gap-5">
          <a
            href="#"
            className="text-[var(--grey)] font-bold hover:text-[var(--white)]"
          >
            <p>Home</p>
          </a>
          <a
            href="#"
            className="text-[var(--grey)] font-bold hover:text-[var(--white)] "
          >
            <p>Compare</p>
          </a>
          <a
            href="#"
            className="text-[var(--grey)] font-bold hover:text-[var(--white)]"
          >
            <p>Watchlist</p>
          </a>
          <a
            href="#"
            className="text-[var(--grey)] font-bold hover:text-[var(--white)]"
          >
            <Button
              text="Dashboard"
              outlined={true}
              onClick={() => console.log("mettttttttttt")}
            />
          </a>
        </div>
      </div>

      {/* Mobile nav: visible only below md */}
      <div className="block md:hidden">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
