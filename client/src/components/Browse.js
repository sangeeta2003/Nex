import React, { useEffect } from 'react'
import Header from './Header'
import {useSelector} from 'react-redux';
import MainContainer from './MainContainer.js';
import MovieContainer from './MovieContainer.js';

import { useNavigate } from 'react-router-dom';
const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();

useEffect(()=>{
  if(!user){
    navigate("/");
  }
},[]);

  
  return (
    <div>
    <Header/>
    <div>
       <MainContainer/>
       <MovieContainer/>
    </div>
</div>
  )
}

export default Browse