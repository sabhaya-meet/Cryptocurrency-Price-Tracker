import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
const Grid = ({ coin }) => {
  return (
    <div
      className={`w-[300px]  bg-[var(--darkgray)] border-2 border-[var(--darkgray)] hover:border hover:border-[var(--green)] hover:duration-300 ease-out  rounded-[0.75rem] hover:${
        coin?.price_change_percentage_24h < 0 &&
        "hover:border hover:border-[var(--red)] hover:duration-300 ease-out"
      }`}
    >
      <div className="flex justify-start items-center gap-4 my-[1rem] mx-[1.5rem]">
        <img src={coin.image} alt="" className="h-14 w-14" />
        <div className="flex flex-col gap-2">
          <p className="text-[var(--white)] uppercase font-semibold text-lg m-0">
            {coin.symbol}
          </p>
          <p className="text-[var(--grey)] capitalize font-light  text-sm m-0">
            {coin.name}
          </p>
        </div>
      </div>
      {coin?.price_change_percentage_24h > 0 ? (
        <div className="flex justify-start gap-4 items-center my-4 mx-6">
          <div className="border border-[var(--green)]  text-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--white)]  rounded-2xl py-0.5 px-5 text-center font-medium text-base ">
            {coin?.price_change_percentage_24h.toFixed(2)}%
          </div>

          <div className="border border-[var(--green)]  text-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--white)]  rounded-[50%] h-8 w-8 flex justify-center items-center text-base ">
            <TrendingUpRoundedIcon />
          </div>
        </div>
      ) : (
        <div className="flex justify-start gap-4 items-center my-4 mx-6">
          <div className="border border-[var(--red)]  text-[var(--red)] hover:bg-[var(--red)] hover:text-[var(--white)]  rounded-2xl py-0.5 px-5 text-center font-medium text-base ">
            {coin?.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="border border-[var(--red)]  text-[var(--red)] hover:bg-[var(--red)] hover:text-[var(--white)]  rounded-[50%] h-8 w-8 flex justify-center items-center text-base ">
            <TrendingDownRoundedIcon />
          </div>
        </div>
      )}
      <div className="m-6">
        <h3
          className="text-[var(--green)] text-2xl font-semibold"
          style={{
            color:
              coin?.price_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          ${coin?.current_price.toLocaleString()}
        </h3>
        <p className="text-[var(--grey)] text-[0.8rem] font-medium">
          Total Volume:{coin.total_volume.toLocaleString()}
        </p>
        <p className="text-[var(--grey)] text-[1rem] font-medium">
          Market Cap:{coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Grid;
