import React from 'react';
import { utils } from '../utils';

export default function DisplayStars (props) {
    return(
        <>
        {utils.range(1,props.count).map(starId => 
              <div key={starId} className="star"/>
              )}
        </>
    );
}