/* eslint-disable import/no-unresolved */

/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react'
import ShowCard from './ShowCard'
import PAGE_NOT_FOUND from '../../images/not-found.png'
import { FlexGrid } from '../styled';

const ShowGrid = ({data}) => {
    return <FlexGrid>
        {
            data.map(({show}) => <ShowCard key={show.id} id={show.id} name={show.name}
             image={show.image?show.image.medium:PAGE_NOT_FOUND}
             summary = {show.summary}
             />)
        }
    </FlexGrid>
        
};

export default ShowGrid;