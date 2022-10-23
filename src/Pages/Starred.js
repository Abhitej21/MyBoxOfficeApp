/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react'
import MainPage from '../Components/MainPage'
import ShowGrid from '../Components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';


function Starred(){
  const [starred] = useShows();
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);
  const [shows,setShows] = useState(null);

  useEffect(() => {
    if(starred && starred.length>0) {
      const promises = starred.map(showId => 
     apiGet(`/shows/${showId}`) 
      );
      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <MainPage>
    {isLoading && <div>Starred shows are still loading...</div>}
    {error && <div>Error occured: {error}</div>}
    {!isLoading && !shows && <div>No Starred Shows</div>}
    {!isLoading && !error && shows && <ShowGrid data={shows}/>}
    </MainPage>
  );
};

export default Starred;