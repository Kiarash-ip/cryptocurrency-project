import React, { useEffect, useState } from "react";

// api
import { getCoin } from "../services/api";
import Coin from "./Coin";

// components
import Loader from "./Loader";

// styles
import styles from "./Landing.module.css";

export default function Landing() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setCoins(await getCoin());
    };
    fetchData();
  }, []);

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {coins.length ? (
        <div className={styles.coinContainer}>
          {searchedCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketCap={coin.market_cap}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
