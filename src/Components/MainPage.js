/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react'
import Navs from './Navs'
import Title from './Title';

const MainPage = ({children}) => {
  return (
    <div>
        <Navs />
        <Title head='BOX OFFICE' para='Are you searching for a movie or an actor?'/>
        {children}
    </div>

  )
}

export default MainPage;