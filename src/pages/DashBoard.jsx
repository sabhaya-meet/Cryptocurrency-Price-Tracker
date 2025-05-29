import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Tabs from "../components/Dashboard/Tabs";
import axios from "axios";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        // console.log("RESPONSE>>>", response.data);
        setCoins(response.data);
        // setPaginatedCoins(response.data.slice(0, 10));
        // setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
      });
  }, []);
  return (
    <div>
      <Header />
      <Tabs coins={coins} />
    </div>
  );
};

export default DashBoard;
