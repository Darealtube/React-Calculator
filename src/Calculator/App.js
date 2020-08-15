import React, { useState } from 'react';
import './App.css';
import dero from './functions/dero.js';
import { parenthes, parentheses, count1, count2 } from './functions/parenthes1.js';



function App() {
  //INITIALIZE VARIABLES
  const [zero, setzero] = useState("0");
  const [result, setresult] = useState(null);
  const [able,setable] = useState(true);
  const [count,setcount] = useState(0);
    //RESETS EVERYTHING
    function clear(){
      setzero("0");
      setresult(null);
      setable(true);
      setcount(0);
    }
   //CLEARS STUFF AND SOME OTHER STUFF WHICH TRIGGERS DISABLES
    function cee(){
      setzero(prevzero => prevzero.length > 1? prevzero.slice(0, -1) : "0");
      setcount(prevcount => zero[zero.length-1] === ")"? prevcount + 1 : zero[zero.length-1] === "("? prevcount - 1 : prevcount);
      setable(prevable => zero[zero.length-1] === "."? true : able);
    }
   //HANDLEZERO WHEN CLICKED
    function handlezero(e){
        e.persist();
        setzero(dero(zero));
    }
   //HANDLE CLICK, WHICH ARE THE NUMBERS AND OPERATORS, INCLUDING PARENTHESES
    function handleClick(e){
      e.persist();
      if(Number.isInteger(parseInt(e.target.value))){
        setzero(prevzero => {
          if(prevzero === "0"){
            return e.target.value;
          }
          if(prevzero[prevzero.length-1] === ")"){
            return zero + "*" + e.target.value;
          }
          let da = zero.slice(zero.length-2); //TO PREVENT OCTAL NUMBER
          switch(da){
            case "+0":
            case "-0":
            case "*0":
            case "/0":
            case "(0":
            return zero.replace(da, da[0] + e.target.value);
            break;
            default:
            return zero + e.target.value;
            break;
          }
        });
      }
      //OPERATORS
      switch(e.target.value){
       case "+":
         setzero(prevzero => !(prevzero[prevzero.length-1] === '+' || prevzero === "0" || prevzero === "(")? zero + e.target.value : prevzero);
         setable(true);
         break;
       case "=":
         setresult(eval(zero));
         break;
       case "-":
         setzero(prevzero => (prevzero === "0")? e.target.value : !(prevzero[prevzero.length-1] === '-')? zero + e.target.value : prevzero);
         setable(true);
         break;
       case "*":
       case "/":
         setzero(prevzero => (Number.isInteger(parseInt(prevzero[prevzero.length-1])) === true || prevzero[prevzero.length-1] === ')')? zero + e.target.value : prevzero);
         setable(true);
         break;
       case "(":
         setzero(parenthes(zero, count));
         setcount(count1(count, zero));
         setable(true);
         break;
       case ")":
         setzero(parentheses(zero, count));
         setcount(count2(count,zero));
         break;
       case ".":
         setzero(prevzero => prevzero[prevzero.length-1] == ")"? zero + "*0" + e.target.value : zero + e.target.value);
         setable(false);
         break;
      }
    }

  //BUTTONS, DESIGN, ETC.
  return (
      <div>
      <div className ="back">
        <div className = "bodys">
           <br/>
           <div className="calc">{zero}</div>
           <br/>
           <div className="calc">{result}</div>
           <br/>
            <button className="c" onClick={cee}>C</button>
            <button className="c" onClick={clear}>CA</button>
            <button value = "(" onClick={handleClick} className="c">(</button>
            <button disabled={count < 1} value = ")" onClick={handleClick} className="c">)</button>
            <button className="eq" value = "=" onClick={handleClick}>=</button>

           <div className="nums">
             <span>
             <button value = "7" onClick={handleClick}>7</button>
             <button value = "8" onClick={handleClick}>8</button>
             <button value = "9" onClick={handleClick}>9</button>
             <button value = "0" onClick={handlezero}>0</button>
             <button disabled={!able} value = "." onClick={handleClick}>.</button>
             </span>
             <br/>
             <span>
             <button value = "4" onClick={handleClick}>4</button>
             <button value = "5" onClick={handleClick}>5</button>
             <button value = "6" onClick={handleClick}>6</button>
             <button value = "+" onClick={handleClick}>+</button>
             <button value = "-" onClick={handleClick}>-</button>
             </span>
             <br/>
             <span>
             <button value = "1" onClick={handleClick}>1</button>
             <button value = "2" onClick={handleClick}>2</button>
             <button value = "3" onClick={handleClick}>3</button>
             <button value = "*" onClick={handleClick}>x</button>
             <button value = "/" onClick={handleClick}>/</button>
             </span>
           </div>

        </div>
      </div>
      </div>
  );
}

export default App;
