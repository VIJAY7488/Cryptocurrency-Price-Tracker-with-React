import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../Components/Common/Header'
import TabComponent from '../Components/Dashboard/TabComponent'


function DashboardPage() {


  const [coin, setCoin] = useState([]);

  useEffect(() =>{
    const fetchData = async () => {
      const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      console.log(result.data);
      setCoin(result.data);
    }
    fetchData();
  }, [])

  return (
    <div>
      
        <Header/>
        <TabComponent coin={coin} />
    </div>
  )
}

export default DashboardPage