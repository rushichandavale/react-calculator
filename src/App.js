import React, { useState } from 'react'
import './App.css'
// import './index.css'


const App = () => {

  const [result, SetResult] = useState("");

  const handleClick = (e) =>{
    SetResult(result.concat(e.target.id))
  }

  const clear = () =>{
    SetResult("")
  }

  const deleteElement = () =>{
    SetResult(result.slice(0, -1))
  };

  const calculate = () => {
    try {
      /* eslint no-eval: 0 */SetResult(eval(result).toString())
    } catch (error) {
      SetResult("Invalid")
    }
  }

  return (
    <div className='calculator'>
      <input type="text" value={result} disabled/>

      <div className='buttons'>
        <button className='operator' onClick={clear}>AC</button>
        <button className='operator' onClick={deleteElement}>DE</button>
        <button className='operator' id='.' onClick={handleClick}>.</button>
        <button className='operator' id='/' onClick={handleClick}>/</button>

        <button className='number'  id='7' onClick={handleClick}>7</button>
        <button className='number'  id='8' onClick={handleClick}>8</button>
        <button className='number'  id='9' onClick={handleClick}>9</button>
        <button className='operator'  id='*' onClick={handleClick}>*</button>

        <button className='number'  id='4' onClick={handleClick}>4</button>
        <button className='number'  id='5' onClick={handleClick}>5</button>
        <button className='number'  id='6' onClick={handleClick}>6</button>
        <button className='operator'  id='-' onClick={handleClick}>-</button>

        <button className='number'  id='1' onClick={handleClick}>1</button>
        <button className='number'  id='2' onClick={handleClick}>2</button>
        <button className='number'  id='3' onClick={handleClick}>3</button>
        <button className='operator'  id='+' onClick={handleClick}>+</button>

        <button className='number'  id='00' onClick={handleClick}>00</button>
        <button className='number'  id='0' onClick={handleClick}>0</button>
        <button className='operator col-span-2'  id='=' onClick={calculate}>=</button>

      </div>
    </div>
  )
}

export default App
