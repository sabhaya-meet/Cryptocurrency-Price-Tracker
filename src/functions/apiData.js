import axios from "axios";

export const getCoinData = (id) => {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      return response.data;
      //   const data = response.data;
      //   setCoinData({
      //     id: data.id,
      //     name: data.name,
      //     symbol: data.symbol,
      //     image: data.image.large,
      //     desc: data.description.en,
      //     price_change_percentage_24h:
      //       data.market_data.price_change_percentage_24h,
      //     total_volume: data.market_data.total_volume.usd,
      //     current_price: data.market_data.current_price.usd,
      //     market_cap: data.market_data.market_cap.usd,
      //   });
    })
    .catch((error) => {
      console.log("ERROR>>>", error.message);
      setIsLoading(false);
    });
  return myData;
};

export const getCoinPrices = (id, days, priceType) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      return response.data[priceType];
    })
    .catch((error) => {
      console.log("ERROR>>>", error.message);
    });
  return prices;
};
