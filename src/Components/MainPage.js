/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react'
import Navs from './Navs'
import Title from './Title';

const MainPage = ({children}) => {
  return (
    <div>
        <Navs />
        <Title/>
        {children}
    </div>

  )
}

export default MainPage;