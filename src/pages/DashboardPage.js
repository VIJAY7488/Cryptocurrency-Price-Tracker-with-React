import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Common/Header';
import TabComponent from '../Components/Dashboard/TabComponent';
import Search from '../Components/Dashboard/Search';
import Paginations from '../Components/Dashboard/Pagination';

function DashboardPage() {
  const [search, setSearch] = useState("");
  const [coin, setCoin] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        setCoin(result.data);
        setFilteredCoins(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Update filteredCoins based on search
  useEffect(() => {
    const filtered = coin.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCoins(filtered);
    setPage(1); // Reset to page 1 when search changes
  }, [search, coin]);

  // Update paginatedCoins based on page and filteredCoins
  const paginatedCoins = filteredCoins.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const onSearchChange = (value) => {
    setSearch(value);
  };

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabComponent coin={paginatedCoins} />
      <Paginations 
        page={page} 
        handleChange={handlePageChange} 
        count={Math.ceil(filteredCoins.length / itemsPerPage)}
      />
    </div>
  );
}

export default DashboardPage;
