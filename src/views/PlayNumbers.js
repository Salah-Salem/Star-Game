import React from 'react';
import { colors } from '../utils';
export default function PlayNumbers (props) {
    return(
        <button 
            className="number" 
            style={{background: colors[props.status]}}
            onClick={()=>{props.onClick(props.number, props.status)}}
            >
                {props.number}
        </button>
    );
}