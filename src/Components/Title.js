import React,{memo} from 'react'
import { TitleWrapper } from './show/TitleStyled';

function Title({head,para}){
  return (
    <TitleWrapper>
        <h1>{head}</h1>
        <p>{para}</p>

    </TitleWrapper>
  )
}

export default memo(Title);