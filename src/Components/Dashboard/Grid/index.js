import React from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function GridPage({coin}) {
  return (
    <>
       <div 
       className='w-[290px] h-[300px] border border-blue-600 bg-slate-800 rounded-md shadow-md shadow-slate-600'>
        
        <div className='flex items-center'>
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

        <div className='flex'>
         
         <div 
          className={`border-2 flex justify-center items-center gap-3 
                    ml-4 w-40 rounded-lg ${
                      coin.price_change_24h.toFixed(2) < 0 || coin.market_cap_change_percentage_24h.toFixed(2) < 0
                        ? 'border-red-600'
                        : 'border-green-600'
                    }`}
          >
           
           {coin.price_change_24h.toFixed(2) < 0 || coin.market_cap_change_percentage_24h.toFixed(2) < 0 ? (
            <>
             <span className='text-red-600 text-md'>$ {coin.price_change_24h.toFixed(2)}</span>
             <span className='space-x-3 text-red-600'>
               {coin.market_cap_change_percentage_24h.toFixed(2)}%
             </span>
            </>
          ) : (
            <>
             <span className='text-green-600'>$ {coin.price_change_24h.toFixed(2)}</span>
             <span className='space-x-3 text-green-600'>
               {coin.market_cap_change_percentage_24h.toFixed(2)}%
             </span>
            </>
         )}
         </div>
        
        <div 
          className={`ml-5 border-2 rounded-full p-1 ${
            coin.price_change_24h.toFixed(2) < 0 || coin.market_cap_change_percentage_24h.toFixed(2) < 0
              ? 'border-red-600'
              : 'border-green-600'
          }`}
        >
         {
             coin.price_change_24h.toFixed(2) < 0 || coin.market_cap_change_percentage_24h.toFixed(2) < 0 ? (
                
                    <span className='text-red-600'>
                        <TrendingDownRoundedIcon/>
                    </span>

             ) : (
                
                   <span className='text-green-600'>
                    <TrendingUpRoundedIcon/>
                   </span>
                 
             )
          }
        </div>

       </div>

       <div className='p-1 m-4'>
         <span className={`text-lg font-semibold ${coin.price_change_24h.toFixed(2) < 0 || coin.market_cap_change_percentage_24h.toFixed(2) < 0
                        ? 'text-red-600'
                        : 'text-green-600'}`}>
           $ {coin.current_price.toLocaleString()}
         </span>
       </div>

       <div className='p-1 m-4 flex flex-col gap-4 text-gray-500'>
        <span>
          Total Volume : {coin.total_volume.toLocaleString()}
        </span>

        <span>
          Total Volume : {coin.market_cap.toLocaleString()}
        </span>
       </div>

      </div>
    </>
  )
}

export default GridPage