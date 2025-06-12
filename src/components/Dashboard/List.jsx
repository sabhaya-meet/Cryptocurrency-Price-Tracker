import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const List = ({ coin }) => {
  const isPositive = coin?.price_change_percentage_24h >= 0;
  const navigate = useNavigate();
  return (
    // <Link to={`/coin/${coin?.id}`}>
    <tr
      onClick={() => navigate(`/coin/${coin?.id}`)}
      className="hover:bg-[var(--darkgrey)] hover:rounded-2xl cursor-pointer transition-all flex justify-between items-center"
    >
      {/* Coin Info */}
      <td className="px-3 py-4 w-[35%] md:w-[18%]">
        <div className="flex items-center gap-3">
          <Tooltip title="Coin Logo">
            <img
              src={coin?.image}
              alt={coin?.name}
              className="h-10 w-10 sm:h-14 sm:w-14"
            />
          </Tooltip>
          <Tooltip title="Coin Info">
            <div className="flex flex-col">
              <p className="text-[var(--white)] uppercase font-semibold text-sm sm:text-base m-0">
                {coin?.symbol}
              </p>
              <p className="text-[var(--grey)] capitalize font-light text-xs sm:text-sm m-0">
                {coin?.name}
              </p>
            </div>
          </Tooltip>
        </div>
      </td>

      {/* Price Change */}
      <td className="px-3 py-4 w-[30%] md:w-[18%]">
        <div className="flex items-center gap-3">
          <div
            className={`border rounded-2xl py-0.5 px-3 text-center font-medium text-sm min-w-[64px] ${
              isPositive
                ? "text-[var(--green)] border-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--white)]"
                : "text-[var(--red)] border-[var(--red)] hover:bg-[var(--red)] hover:text-[var(--white)]"
            }`}
          >
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </div>
          <div
            className={`border rounded-full h-8 w-8 justify-center items-center text-base hidden lg:flex ${
              isPositive
                ? "text-[var(--green)] border-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--white)]"
                : "text-[var(--red)] border-[var(--red)] hover:bg-[var(--red)] hover:text-[var(--white)]"
            }`}
          >
            {isPositive ? (
              <TrendingUpRoundedIcon className="w-5 h-5" />
            ) : (
              <TrendingDownRoundedIcon className="w-5 h-5" />
            )}
          </div>
        </div>
      </td>

      {/* Current Price */}
      <td className="px-3 py-4 w-[35%] md:w-[18%] text-center">
        <Tooltip title="Current Price">
          <h3
            className="text-base sm:text-lg font-semibold"
            style={{
              color: isPositive ? "var(--green)" : "var(--red)",
            }}
          >
            ${coin?.current_price?.toLocaleString()}
          </h3>
        </Tooltip>
      </td>

      {/* Total Volume */}
      <td className="px-3 py-4 w-[50%] md:w-[18%]">
        <Tooltip title="Total Volume">
          <p className="text-[var(--grey)] text-xs sm:text-sm font-medium text-right">
            {coin?.total_volume?.toLocaleString()}
          </p>
        </Tooltip>
      </td>

      {/* Market Cap */}
      <td className="px-3 py-4 w-[50%] md:w-[18%]">
        <Tooltip title="Market Cap">
          <p className="text-[var(--grey)] text-xs sm:text-sm font-medium text-right">
            {coin?.market_cap?.toLocaleString()}
          </p>
        </Tooltip>
      </td>
    </tr>
    // </Link>
  );
};

export default List;
