import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Common/Header';
import TabComponent from '../Components/Dashboard/TabComponent';
import Search from '../Components/Dashboard/Search';

function DashboardPage() {
  const [search, setSearch] = useState("");
  const [coin, setCoin] = useState([]);

  const onSearchChange = (value) => {
    console.log(value);
    setSearch(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        setCoin(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabComponent coin={coin} />
    </div>
  );
}

export default DashboardPage;
