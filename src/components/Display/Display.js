import React from 'react';
import classes from './Display.css'


const display =({stringValue,result})=>(
    <div className={classes.Display}>
              {result?<h1>{result}</h1>:<h1>{stringValue}</h1>}
               
            
    </div>
);

export default display;