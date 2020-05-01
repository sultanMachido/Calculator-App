import React from 'react';
import classes from './Button.css';


const button = ({number,add})=>(
    <div className={classes.Button} onClick={add}>
        <h3>{number}</h3>
    </div>
);


export default button;