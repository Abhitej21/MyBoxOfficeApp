/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */

/* eslint arrow-body-style: ["error", "as-needed", { 
"requireReturnForObjectLiteral": true }] */

import React,{useState,useCallback} from 'react'
import ActorGrid from '../Components/actor/ActorGrid';
import ShowGrid from '../Components/show/ShowGrid';
import MainPage from '../Components/MainPage';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchInput,SearchButtonWrapper } from './Home.styled';
import CustomRadio from '../Components/CustomRadio';


function displayInfo(results){
  if(results && results.length===0){
    return <div>No results</div>;
  }
  if(results && results.length > 0){
    return results[0].show ? <ShowGrid data={results}/>:<ActorGrid data={results}/>;
  }
    return null;
};


const Home = () => {
  const [input,setInput] = useLastQuery();
  const [results,setResults] = useState(null);
  const [option,setOption] = useState('shows');

  const isShows = option==='shows';


  const searchInfo = () => {
     apiGet(`/search/${option}?q=${input}`).then(result => 
      setResults(result));
  }
  const onKeyDown = (ev) => {
    if(ev.keyCode===13){
      searchInfo();
    }
  };
  
  const onChange = useCallback((ev) => {
    setInput(ev.target.value);
    
  },[setInput]);

  
 
  const changeOption = useCallback((ev) => {
    setOption(ev.target.value);
 },[]);
  return (
    
      <MainPage>
      <SearchInput type="text" placeholder="Search for something" value={input} onChange={onChange} onKeyDown={onKeyDown}/>
      <RadioInputsWrapper>
        <div>
        <CustomRadio label="shows" id="show" checked={isShows} value="shows" onChange={changeOption}/>
      
        </div><div>
        <CustomRadio label="actor" id="actor" checked={!isShows} value="people" onChange={changeOption}/>
    
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
      <button type="button" onClick={searchInfo}>Search</button>
      </SearchButtonWrapper>
      {displayInfo(results)}
      </MainPage>
    
  );
  
};

export default Home;