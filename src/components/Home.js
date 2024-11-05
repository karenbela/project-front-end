import React from 'react';
import Search from './Search';
import CardInfo from './CardInfo';
import Generations from './Generations';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Search />
      <CardInfo />
      <Generations />
    </div>
  );
};

export default Home;
