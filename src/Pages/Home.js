/* eslint-disable react/function-component-definition */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
import React,{useState} from 'react'
import MainPage from '../Components/MainPage';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input,setInput] = useState('');
  const [results,setResults] = useState(null);

  const searchInfo = () => {
     apiGet(`/search/shows?q=${input}`).then(result => 
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
      return (
        <div>
          {results.map(item => 
           <div key={item.show.id}>{item.show.name}</div>
          )}
        </div>
      )
    }
    
      return null;

  };

  return (
    <>
      <MainPage/>
      <input type="text" value={input} onChange={onChange} onKeyDown={onKeyDown}/>
      <button type="button" onClick={searchInfo}>Search</button>
      {displayInfo()}
    </>
  );
  
};

export default Home;