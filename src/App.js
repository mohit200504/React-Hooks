/*import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

import Home from './home.js';
import Con from './contact.js';
import About from './about.js';
function App() {
  return (
    
    <div className="App">
      <Router>

      
      <div className='head'>
        <Link to="/home"> <button>home</button></Link>
        <Link to="/about"> <button>about</button></Link>
        <Link to="/contact"> <button>contact</button></Link>
      </div>


      <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about"   element={<About/>}></Route>
          <Route  path="/contact"  element={<Con/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;*/


//react hooks {useState}


/*import './App.css';
import { useState } from 'react';


function App(){
  let [number,updatenum]=useState(0)

  return (

  <center>
    <div>
      <h1>counter:{number}</h1>
  </div>
  <button style={{background:"grey",color:"white",border:"1px solid black"}} onClick={()=>{updatenum(number++)}}>+</button>
  <button style={{background:"grey",color:"white",border:"1px solid black"}}  onClick={()=>{updatenum(number--)}}>-</button>
  </center>
  
  )
}

export default App;*/

//react hooks {useEffect}


/*import { useEffect,useState } from 'react';


function App(){
  var d=new Date();
let [date,update]=useState(d);

useEffect(()=>{
  setTimeout(()=>{
    update(new Date())
  },1000)
})

  return (
    <div>
    <h1>{date.toLocaleTimeString()}</h1>
    </div>
  )
}

//export default App;

*/

//react hooks {useRef}

/*import {useRef} from 'react';



function App(){

  let data=useRef(0);
  console.log(data)

  return (
    <div>
      <h1 ref={data}></h1>
  { 
    data.innerHTML="MOHITH POGIRI"

  }
  <h2>value : {data.current}</h2>
  <h2>value : {data.current}</h2>
  
    </div>
  )
}

export default App;
*/


//react hooks {useMemo}

/*import {useMemo,useState} from 'react';


function App(){

  let [n1,upn1]=useState("");
  let [n2,upn2]=useState("");
  let [value,upvalue]=useState("");

  useMemo(()=>{

    let n11=parseFloat(n1)
    let n22=parseFloat(n2)

     upvalue(n11+n22)

  },[n1,n2])
  



  return(
    <div>
      <h1>hello memo</h1>
      <input type='number' value={n1} onChange={(e)=>{upn1(e.target.value)}}></input>
      <input type='number' value={n2} onChange={(e)=>{upn2(e.target.value)}}></input>
      <h4>{value}</h4>
      
    </div>
  )
}

export default App;*/

//react hooks {useContext}.

/*import { createContext } from "react";
import Con1 from "./con1";
 export let context=createContext();
 

 var data={
  name:"mohih",
  father:"ravi",
  mother:"jaya"
 }

 function App(){

  return(
    <div>
<context.Provider value={data}>

<Con1/>

</context.Provider>
    
    </div>
  )
 }

export default App;*/


// react {Costum}
import React from 'react';
import Get from './data.js';

function App() {
  const info = Get();

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{info.id}</h1>
      {/* Display other info properties if needed */}
    </div>
  );
}

export default App;


