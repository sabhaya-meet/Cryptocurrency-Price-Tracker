import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import SelectCoins from "../components/compare/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import { getCoinData, getCoinPrices } from "../functions/apiData";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import LineChart from "../components/Coin/LineChart";
import TogglePriceType from "../components/Coin/PriceType";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Data, setCrypto1Data] = useState(null);
  const [crypto2Data, setCrypto2Data] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    const newDays = event.target.value;
    setDays(newDays);

    const prices1 = await getCoinPrices(crypto1, newDays, priceType);
    const prices2 = await getCoinPrices(crypto2, newDays, priceType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);

    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  const getData = async () => {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if (data1) {
      setCrypto1Data({
        id: data1.id,
        name: data1.name,
        symbol: data1.symbol,
        image: data1.image.large,
        desc: data1.description.en,
        price_change_percentage_24h:
          data1.market_data.price_change_percentage_24h,
        total_volume: data1.market_data.total_volume.usd,
        current_price: data1.market_data.current_price.usd,
        market_cap: data1.market_data.market_cap.usd,
      });
    }

    if (data2) {
      setCrypto2Data({
        id: data2.id,
        name: data2.name,
        symbol: data2.symbol,
        image: data2.image.large,
        desc: data2.description.en,
        price_change_percentage_24h:
          data2.market_data.price_change_percentage_24h,
        total_volume: data2.market_data.total_volume.usd,
        current_price: data2.market_data.current_price.usd,
        market_cap: data2.market_data.market_cap.usd,
      });
    }

    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      if (prices1?.length && prices2?.length) {
        settingChartData(setChartData, prices1, prices2);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    const selectedCoin = event.target.value;

    if (isCoin2) {
      setCrypto2(selectedCoin);
      const data = await getCoinData(selectedCoin);
      if (data) {
        setCrypto2Data({
          id: data.id,
          name: data.name,
          symbol: data.symbol,
          image: data.image.large,
          desc: data.description.en,
          price_change_percentage_24h:
            data.market_data.price_change_percentage_24h,
          total_volume: data.market_data.total_volume.usd,
          current_price: data.market_data.current_price.usd,
          market_cap: data.market_data.market_cap.usd,
        });
      }
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(selectedCoin, days, priceType);
      settingChartData(setChartData, prices1, prices2);
    } else {
      setCrypto1(selectedCoin);
      const data = await getCoinData(selectedCoin);
      if (data) {
        setCrypto1Data({
          id: data.id,
          name: data.name,
          symbol: data.symbol,
          image: data.image.large,
          desc: data.description.en,
          price_change_percentage_24h:
            data.market_data.price_change_percentage_24h,
          total_volume: data.market_data.total_volume.usd,
          current_price: data.market_data.current_price.usd,
          market_cap: data.market_data.market_cap.usd,
        });
      }
      const prices1 = await getCoinPrices(selectedCoin, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : crypto1Data && crypto2Data ? (
        <>
          <div className="flex justify-start gap-8 m-6 items-center">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPTag={true}
            />
          </div>

          <div className="bg-[var(--darkgrey)] mx-auto my-[1.5rem] px-4 py-4 rounded-2xl w-[90%] block">
            <List coin={crypto1Data} />
          </div>

          <div className="bg-[var(--darkgrey)] mx-auto my-[1.5rem] px-4 py-4 rounded-2xl w-[90%] block">
            <List coin={crypto2Data} />
          </div>

          <div className="bg-[var(--darkgrey)] mx-auto my-[1.5rem] px-4 py-4 rounded-2xl w-[90%] block">
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>

          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      ) : (
        "No data available"
      )}
    </div>
  );
};

export default ComparePage;
