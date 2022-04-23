import React from 'react'
import "./Coin.css";
function Coin({ name, image, symbol, price, priceChange}) {
    return (
      
        <div className="coin-cointainer">
            <div className="coin-row">
                <div className="coin">
                    {/* image from App.js */}
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    {/* symbol from App.js */}
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    
               
                    
                    {priceChange < 0 ? (
                        <p className='coin-percent red'>
                            {/* Adding two decimal places and css class */}
                            {priceChange.toFixed(2)}%</p>
                    ) : (<p className='coin-percent green'>
                        {priceChange.toFixed(2)}%</p>)}
                        <div className='c-container'>
                             {/* price from App.js */}
                    <p className="coin-price">${price}</p>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Coin