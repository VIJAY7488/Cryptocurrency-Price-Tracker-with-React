import React from 'react';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function List({ coin }) {
  return (
    <>
      <div>
        <div className='flex justify-around items-center w-full hover:bg-gray-700 rounded-3xl'>
          {/* Coin Image and Basic Info */}
          <div className='flex justify-center items-center w-52'>
            <img 
              className='h-[40px] m-5'
              draggable="false" 
              src={coin.image} 
              alt='crypto'
            />
            <div>
              <h1 className='text-xl font-semibold uppercase'>{coin.symbol}</h1>
              <h1 className='text-gray-500 font-medium'>{coin.name}</h1>
            </div>
          </div>
          
          {/* Price Change and Market Cap Change */}
          <div className='flex justify-center items-center'>
            <div 
              className={`border-2 flex justify-center items-center gap-3 p-1 ml-4 w-40 rounded-xl hover:text-white ${
                coin.price_change_24h.toFixed(2) < 0 || coin.market_cap_change_percentage_24h.toFixed(2) < 0
                  ? 'border-red-600 text-red-600 hover:bg-red-600'
                  : 'border-green-600 text-green-600 hover:bg-green-600'
              }`}
            >
              {/* Conditional rendering based on price change */}
              {coin.price_change_24h.toFixed(2) < 0 || coin.market_cap_change_percentage_24h.toFixed(2) < 0 ? (
                <>
                  <span className='text-md'>$ {coin.price_change_24h.toFixed(2)}</span>
                  <span className='space-x-3'>
                    {coin.market_cap_change_percentage_24h.toFixed(2)}%
                  </span>
                </>
              ) : (
                <>
                  <span>$ {coin.price_change_24h.toFixed(2)}</span>
                  <span className='space-x-3'>
                    {coin.market_cap_change_percentage_24h.toFixed(2)}%
                  </span>
                </>
              )}
            </div>
            
            {/* Trend Indicator */}
            <div 
              className={`ml-5 border-2 rounded-full p-1 ${
                coin.price_change_24h.toFixed(2) < 0 || coin.market_cap_change_percentage_24h.toFixed(2) < 0
                  ? 'border-red-600'
                  : 'border-green-600'
              }`}
            >
              {/* Conditional rendering based on price change */}
              {coin.price_change_24h.toFixed(2) < 0 || coin.market_cap_change_percentage_24h.toFixed(2) < 0 ? (
                <span className='text-red-600'>
                  <TrendingDownRoundedIcon/>
                </span>
              ) : (
                <span className='text-green-600'>
                  <TrendingUpRoundedIcon/>
                </span>
              )}
            </div>
          </div>

          {/* Current Price */}
          <div className='text-center'>
            <span className={`text-lg font-semibold ${
              coin.price_change_24h.toFixed(2) < 0 || coin.market_cap_change_percentage_24h.toFixed(2) < 0
                ? 'text-red-600'
                : 'text-green-600'
            }`}>
              $ {coin.current_price.toLocaleString()}
            </span>
          </div>   

          {/* Total Volume and Market Cap */}
          <span>
            {coin.total_volume.toLocaleString()}
          </span>
          <span>
            {coin.market_cap.toLocaleString()}
          </span>
        </div>
      </div>
    </>
  );
}

export default List;
