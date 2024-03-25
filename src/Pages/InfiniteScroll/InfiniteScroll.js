// src/components/InfiniteScroll.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./InfiniteScroll.css"
import Card from '../../components/Card/Card/Card';

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);





  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
      const newData = response.data;
      console.log(newData)
      setData(prevData => [...prevData, ...newData]);
      setHasMore(newData.length > 0);
      setPage(page+1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    if (!loading && window.innerHeight + document.documentElement.scrollTop 
        >= document.documentElement.offsetHeight) {

      fetchData(page);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div className='infinite'>
      <h1>Infinite Scroll App</h1>
      <div className='infinite-scroll'>
      {data.map((item,index) => (
        <Card post={item} key={index}/>
      ))}
      </div>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>End of data</p>}
    </div>
  );
};

export default InfiniteScroll;