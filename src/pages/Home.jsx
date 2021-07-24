import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './../services/api.js';
import  HeaderHome  from './components/HeaderHome';
import HomeSection from './components/HomeSection.jsx';
import TableAnime from './components/TableAnime.jsx';


function Home() {
  const  animeData  = useSelector((state) =>  state.animeData);
  const dispatch = useDispatch();

  useEffect(() => {
     getData(dispatch);
  }, [dispatch]);

  return (
    <div>
      <HeaderHome />
      <HomeSection />
      <TableAnime animeData={ animeData } />
    </div>
  )
}


export default Home;
