import React, { useState } from 'react'
import Sqaure from './Sqaure'



function Board() {

    const [state , setstate] = useState(Array(9).fill(null))
    const [x_turn , setx_turn] = useState (true)
    const [count , setcount] = useState(0)

    const handleClick = (index) => {
        if (state[index] !== null){
            return ;
        }
        const copyState = [...state];
        copyState[index] = x_turn ? "X" : "O";
        setcount(count+1);
        setx_turn (!x_turn);
        setstate(copyState);
    }

   
    const checkWinner = () => {
        const winnerLogic = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
    
        for (let logic of winnerLogic) {
          const [a, b, c] = logic;
          if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
            return state[a];
          }
        }
    
        return false;
      };
    
    const isWinner = checkWinner();
    
  return (
    <div className='board-container'>
         
       {isWinner ? (
       <>

        {isWinner} Won The Game <button onClick={()=>{
            setstate(Array(9).fill(null))
        }}>PLAY AGAIN</button>
       </>) : (
       <>

       <h1>Tic Tac Toe</h1>
       <h3>{x_turn ? "Player X turn " : "Player O turn"}</h3>
       <div className='board-row'>
            <Sqaure onClick =  {()=>{handleClick(0)}}  val = {state[0]}></Sqaure>
            <Sqaure onClick =  {()=>{handleClick(1)}}  val = {state[1]}></Sqaure>
            <Sqaure onClick =  {()=>{handleClick(2)}}  val = {state[2]}></Sqaure>
        </div>
        <div className='board-row'>
            <Sqaure onClick =  {()=>{handleClick(3)}}  val = {state[3]}></Sqaure>
            <Sqaure onClick =  {()=>{handleClick(4)}}  val = {state[4]}></Sqaure>
            <Sqaure onClick =  {()=>{handleClick(5)}}  val = {state[5]}></Sqaure>
        </div>
        <div className='board-row'>
            <Sqaure onClick =  {()=>{handleClick(6)}}  val = {state[6]}></Sqaure>
            <Sqaure onClick =  {()=>{handleClick(7)}}  val = {state[7]}></Sqaure>
            <Sqaure onClick =  {()=>{handleClick(8)}}  val = {state[8]}></Sqaure>
        </div>
       </>)
       }
    </div>
  )
}

export default Board