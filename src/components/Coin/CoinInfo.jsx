import React, { useState } from "react";

const CoinInfo = ({ heading, desc }) => {
  const shortDesc =
    desc?.slice(0, 350) + "<span style='color:var(--blue)'>Read More...</span>";
  const longDesc = desc + "<span style='color:var(--blue)'>Read Less...</span>";

  const [flag, setFlag] = useState(false);

  return (
    <div className="bg-[var(--darkgrey)] mx-auto my-[1.5rem] p-[1rem] rounded-2xl w-[90%] block">
      <h2 className="mb-2">{heading}</h2>
      {desc ? (
        <p
          onClick={() => setFlag(!flag)}
          className="cursor-pointer coin-info-desc"
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
        />
      ) : (
        "not descripation"
      )}
    </div>
  );
};

export default CoinInfo;
