/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react'
import MainPage from '../Components/MainPage'
import ShowGrid from '../Components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';


function Starred(){
  const [starred] = useShows();
  const [isLoading,setIsLoading] = useShows(true);
  const [error,setError] = useShows(null);
  const [shows,setShows] = useShows(null);

  useEffect(() => {
    if(starred && starred.length>0) {
      const promises = starred.map(showId => {
         apiGet(`/show/${showId}`);
      });
      Promise.all(promises)
      .then(api => api.map(show=>{
          {show}
      })
      .then(result => {
        setShows(result);
        setIsLoading(false);
    }).catch(err=>{
      setError(err.message);
      setIsLoading(false);
   }) 
  }
    else{
      setIsLoading(false);
    }
  },[starred]);

  return (
    <MainPage>
    {isLoading && <div>Starred shows are still loading...</div>}
    {error && <div>Error occured: {error}</div>}
    {!isLoading && !shows && <div>No Starred Shows</div>}
    {!isLoading && !error && shows && <ShowGrid data={shows}/>}
    </MainPage>
  );
}

export default Starred;