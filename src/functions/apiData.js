import axios from "axios";

export const getCoinData = async (id) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("ERROR getCoinData >>>", error.message);
    return null;
  }
};

export const getCoinPrices = async (id, days, priceType) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    );
    return response.data[priceType];
  } catch (error) {
    console.error("ERROR getCoinPrices >>>", error.message);
    return [];
  }
};

export const get100Coins = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    return response.data;
  } catch (error) {
    console.error("ERROR get100Coins >>>", error.message);
    return [];
  }
};
