import { useState ,useEffect } from 'react';
import "./Test.css"

const Square = ({value , onSquareClick})=>{

   
    return(<button onClick={onSquareClick} className="button-option" style={{width:"100px",height:"100px"}}>{value}</button>)
}

 const Board = ()=>{
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null))
   

    const handleClick = (i)=>{
        console.log("iiiii",i);
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
            setSquares(nextSquares);
        }else{
            nextSquares[i] = "0";
            setSquares(nextSquares);
        }
        setXIsNext(!xIsNext)
       
    }


    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }


    return(
        <>
        <div className="status">{status}</div>
         {/* sds  */}
        <div className='wrapper'>
        <div className='container'>
        <div className='mainn'>
        <Square    style={{}}  value={squares[0]} onSquareClick={()=>{handleClick(0)}} />
        <Square   value={squares[1]} onSquareClick={()=>{handleClick(1)}} />
        <Square   value={squares[2]} onSquareClick={()=>{handleClick(2)}}/>
        </div>
        <div className=''></div>
        <div className='mainn'>
        <Square   value={squares[3]} onSquareClick={()=>{handleClick(3)}}/>
        <Square   value={squares[4]} onSquareClick={()=>{handleClick(4)}}/>
        <Square   value={squares[5]} onSquareClick={()=>{handleClick(5)}}/>
        </div>

        <div className='mainn'>
        <Square   value={squares[6]} onSquareClick={()=>{handleClick(6)}}/>
        <Square   value={squares[7]} onSquareClick={()=>{handleClick(7)}}/>
        <Square   value={squares[8]} onSquareClick={()=>{handleClick(8)}}/>
        </div>
        </div>
        
 </div>
        <button onClick={()=>{setSquares(Array(9).fill(null))}}>start now</button>
       
        </>
    )
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  export  {Board}


  