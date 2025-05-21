import React from "react";

const Button = ({ text, onClick, outlined }) => {
  return (
    <button
      className={`py-[0.5rem] px-[1.5rem] rounded-4xl font-semibold cursor-pointer transition
        ${
          outlined
            ? "border-2 border-[var(--blue)] bg-[var(--black)] text-[var(--white)] hover:bg-[var(--blue)] hover:text-[var(--white)]"
            : "bg-[var(--blue)] text-[var(--white)] hover:shadow-[5px_5px_10px_rgba(58,128,233,0.5)]"
        }
      `}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export default Button;
