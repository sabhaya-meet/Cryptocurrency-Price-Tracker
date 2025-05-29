import React from "react";

const Coin = () => {
  return (
    <div key={i}>
      <img src={item.image} alt="" className="h-5 w-5" />
      <p>
        {i + 1}.{item.name}
      </p>
    </div>
  );
};

export default Coin;
