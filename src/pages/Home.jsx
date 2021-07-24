import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './../services/api.js'


function Home() {
  const { animeData } = useSelector((state) => ({ animeData: state.animeData }))
  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);

  return (
    <div>
      
    </div>
  )
}

export default Home;
