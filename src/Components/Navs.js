import React,{memo} from 'react';
import {useLocation} from 'react-router-dom'
import { NavList,LinkStyled } from './show/Navs.styled';


const LINKS = [
  {to:'/',text:'Home'},
  {to:'/starred',text:'starred'}
];

function Navs() {
  const location = useLocation();


  return (
    <div>
    <NavList>{
      LINKS.map(item => (
        <li key={item.to}><LinkStyled key={item.to} to={item.to} className={item.to===location.path ?'active':''}>{item.text}</LinkStyled></li>
      )
      )}
    </NavList>
    </div>
  );
}

export default memo(Navs);