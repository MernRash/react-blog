import React from 'react';
import './style.css';


function SectionTitle(props){

    return(
        <h3 style={{width:props.width,textTransform:props.transform}}>{props.text}</h3>
    )
}

export default SectionTitle;