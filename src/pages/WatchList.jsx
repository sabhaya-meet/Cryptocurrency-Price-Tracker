import React from "react";
import Header from "../components/Common/Header/Header";
import { useSelector } from "react-redux";
import List from "../components/Dashboard/List";
import Grid from "../components/Dashboard/Grid";

const WatchList = () => {
  const starredItems = useSelector((state) => state.star.starredItems);
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center flex-wrap gap-[1.5rem]">
        {starredItems?.map((item) => (
          <Grid coin={item} />
        ))}
      </div>
    </div>
  );
};

export default WatchList;
