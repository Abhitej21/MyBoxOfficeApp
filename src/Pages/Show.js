/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useReducer} from 'react'
import {useParams} from 'react-router-dom'
import { apiGet } from '../misc/config';
import Cast from '../Components/show/Cast';
import Details from '../Components/show/Details';
import Seasons from '../Components/show/Seasons';
import ShowMainData from '../Components/show/ShowMainData';
import { InfoBlock, ShowPageWrapper } from '../Components/show/Show.styled';


const reducer = (prevState,action) => {
   switch(action.type){
    case 'FETCH_SUCCESS': {
      return {show: action.show,error: null,isLoading: false}
    }
    
    case 'FETCH_FAILED': {
      return {isLoading: false, error: action.error}
    }

    default: return prevState;
   }
}
const initialState = {
  show: null,
  isLoading: true,
  error: null 
}

function Show() {

    const {id} = useParams();
  
    const [{show,isLoading,error},dispatch] = useReducer(reducer,initialState);

    useEffect(() => {
      let isMounted = true;
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
          if(isMounted){
            dispatch({type: 'FETCH_SUCCESS',show: results});
          }
        })
        .catch(err=>{
          if(isMounted){
            dispatch({type:'FETCH_FAILED',error: err.message});
            }
        });
        return () => {
          isMounted = false;
        };
    },[id]);
  if(isLoading){
    return <div>Data is being loaded.</div>
  }
  if(error){
    return <div>Error occured.</div>
  }
  return <ShowPageWrapper>
    <ShowMainData image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres}/>
    <InfoBlock>
      <h2>Details</h2>
      <Details status={show.status} network={show.network} premiered={show.premiered}/>
    </InfoBlock>
    <InfoBlock>
      <h2>Seasons</h2>
      <Seasons seasons={show._embedded.seasons}/>
    </InfoBlock>
    <InfoBlock>
      <h2>Cast</h2>
      <Cast cast={show._embedded.cast}/>
    </InfoBlock>
  </ShowPageWrapper>
}

export default Show;