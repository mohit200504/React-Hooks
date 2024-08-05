import React from 'react';
import { useContext } from 'react';
import { context } from './App.js';

function Con2(){


    let info=useContext(context)
   


    return (
        <div>
              <h1> from con2 </h1>
              <h2>{info.father}</h2>
        </div>
    )
}

export default Con2;
