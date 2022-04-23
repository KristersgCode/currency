import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import Heading from './Heading';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => {
        setCoins(res.data)
      }).catch(error => alert("error"));
  }, []);

  const handleChange = e => {
    //On search target that input
    setSearch(e.target.value)
  }
  //Making everithing you type to lowercase
  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (

    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          
          <input type="text" placeholder='Search' className="coin-input" onChange={handleChange} />
        </form>
      </div>
      <Heading />
      {/*  Mapo pāri visiem norādītajiem coin API elementiem */}
      {filteredCoins.map(coin => {
        return (
          //id from API
          <Coin key={coin.id}
            //name from Coin.js
            name={coin.name}
            //image from Coin.js
            image={coin.image}
            //symbol from Coin.js
            symbol={coin.symbol}
            //price from API
            price={coin.current_price}
            //from API
            priceChange={coin.price_change_percentage_24h}
            //from API
            volume={coin.total_volume}
          />
        )
      })}
    </div>

  );
}

export default App;
