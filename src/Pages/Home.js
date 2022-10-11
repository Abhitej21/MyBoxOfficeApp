/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */

/* eslint arrow-body-style: ["error", "as-needed", { 
"requireReturnForObjectLiteral": true }] */

import React,{useState} from 'react'
import ActorGrid from '../Components/actor/ActorGrid';
import MainPage from '../Components/MainPage';
import ShowGrid from '../Components/show/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input,setInput] = useState('');
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
  
  const onChange = (ev) => {
    setInput(ev.target.value);
    
  };

  
  function displayInfo(){
    if(results && results.length===0){
      return <div>No results</div>;
    }
    if(results && results.length > 0){
      return results[0].show ? <ShowGrid data={results}/>:<ActorGrid data={results}/>;
    }
      return null;
  };
  const changeOption = (ev) => {
     setOption(ev.target.value);
  }
  return (
    
      <MainPage>
      <input type="text" placeholder="Search for something" value={input} onChange={onChange} onKeyDown={onKeyDown}/>
      <div>
        <label htmlFor="show">
          Shows <input type="radio" id="show" checked={isShows} value="shows" onChange={changeOption}/>
        </label>

        <label htmlFor="actor">
          Actors <input type="radio" id="actor" checked={!isShows} value="people" onChange={changeOption}/>
        </label>
      </div>
      <button type="button" onClick={searchInfo}>Search</button>
      {displayInfo()}
      </MainPage>
    
  );
  
};

export default Home;