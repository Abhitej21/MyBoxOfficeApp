/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */

/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React from 'react'
import { FlexGrid } from '../styled';
import ActorCard from './ActorCard';
import PAGE_NOT_FOUND from '../../images/not-found.png'

const ActorGrid = ({data}) => {
  return <FlexGrid>
    {
        data.map(({person}) => 
             <ActorCard key={person.id} 
             name={person.name} 
             gender={person.gender}
             country={person.country?person.country.name:null}
             birthday={person.birthday}
             deathday={person.deathday}
             image={person.image?person.image.medium:PAGE_NOT_FOUND}
               />
        )
    }
  </FlexGrid>
}

export default ActorGrid;