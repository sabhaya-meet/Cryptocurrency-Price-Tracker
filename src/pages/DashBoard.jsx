import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Tabs from "../components/Dashboard/Tabs";
import axios from "axios";
import SearchComponent from "../components/Dashboard/SearchComponent";
import PaginationControlled from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };
  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.symbol.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <SearchComponent
            searchText={searchText}
            onSearchChange={onSearchChange}
          />
          <Tabs coins={searchText ? filteredData : paginatedCoins} />
          {!searchText && (
            <PaginationControlled
              handlePageChange={handlePageChange}
              page={page}
            />
          )}
          <hr />
        </div>
      )}
    </>
  );
};

export default DashBoard;
