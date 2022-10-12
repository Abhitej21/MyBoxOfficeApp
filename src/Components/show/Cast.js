/* eslint-disable arrow-body-style */
import React from 'react'
import IMG_PLACEHOLDER from '../../images/not-found.png'
import { CastList } from './Cast.styled';

// eslint-disable-next-line react/function-component-definition
const Cast = ({ cast }) => {
    return (
      <CastList>
        {cast.map(({ person, character, voice }, key) => (
          <div key={key}>
            <div className="pic-wrapper">
              <img
                src={person.image ? person.image.medium : IMG_PLACEHOLDER}
                alt="cast-person"
              />
            </div>
            <div className="actor">
              <span>
                <span className="bold">{person.name}</span>
                 | {character.name} {voice ? '| Voice' : ''}
              </span>
            </div>
          </div>
        ))}
      </CastList>
    );
  };
  
export default Cast