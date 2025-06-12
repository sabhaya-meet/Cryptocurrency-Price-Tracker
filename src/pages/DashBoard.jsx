import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Tabs from "../components/Dashboard/Tabs";
import axios from "axios";
import SearchComponent from "../components/Dashboard/SearchComponent";
import PaginationControlled from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
import { get100Coins } from "../functions/apiData";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins(); // now returns resolved array
    if (myCoins.length > 0) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
    }
    setIsLoading(false);
  };
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
