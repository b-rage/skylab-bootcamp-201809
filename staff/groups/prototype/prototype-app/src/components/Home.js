import React from 'react'
import Search from './Search'
import Carousel from './Carousel';

const Home = (props) => {
  return (
    <div>
      <Search />
      <Carousel title={"Now playing"} listType="now_playing" />
      <Carousel title={"Trending"} listType="trending" />
      <Carousel title={"Popular"} listType="popular" />
    </div>
  )
}

export default Home